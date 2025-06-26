console.info("Room 2 is loaded!")

const validateButton = document.getElementById('validateAnswer');
const input = document.getElementById('enigme2input');
const wrongAnswer = document.getElementById('wrongAnswer');
const errorMessage = document.getElementById('errorMessage');


validateButton.addEventListener('click',() => {
  checkAnswer(input.value)
})

const checkAnswer = (userInput) => {
  const answerEvent = new CustomEvent('answer-submitted', {
      detail: { value: userInput },
    });
    document.dispatchEvent(answerEvent);
//   if (userInput === 'cinq cent cinquante cinq') {
    
//   } else {
//     wrongAnswer.classList.remove('hiden');
//     errorMessage.textContent = (userInput == 555)
//       ? 'Pas si facile!'
//       : 'Nope!';
// }
}

// window.validateAnswer = function (answer) {
//   return new Promise((resolve, reject) => {
//     if (answer.toLowerCase() === 'cinq cent cinquante cinq') {
//       resolve();
//     } else if(answer == 555) {
//       reject('Pas si facile!')
//     }else {
//       reject('Nope!');
//     }
//   });
// };

localStorage.setItem("INDICE ENIGME 2", "'555'")  