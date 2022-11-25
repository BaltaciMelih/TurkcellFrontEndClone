function Movie(poster, name, director, visiondate) {
    this.poster = poster;
    this.name = name;
    this.director = director;
    this.visiondate = visiondate;
  }

  function clearInputs() {
    movieName.value = "";
    moviePoster.value = "";
    movieDirector.value = "";
    movieDate.value = "";
  }