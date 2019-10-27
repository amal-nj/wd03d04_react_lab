import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
const FilmRow = props => {
  var handleDetailsClick = film => {
    console.log("Fetching details for " + film);
  };
  return (
    <div className="film-row" onClick={() => handleDetailsClick("Film")}>
      <FilmPoster poster={props.poster}></FilmPoster>
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <Fave />
      </div>
    </div>
  );
};

export default FilmRow;
