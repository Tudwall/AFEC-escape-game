export class EnigmaManager {
  constructor(enigmes) {
    this.enigmes = enigmes;
    this.currentIndex = 0;
  }
  setCurrentEnigma(index) {
    if (index >= 0 && index < this.enigmes.length) {
      this.currentIndex = index;
    } else {
      console.warn(`Invalid enigma index: ${index}`);
    }
  }
  getCurrentEnigma() {
    return this.enigmes[this.currentIndex];
  }

  async loadCurrentEnigma() {
    const currentEnigma = this.enigmes[this.currentIndex];
    document.title = `Enigma ${this.currentIndex + 1}: ${currentEnigma.name}`;

    const h1 = document.querySelector("h1");
    h1.textContent = `Enigma ${this.currentIndex + 1}: ${currentEnigma.name}`;

    const description = document.getElementById("enigme-description");
    description.textContent = currentEnigma.description;
  }

  nextEnigma() {
    if (this.currentIndex < this.enigmes.length - 1) {
      this.currentIndex++;
      return true;
    }
    return false;
  }

  reset() {
    this.currentIndex = 0;
  }

  isLastEnigma() {
    return this.currentIndex === this.enigmes.length - 1;
  }

  getResponse() {
    return this.enigmes[this.currentIndex].answer;
  }
}
