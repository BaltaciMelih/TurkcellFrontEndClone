import DomElements from "./domElements.js";
import Movie from "./movie.js";
import UI from "./ui.js";
import EventsListener from "./eventsListener.js";

document.addEventListener("DOMContentLoaded", UI.displayMovies);
EventsListener.events();