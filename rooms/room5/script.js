function checkCode() {
  const codeInput = document.getElementById("codeInput").value;
  const correctCode = "0slicepush";

  if (codeInput === correctCode) {
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";
  } else {
    alert("Code incorrect ! Essayez encore.");
  }
}

function resetGame() {
  document.getElementById("room1").style.display = "block";
  document.getElementById("room2").style.display = "none";
  document.getElementById("codeInput").value = "";
}
