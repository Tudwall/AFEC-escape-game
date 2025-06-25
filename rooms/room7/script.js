window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === 'alohomora') {
      resolve();
    } else {
      reject('Nope! Hint: This spell unlocks doors.');
    }
  });
};

/* const boomBoom = document.getElementById("boom-boom");
boomBoom.addEventListener("volumechange", () => {
    boomBoom.volume = 100
}) */

const boomBoom = new Audio("../../assets/sound/boomboomboomboom.mp3");
boomBoom.play();