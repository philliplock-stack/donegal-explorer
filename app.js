// 1. THE DONEGAL BIRD LIST
// To edit or add birds, change the details in this list. 
// Make sure the image and audio filenames match what you put in your assets folder!
const birds = [
  {
    id: "chough",
    english: "Chough",
    irish: "Cábóg",
    photo: "assets/chough.jpg",
    audio: "assets/chough.mp3",
    credit: "Andrew Kelly"
  },
  {
    id: "corncrake",
    english: "Corncrake",
    irish: "Traonach",
    photo: "assets/corncrake.jpg",
    audio: "assets/corncrake.mp3",
    credit: "corncrakelife.ie"
  },
  {
    id: "puffin",
    english: "Puffin",
    irish: "Cána",
    photo: "assets/puffin.jpg",
    audio: "assets/puffin.mp3",
    credit: "Peter Loughlin"
  },
  {
    id: "golden-eagle",
    english: "Golden Eagle",
    irish: "Iolar Fíréan",
    photo: "assets/goldeneagle.jpg",
    audio: "assets/goldeneagle.mp3",
    credit: "Dennis Jacobsen"
  },
  {
    id: "curlew",
    english: "Curlew",
    irish: "Crotach",
    photo: "assets/curlew.jpg",
    audio: "assets/curlew.mp3",
    credit: "Padraig Kavanagh"
  },
  {
    id: "robin",
    english: "Robin",
    irish: "Spideog",
    photo: "assets/robin.jpg",
    audio: "assets/robin.mp3",
    credit: "Brian Burke"
  },
  {
    id: "Peregrine-Falcon",
    english: "Peregrine Falcon",
    irish: "Fabhcún gorm",
    photo: "assets/Peregrine-Falcon.jpg",
    audio: "assets/Peregrine-Falcon.mp3",
    credit: "Thomas McDonnell"
  },
  {
    id: "Ring-Ouzel",
    english: "Ring Ouzel",
    irish: "Lon creige",
    photo: "assets/Ring-Ouzel.jpg",
    audio: "assets/Ring-Ouzel.mp3",
    credit: "Andy Hay (RSPB)"
  },
  {
    id: "Red-Grouse",
    english: "Red Grouse",
    irish: "Cearc fhraoigh",
    photo: "assets/Red-Grouse.jpg",
    audio: "assets/Red-Grouse.mp3",
    credit: "Gustavo Zoladz"
  },
  {
    id: "Sandwich-Tern",
    english: "Sandwich Tern",
    irish: "Geabhróg Scothdhubh",
    photo: "assets/Sandwich-Tern.jpg",
    audio: "assets/Sandwich-Tern.mp3",
    credit: "Vũ Bụi"
  }
];

// 2. AUTOMATICALLY BUILD THE GRID ON THE PAGE
const grid = document.getElementById('grid');

birds.forEach(bird => {
  const card = document.createElement('div');
  card.className = 'bird-card';
  card.id = `card-${bird.id}`; // FIXED: Added unique ID to card container for visual styling
  card.innerHTML = `
    <div class="card-trigger" onclick="playBirdCall('${bird.id}')">
      <img src="${bird.photo}" alt="${bird.english}">
      <div class="bird-info">
        <h3>${bird.english}</h3>
        <p class="irish-name">${bird.irish}</p>
      </div>
    </div>
    <div class="photo-credit">
      📷 Photo: ${bird.credit}
    </div>
    <audio id="sound-${bird.id}" src="${bird.audio}"></audio>
  `;
  grid.appendChild(card);
});

// 3. AUDIO PLAYBACK & VISUAL CONTROLLER (With automatic 6-second cutoff)
let currentPlayingAudio = null;
let currentPlayingCard = null; // Track visually highlighted card
let audioTimeout = null; 

function playBirdCall(birdId) {
  const audio = document.getElementById(`sound-${birdId}`);
  const card = document.getElementById(`card-${birdId}`);
  if (!audio) return;

  // Clear existing timers
  if (audioTimeout) {
    clearTimeout(audioTimeout);
  }
  
  // Reset previously playing audio and clear highlight styling
  if (currentPlayingAudio) {
    currentPlayingAudio.pause();
    currentPlayingAudio.currentTime = 0;
  }
  if (currentPlayingCard) {
    currentPlayingCard.classList.remove('playing');
  }

  // Check if user re-tapped the exact same active bird to toggle it off manually
  if (currentPlayingAudio === audio) {
    currentPlayingAudio = null;
    currentPlayingCard = null;
    return;
  }

  // Play selection and inject visual highlight class
  audio.currentTime = 0;
  audio.play();
  if (card) card.classList.add('playing');
  
  currentPlayingAudio = audio;
  currentPlayingCard = card;

  // Automatically drop the visual styling and sound after 6 seconds
  audioTimeout = setTimeout(() => {
    if (currentPlayingAudio === audio) {
      audio.pause();
      audio.currentTime = 0;
      if (card) card.classList.remove('playing');
      currentPlayingAudio = null;
      currentPlayingCard = null;
    }
  }, 6000); 

  // Fallback: If audio track is naturally shorter than 6 seconds, wipe classes on end
  audio.onended = () => {
    if (card) card.classList.remove('playing');
    if (currentPlayingAudio === audio) {
      currentPlayingAudio = null;
      currentPlayingCard = null;
    }
  };
}

// 4. REGISTER THE SERVICE WORKER
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("Service Worker Failed", err));
}
