import React, { Component } from "react";
import TMDB from "./TMDB";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";

export default class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
          <FilmListing films={TMDB.films} />
        </div>

        <div className="film-details">
          <FilmDetails />
        </div>
      </div>
    );
  }
}
