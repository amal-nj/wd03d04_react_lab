import React, { Component } from "react";
import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

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
    console.log("Fetching details for " + film);
    this.setState({
      current: film
    });
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

        <div className="film-details" film={this.state.current}>
          <FilmDetails />
        </div>
      </div>
    );
  }
}
