const myAudio = document.getElementById('myAudio');
let isPlaying = false;

const togglePlay = () => {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function () {
  isPlaying = true;
};

myAudio.onpause = function () {
  isPlaying = false;
};

const dark = document.querySelector('.dark');
dark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
