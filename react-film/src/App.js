import React, { Component } from "react";
import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import axios from "axios";
export default class App extends Component {
  constructor() {
    super();
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }
  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  };

  handleDetailsClick(film) {
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=6a10830b86a9cd714ddd5f2f9df40485&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      this.setState({ current: response.data });
      // console.log(this.state.current);

    })
    .catch(error=>console.log(error));
  
  }

  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    // const faves=[...this.state.faves];
    const filmIndex = this.state.faves.indexOf(film);
    console.log(faves);

    if (filmIndex < 0) {
      faves.push(film);
      console.log("adding " + film);
    } else {
      faves.splice(filmIndex, 1);
      console.log("removing " + film);
    }
    console.log(faves);

    this.setState({ faves });
  }

  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            onDetailsClick={this.handleDetailsClick}
          />
        </div>

        <div className="film-details">
          <FilmDetails  film={this.state.current}/>
        </div>
      </div>
    );
  }
}
