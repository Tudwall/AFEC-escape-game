window.validateAnswer = function (answer) {
  return new Promise((resolve, reject) => {
    if (answer.toLowerCase() === 'alohomora') {
      resolve();
    } else {
      reject('Nope! Hint: This spell unlocks doors.');
    }
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
      showModal('Trop facile mon gueux !!!');
    });

    document.getElementById('Abandon').addEventListener('click', () => {
      showModal('Traître à la couronne !!!');
    });
};
