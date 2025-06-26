console.info('Room 1 script loaded');

const allButons = document.querySelectorAll('button');
allButons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const userInput = event.target.dataset.id || event.target.textContent;
    const answerEvent = new CustomEvent('answer-submitted', {
      detail: { value: userInput },
    });
    document.dispatchEvent(answerEvent);
    /*     window.submitAnswer(userInput); */
  });
});
  