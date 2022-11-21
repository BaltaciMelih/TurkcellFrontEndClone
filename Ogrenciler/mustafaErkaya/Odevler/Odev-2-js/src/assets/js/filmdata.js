// manage film data here 👇

const FilmData = function() {
  
    this.data = [];
  };
  
  FilmData.init = function() {
    this.data = this.getDataFromStorage();
    console.log('FilmData', this.data);
  };
  
  FilmData.getData = function () {
    return this.data;
  };
  
  FilmData.add = function(film) {
    this.data.push(film);
    console.log('FilmData', this.data);
    this.setDataToStorage();
  };
  
  FilmData.remove = function() {
    // remove
  };
  
  FilmData.getDataFromStorage = function() {
    // localstorage getItem
    console.log('getDataFromStorage');
    return []; // TODO
  };
  
  FilmData.setDataToStorage = function() {
    // localstorage setItem
    console.log('setDataToStorage');
  };
  
  export {FilmData};
  
  // sample Film data
  
  // [
  //   {
  //     name: 'test',
  //     director: 'test',
  //     img: 'test',
  //     date: '22.09.1984'
  //   },
  //   {
  //     name: 'test',
  //     director: 'test',
  //     img: 'test',
  //     date: '22.09.1984'
  //   }
  // ]
  
// const ali = new FilmData();
// console.log(ali);