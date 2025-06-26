const DOT_TIME = 200;
const DASH_TIME = 3 * DOT_TIME;
const SYMBOL_BREAK = DOT_TIME;
const LETTER_BREAK = DOT_TIME * 3;
const WORD_BREAK = DOT_TIME * 7;
const solution = [
  [
    "-.--",
    "---",
    "..-]",
    "[.--.",
    ".-.",
    "---",
    "--",
    "..",
    "...",
    ".",
    "-..]",
    "[..]",
    "[.-",
    ".--",
    ".-",
    "..",
    "-",
  ],
];

window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === "alohomora") {
      resolve();
    } else {
      reject("Nope! Hint: This spell unlocks doors.");
    }
  });
};

const morseLight = document.querySelector("#morse-light");
const playButton = document.querySelector("#play-button");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#answer-button");

submitButton.addEventListener("click", checkAnswer);
submitButton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer(e);
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function startLightPlaying() {
  morseLight.style.backgroundColor = "white";
  morseLight.style.boxShadow = "white 0px 0px 10px";
}

function stopLightPlaying() {
  morseLight.style.backgroundColor = "black";
  morseLight.style.boxShadow = "none";
}

async function playDash() {
  startLightPlaying();
  await sleep(DASH_TIME);
  stopLightPlaying();
}

async function playDot() {
  startLightPlaying();
  await sleep(DOT_TIME);
  stopLightPlaying();
}

async function playSentence(morseSentence) {
  for (const morseWord of morseSentence) {
    await playWord(morseWord);
    await sleep(WORD_BREAK);
  }
}

async function playWord(morseWord) {
  for (const morseLetter of morseWord) {
    await playLetter(morseLetter);
    await sleep(LETTER_BREAK);
  }
}

async function playLetter(morseLetter) {
  for (const symbol of morseLetter) {
    if (symbol === ".") {
      await playDot();
    } else if (symbol === "-") {
      await playDash();
    }
    await sleep(SYMBOL_BREAK);
  }
}

function sentenceToMorse(text) {
  const words = text.toLowerCase().split(" ");
  const morse = words.map(wordToMorse);
  return morse;
}

function wordToMorse(word) {
  return word.split("").map(letterToMorse);
}

function letterToMorse(letter) {
  return MORSE_MAP[letter];
}

function checkAnswer(event) {
  event.preventDefault();
  const userText = passwordInput.value;
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

const morse = sentenceToMorse("you promised i await");
console.log(morse.join("],["));
playButton.addEventListener("click", () => {
  playSentence(solution);
});
