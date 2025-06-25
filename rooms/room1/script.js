window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === 'alohomora') {
      resolve();
    } else {
      reject('Nope! Hint: This spell unlocks doors.');
    }
  });
};

const boomBoom = document.getElementById("boom-boom")

boomBoom.play()
