// 1. DONEGAL LOCAL FISH DATA
const fishes = [
  {
    id: "mackerel",
    english: "Atlantic Mackerel",
    irish: "Ronnach",
    mainPhoto: "assets/mackerel.jpg",
    secondaryPhoto: "assets/mackerel-detail.jpg",
    location: "Pier fishing at Killybegs, Rathmullan, and Portnablagh during summer months. Use feathers off the pier or boat.",
    cooking: "Best grilled, barbecued, or smoked fresh on the day. High in Omega-3.",
    info: "Fast-swimming shoaling fish with distinctive blue-green tiger stripes across its back.",
    credit: "Karography"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from a boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
  {
    id: "ballan-wrasse",
    english: "Ballan wrasse",
    irish: "Ballach breac",
    mainPhoto: "assets/ballan-wrasse.jpg",
    secondaryPhoto: "assets/ballan-wrasse-detail.jpg",
    location: "Deep, kelp-rich rocky gullies offering prime territory for big wrasse. Inishbofin (Inis Bó Finne, meaning 'island of the white cow') beyond the football pitch",
    cooking: "Only an adventurous cook would try, very boney.",
    info: "Extremely variable color ranging from bright emerald green to reddish-brown with intricate pale spotting, featuring thick lips and heavy scales. Careful of the dorsal spikes!",
    credit: "Phil Lock"
  },
  {
    id: "coalfish",
    english: "Coalfish",
    irish: "Glasán",
    mainPhoto: "assets/coalfish.jpg",
    secondaryPhoto: "assets/coalfish-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from a boat.",
    cooking: "Dont be put off by the grey flesh that whitens when cooked. Pat the skin and flesh dry with a paper towel, dust lightly with seasoned flour, fry skin-side down first in hot oil and butter, spoon melted butter over the flesh until opaque.",
    info: "Called black pollack or glassaun when small. Dark green or blackish-green back with a nearly straight, distinct white lateral line.",
    credit: "Phil Lock"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
  {
    id: "pollack",
    english: "Pollack",
    irish: "Mongaach",
    mainPhoto: "assets/pollack.jpg",
    secondaryPhoto: "assets/pollack-detail.jpg",
    location: "Rocky shorelines, kelp beds, and deep wrecks around Atlantic shores. Use spinners from the shore or feathers from boat.",
    cooking: "Excellent alternative to Cod. Great battered for fish & chips or pan fried with seasoned flour and butter. Goes well with baby boiled spuds.",
    info: "Not to be confused with Coalfish (Coalie). Note the differences: Pollack as a lateral line that curves upward or kinks near the frontand the lower jaw sticks out much further (an underbite).",
    credit: "Phil Lock"
  },
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
