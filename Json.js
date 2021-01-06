const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(container);
var obj = new XMLHttpRequest();
obj.open('GET','movie.json',true);
obj.responseType = 'json';
obj.onload = function(){
    var data = this.response;
    
    data.forEach(e =>{
        console.log(e)
        const card = document.createElement('div');
        card.setAttribute('class','card');
        const movietitle = document.createElement('h1');
        movietitle.setAttribute('class','movietitle')
        const imdbRating = document.createElement('h1');
        imdbRating.setAttribute('class','imdbRating');
        const year = document.createElement('h2');
        year.setAttribute('class','year')
        const actors = document.createElement('h2');
        actors.setAttribute('class','actors')
        const genres = document.createElement('h2');
        genres.setAttribute('class','genres')
        const storyline = document.createElement('p');
        storyline.setAttribute('class','storyline')


        movietitle.textContent ="Movie Title : "+ e.title;
        imdbRating.textContent ="Movie imdbRating : "+ e.imdbRating;
        year.textContent ="Movie Year : "+ e.year;
        actors.textContent ="Movie Actors : "+ e.actors;
        genres.textContent ="Movie Genres : "+ e.genres;
        storyline.textContent ="Movie storyline : "+ e.storyline;


        container.appendChild(card);
        card.appendChild(movietitle);

        card.appendChild(year);
        card.appendChild(actors);
        card.appendChild(genres);
        card.appendChild(imdbRating);
        card.appendChild(storyline);



    })
}
obj.send();