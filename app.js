const container = document.querySelector('.container');
const gifDiv = document.querySelector('.gif');
const gifImg = document.querySelector('.gif-img');
const playBtn = document.querySelector('.play-btn');
const song = document.querySelector('.audio');
const colorArray = ['#f5ee30', '#25aae1', '#39b54a', '#ef3e36', '#ed217c', '#9f1f63'];

function animation() {
    setInterval(() => {
        song.play();
        gifDiv.style.display = 'block';
        gifImg.style.transform = 'scale(1)'
        container.style.backgroundColor = colorArray[Math.floor(Math.random() * 6)];
        container.style.borderColor = colorArray[Math.floor(Math.random() * 6)];
    }, 400);
}

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    animation()
})