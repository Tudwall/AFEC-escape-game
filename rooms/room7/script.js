import qrcode from "qrcode-terminal"

const hintTime = 15000
const http = document.getElementById("http")
const h1 = document.getElementById("enigma-number")
const clickMe = document.getElementById("636C69636B6D65")
const helpEl = document.getElementById("help")
h1.style.display = "none"
http.play()

setTimeout(() => {
  helpEl.style.display = "block"
}, 300000)

helpEl.addEventListener("click", giveHint)

setTimeout(() => {
  console.log("DO YOU EVEN KNOW WHAT YOU'RE DOING ?")
},5000)

setTimeout(()=> {
  console.log("YOU HAVE NO POWER HERE")
}, 7000)

function giveHint() {
  setTimeout(() => {
    console.log("I'LL SHOOT YOU")
  }, hintTime)
  setTimeout(() => {
    console.log("RIGHT")
  }, hintTime + 500)
  setTimeout(() => {
    console.log("BETWEEN")
  }, hintTime + 1000)
  setTimeout(() => {
    console.log("THE")
  }, hintTime + 1500)
  setTimeout(() => {
    console.log("EYES")
  }, hintTime + 2000)
}

clickMe.addEventListener("click", () => {
  qrcode.generate("3430c2b033302735302e36224e203839c2b030332731362e362257")
  setTimeout(()=> {
    console.info("SO YOU FOUND ME ?")
  }, 5000)
  setTimeout(()=> {
    console.info("SEEMS LIKE YOU KNOW YOU HEXACTLY WHAT YOU'RE DOING")
  },5500)
})