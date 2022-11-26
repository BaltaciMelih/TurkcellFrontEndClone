

//UI Class: Handlee UI task
class UI {
    static displayMovies() {
        defaultMovies.forEach(movie=>UI.addMovieToList(movie))
        const movies = Store.getMovies();
        // const StoredMovies = [{
        //         name: 'John Wick',
        //         director: 'xxxx',
        //         date: '2014-01-01'

        //     },
        //     {
        //         name: 'John Wick',
        //         director: 'xxxx',
        //         date: '2014-01-01'

        //     }
        // ];
        // const movies = StoredMovies;
        movies.forEach((movie) => UI.addMovieToList(movie));
    }
    static addMovieToList(movie) {
        const list = document.querySelector('#movie-list');
        const row = document.createElement('tr');
        row.innerHTML = `
       <td> <img src=${movie.URL}></td>
        <td>${movie.name}</td>
        <td>${movie.director}</td>
        <td>${movie.date}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        <td><a href="#" class="btn btn-warning btn-sm edit">Edit</a></td>`;
        list.appendChild(row);
    }

    //silme
    static deleteMovie(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    
    static clearAllMovie(){
        localStorage.clear();
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#movie-form');
        container.insertBefore(div, form);
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    //alanları temizliyor
    static clearFields() {
        document.querySelector('#mov-name').value = '';
        document.querySelector('#mov-director').value = '';
        document.querySelector('#mov-date').value = '';
        document.querySelector('#mov-url').value = '';
    }
}

//Event: Display Movie
document.addEventListener('DOMContentLoaded', UI.displayMovies);


//Event: Add a Movie
document.querySelector('#movie-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();

    //get form values
    const name = document.querySelector('#mov-name').value;
    const director = document.querySelector('#mov-director').value;
    const date = document.querySelector('#mov-date').value;
    const url = document.querySelector('#mov-url').value;

    //VALİDATE
    if (name === '' || director === '' || date === '' || url === '') {
        UI.showAlert('Tüm bilgileri dolsurun', 'danger');

    } else {
        //INSTATİATE movie
        const movie = new Movie(name, director, date, url);
        console.log(movie);
        // add movie to ıo
        UI.addMovieToList(movie);
        //add movie to stroga
        Store.addMovie(movie)
            //Show sucsess message
        UI.showAlert('Eklendi', 'success');

        // clear Fields
        UI.clearFields();
    }



});


//Event: Remove a Movie

document.querySelector('#movie-list').addEventListener('click', (e) => {
    //remove uı
    UI.deleteMovie(e.target)
        //remove stroge
    Store.removeMovie(e.target.parentElement.previousElementSibling.textContent);
    //delete message
    UI.showAlert('Silindi', 'success');

});