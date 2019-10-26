import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    console.log(props);
    
    return (
        <div>
        <h1 className="section-title">FILMS</h1>
        {props.films.map(item=> <FilmRow title={item.title} date={new Date(item.release_date)} id={item.id} poster={item.poster_path}/>)}

      </div>
    )
}

export default FilmListing