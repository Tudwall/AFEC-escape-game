import { EnigmaManager } from "./enigmes/EnigmaManager.js";
import enigmes from "./enigmes/enigmes.js";
import { RoomManager } from "./RoomManager.js";

export class GameEngine {
  constructor() {
    this.currentIndex = 0;
    this.enigmas = new EnigmaManager(enigmes);
    this.roomManager = new RoomManager(this.currentIndex);
  }

  loadFirstRoom() {
    this.currentIndex = 1;
    this.roomManager.setCurrentRoom(this.currentIndex);
    this.loadCurrentRoom();
  }

  async start() {
    await this.loadCurrentRoom();
  }

  reset() {
    this.currentIndex = 0;
  }

  async loadCurrentRoom() {
    const roomNumber = this.roomManager.getCurrentRoom();
    if (roomNumber > enigmes.length) {
      document.body.innerHTML =
        "<h1>🎉 Congratulations! You've finished the game! 🎉</h1>";
      return;
    }

    await this.roomManager.loadRoom(roomNumber);

    if (this.currentIndex !== 0) {
      await this.enigmas.loadCurrentEnigma(document.body);

      document.addEventListener("answer-submitted", (event) => {
        this.handleAnswer(event.detail.value);
      });
    } else {
      window.loadFirstRoom = this.loadFirstRoom.bind(this);
    }
  }

  async handleAnswer(userInput) {
    console.log("User input received:", userInput);
    const currentEnigma = this.enigmas.getCurrentEnigma(this.currentIndex);

    const userAnswer = userInput.trim().toLowerCase();
    const correctAnswer = currentEnigma.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      this.enigmas.setCurrentEnigma(this.currentIndex);
      this.currentIndex++;

      this.roomManager.setCurrentRoom(this.currentIndex);
      await this.loadCurrentRoom();
    } else {
      alert("Wrong answer! Try again.");
    }
  }
}
