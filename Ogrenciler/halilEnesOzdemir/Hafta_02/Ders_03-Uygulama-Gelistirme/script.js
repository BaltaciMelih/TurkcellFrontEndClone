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
