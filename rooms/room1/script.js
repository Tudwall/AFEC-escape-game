window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === "alohomora") {
      resolve();
    } else {
      reject("Nope! Hint: This spell unlocks doors.");
    }
  });
};

const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", checkAnswer);
submitButton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer(e);
  }
});

function PlaySentence(text) {
  const words = text.toLowerCase().split(" ");
  const morse = words.map(PlayWord);
  console.log(morse);
}
function PlayWord(word) {
  word.split("").map(asciiToMorse);
}

function asciiToMorse(letter) {
  return MORSE_MAP[letter];
}

function checkAnswer(event) {
  event.preventDefault();
  const originalText = event.target.value;
  const userText = originalText.replace(/\s+/g, "");

  const answerEvent = new CustomEvent("answer-submitted", {
    detail: { value: userText },
  });
  document.dispatchEvent(answerEvent);
}

const MORSE_MAP = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};
