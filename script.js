const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlist');
const searchInput = document.getElementById('search-input');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results))
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById('artist-img');
  const artistName = document.getElementById('artist-name');

  results.forEach((e) => {
    artistImage.src = e.urlImg; 
    artistName.innerText = e.name;
  });

  resultArtist.classList.remove('hidden');
}

function hidePlaylists() {
  playlistContainer.classList.add('hidden');
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultArtist.classList.add('hidden');
    playlistContainer.classList.remove('hidden');
    return;
  }
  requestApi(searchTerm);
})