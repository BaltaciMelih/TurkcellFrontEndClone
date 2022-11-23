// manage film data here 👇

const FilmData = function() {
  
    this.data = [];
  };
  
  FilmData.init = function() {
    this.getDataFromStorage();
    // this.data = FilmData.getDataFromStorage()
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
  
  FilmData.remove = function(title) {
    let films = this.data;
      console.log("filmsdata", films);
      films.forEach(function(name, index){
        if(films[`${name}`] === title){
          films.slice(index,1);
        }
      });
    console.log("FilmData.remove");
    this.setDataToStorage();
  };
  
  FilmData.getDataFromStorage = function() {
    // localstorage getItem
    
    if (localStorage.getItem("Movies") === null) {
      this.data = [];
    } else {
      this.data = JSON.parse(localStorage.getItem("Movies"));
    }
    // return film;
    // console.log('getDataFromStorage');
     // TODO
  };


  
  FilmData.setDataToStorage = function() {
    // localstorage setItem
    localStorage.setItem("Movies", JSON.stringify(this.data));
    console.log('setDataToStorage çalıştı');
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