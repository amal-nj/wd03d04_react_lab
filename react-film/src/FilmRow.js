import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
const FilmRow = props => {
  // var handleDetailsClick = film => {
  //   console.log("Fetching details for " + film);
  // };
  return (
    <div className="film-row" onClick={() => props.onDetailsClick(props.title)}>
      <FilmPoster poster={props.poster}></FilmPoster>
      <div className="film-summary">
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
      </div>
    </div>
  );
};

export default FilmRow;
