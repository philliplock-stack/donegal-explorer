// Array containing the birds data
const birdsData = [
  { name: "Chaffinch", file: "chaffinch.mp3", image: "./assets/chaffinch.jpg", credit: "RSPB" },
  { name: "Robin", file: "robin.mp3", image: "./assets/robin.jpg", credit: "RSPB" },
  { name: "Curlew", file: "curlew.mp3", image: "./assets/curlew.jpg", credit: "RSPB" }
];

const grid = document.getElementById('grid');
let currentAudio = null;
let currentCard = null;

// Build bird items dynamically inside the grid
birdsData.forEach(bird => {
  const card = document.createElement('div');
  card.className = 'bird-card';
  
  card.innerHTML = `
    <img src="${bird.image}" alt="${bird.name}">
    <h3>${bird.name}</h3>
    <p class="photo-credit">Image: ${bird.credit}</p>
  `;

  const audio = new Audio(`./assets/${bird.file}`);

  card.addEventListener('click', () => {
    // If clicking the bird that is already playing, stop it
    if (currentAudio === audio) {
      audio.pause();
      audio.currentTime = 0;
      card.classList.remove('playing');
      currentAudio = null;
      currentCard = null;
      return;
    }

    // Stop any previously playing audio track
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      if (currentCard) currentCard.classList.remove('playing');
    }

    // Play selection
    audio.play();
    card.classList.add('playing');
    currentAudio = audio;
    currentCard = card;

    // Reset indicator layout when audio track finishes cleanly
    audio.onended = () => {
      card.classList.remove('playing');
      if (currentAudio === audio) {
        currentAudio = null;
        currentCard = null;
      }
    };
  });

  grid.appendChild(card);
});
