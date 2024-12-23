// script.js
document.getElementById('search-bar').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const participants = document.querySelectorAll('.participant');
  
    participants.forEach((participant) => {
      const name = participant.textContent.toLowerCase();
      participant.style.display = name.includes(filter) ? 'block' : 'none';
    });
  });
  