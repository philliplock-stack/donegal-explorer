// 1. DONEGAL LOCAL FISH DATA
const fishes = [
  {
    id: "mackerel",
    english: "Atlantic Mackerel",
    irish: "Ronnach",
    mainPhoto: "assets/mackerel.jpg",
    secondaryPhoto: "assets/mackerel-detail.jpg",
    location: "Pier fishing at Killybegs, Rathmullan, and Malin Head during summer months.",
    cooking: "Best grilled, barbecued, or smoked fresh on the day. High in Omega-3.",
    info: "Fast-swimming shoaling fish with distinctive blue-green tiger stripes across its back.",
    credit: "Local Angling Donegal"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or baked with herb crust.",
    info: "Aggressive predator with a prominent lower jaw. Prefers rocky weed-covered bottoms.",
    credit: "Sea Angling Ireland"
  },
  {
    id: "sea-trout",
    english: "Sea Trout",
    irish: "Breac Geal",
    mainPhoto: "assets/seatrout.jpg",
    secondaryPhoto: "assets/seatrout-detail.jpg",
    location: "Estuaries and river mouths around River Eske and Lackagh River.",
    cooking: "Pan-fry in butter with lemon and herbs or gently poach.",
    info: "Anadromous form of brown trout that migrates to sea before returning to local rivers to spawn.",
    credit: "Inland Fisheries Ireland"
  }
];

// 2. RENDER THE GRID
const grid = document.getElementById('fish-grid');

fishes.forEach(fish => {
  const card = document.createElement('div');
  card.className = 'bird-card';
  card.innerHTML = `
    <div class="card-trigger" onclick="openFishModal('${fish.id}')">
      <img src="${fish.mainPhoto}" alt="${fish.english}">
      <div class="bird-info">
        <h3>${fish.english}</h3>
        <p class="irish-name">${fish.irish}</p>
      </div>
    </div>
    <div class="photo-credit">
      📷 Tap card for details
    </div>
  `;
  grid.appendChild(card);
});

// 3. MODAL LOGIC
const modal = document.getElementById('fish-modal');

function openFishModal(fishId) {
  const fish = fishes.find(f => f.id === fishId);
  if (!fish) return;

  document.getElementById('modal-title').innerText = fish.english;
  document.getElementById('modal-irish').innerText = fish.irish;
  document.getElementById('modal-secondary-img').src = fish.secondaryPhoto;
  document.getElementById('modal-location').innerText = fish.location;
  document.getElementById('modal-cooking').innerText = fish.cooking;
  document.getElementById('modal-info').innerText = fish.info;
  document.getElementById('modal-credit').innerText = `📷 Photo: ${fish.credit}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevents background scrolling when modal is open
}

function closeFishModal(event) {
  // Only close if clicking the backdrop outside the box
  if (event.target === modal) {
    forceCloseModal();
  }
}

function forceCloseModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restores background scrolling
}
