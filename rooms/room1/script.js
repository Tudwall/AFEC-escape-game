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

function showModal(message) {
      const modal = document.getElementById('modal');
      const modalMessage = document.getElementById('modal-message');
      modalMessage.textContent = message;
      modal.style.display = "block";  
    }

    
    function closeModal() {
      const modal = document.getElementById('modal');
      modal.style.display = "none";  
    }

    
    document.querySelector('.close').addEventListener('click', closeModal);
    
    
    document.getElementById('validerEnigme').addEventListener('click', () => {
      const input = document.getElementById('motDePasse').value.trim().toUpperCase();
      if (input === 'CHEVALIER') {
        window.location.href = 'room2/';
      } else {
        showModal('Mot de passe incorrect.');
      }
    });

    
    document.getElementById('room2Bouton').addEventListener('click', () => {
      showModal('Trop facile mon gueu !!!');
    });

    document.getElementById('Abandon').addEventListener('click', () => {
      showModal('Traître à la couronne !!!');
    });