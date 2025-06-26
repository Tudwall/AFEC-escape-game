import qrcode from "qrcode-terminal"

window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === 'alohomora') {
      resolve();
    } else {
      reject('Nope! Hint: This spell unlocks doors.');
    }
  });
};

const http = document.getElementById("http")
const h1 = document.getElementById("enigma-number")
const clickMe = document.getElementById("click-me")
h1.style.display = "none"
http.play()
setTimeout(() => {
  console.log("WHAT ARE YOU EVEN DOING ?")
},5000)

setTimeout(()=> {
  console.log("YOU HAVE NO POWER HERE")
}, 7000)

setTimeout(() => {
  console.log("I'LL SHOOT YOU")
}, 30000)
setTimeout(() => {
  console.log("RIGHT")
}, 30500)
setTimeout(() => {
  console.log("BETWEEN")
}, 31000)
setTimeout(() => {
  console.log("THE")
}, 31500)
setTimeout(() => {
  console.log("EYES")
}, 32000)

clickMe.addEventListener("click", () => {
  qrcode.generate("3430c2b033302735302e36224e203839c2b030332731362e362257")
  setTimeout(()=> {
    console.info("You found me, you know hexactly what to do")
  }, 5000)
})