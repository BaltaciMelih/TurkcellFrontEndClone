
const StoreElements = function() {

};

StoreElements.init = function() {
  const muted = document.querySelector('#sound-mute');
  const hidden = document.querySelector('#list-hidden');
  const deleteAll = document.querySelector('#deleteAll')
  const container = document.querySelector('.container-fluid');
  const video = document.querySelector('.video');
  const movieBottom = document.querySelector('.movie-box-bottom'); 
  const ytVideo = document.querySelector('#yt-video');
  const axe = document.querySelector('.axe');
  const nameInput = document.querySelector('#name');
  const directorInput = document.querySelector('#director');
  const imgInput = document.querySelector('#img-url');
  const dateInput = document.querySelector('#date');


  return {
    muted,
    hidden,
    deleteAll,
    container,
    video,
    movieBottom,
    ytVideo,
    axe,
    nameInput,
    directorInput,
    imgInput,
    dateInput
  };
};

export {StoreElements};

