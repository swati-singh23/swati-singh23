function addSong() {
  const playlist = document.getElementById('playlist');
  const songNameInput = document.getElementById('songName');
  const songName = songNameInput.value.trim();

  if (songName !== '') {
    const li = document.createElement('li');
    li.className = 'song';
    li.innerHTML = `
      <span>${songName}</span>
      <div class="song-actions">
        <button onclick="removeSong(this)">Remove</button>
        <button onclick="moveUp(this)">Move Up</button>
        <button onclick="moveDown(this)">Move Down</button>
      </div>
    `;
    playlist.appendChild(li);
    songNameInput.value = '';
  }
}

function removeSong(button) {
  const li = button.closest('.song');
  li.remove();
}

function moveUp(button) {
  const li = button.closest('.song');
  const previousLi = li.previousElementSibling;

  if (previousLi) {
    li.parentNode.insertBefore(li, previousLi);
  }
}

function moveDown(button) {
  const li = button.closest('.song');
  const nextLi = li.nextElementSibling;

  if (nextLi) {
    li.parentNode.insertBefore(nextLi, li);
  }
}



var audio = document.getElementById("myAudio");
var playPauseBtn = document.getElementById("playPauseBtn");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
var currentSongIndex = 0;

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
}

function playPrevious() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlayCurrentSong();
}

function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlayCurrentSong();
}

function loadAndPlayCurrentSong() {
  audio.src = songs[currentSongIndex];
  audio.play();
  playPauseBtn.textContent = "Pause";
}

// Load and play the first song
loadAndPlayCurrentSong();
