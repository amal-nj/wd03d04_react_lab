import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor() {
    super();

    this.state = {
      filter: "all"
    };
  }

  handleFilterClick = filter => {
    console.log("handleFilterClick");
    this.setState({ filter: filter });
  };
  render() {
    return (
      <div>
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {this.props.films.map(item => (
            <FilmRow
              title={item.title}
              date={item.release_date.split("-")[0]}
              id={item.id}
              poster={item.poster_path}
            />
          ))}

          <div className="film-list-filters">
            {/* <div className="film-list-filter" onClick={() => this.handleFilterClick('All')}> */}
            <div
              className={`film-list-filter ${
                this.state.filter === "all" ? "is-active" : ""
              }`}
              onClick={() => this.handleFilterClick("all")}
            >
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            {/* <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')} > */}
            <div
              className={`film-list-filter ${
                this.state.filter === "faves" ? "is-active" : ""
              }`}
              onClick={() => this.handleFilterClick("faves")}
            >
              FAVES
              <span className="section-count">0</span>
            </div>
          </div>
        </div>
        {/* {allFilms} */}
      </div>
    );
  }
}
