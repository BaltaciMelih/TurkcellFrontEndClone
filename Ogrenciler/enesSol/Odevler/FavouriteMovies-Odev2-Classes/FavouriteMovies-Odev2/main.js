Movie = function (id, title, director, poster, releaseDate) {
  this.id = id ?? new Date().getTime();
  this.title = title;
  this.director = director;
  this.poster = poster;
  this.releaseDate = releaseDate;
};
