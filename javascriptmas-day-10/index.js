const player = document.getElementById("player")

function playSong(id) {
  const newSongUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;

  player.src = newSongUrl;
}