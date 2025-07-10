const players = document.querySelectorAll('.player');
const previewImg = document.getElementById('previewImg');

players.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const imgSrc = player.getAttribute('data-img');
    previewImg.src = imgSrc;
  });
});
const subPlayers = document.querySelectorAll('.sub-player');

subPlayers.forEach(sub => {
  sub.addEventListener('mouseenter', () => {
    const imgSrc = sub.getAttribute('data-img');
    previewImg.src = imgSrc;
  });
});
