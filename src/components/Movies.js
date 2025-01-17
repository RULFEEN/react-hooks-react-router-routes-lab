import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);
  return (
    <React.Fragment>
      <h1>
        Movies Page
      </h1>
      {movies.map((movie, index) => {
        return (
          <div key={index} >
            <h2>
              Name: {movie.title}
            </h2>
            <p>
              Time: {movie.time}
            </p>
            <p>
              Genres:
            </p>
            <ul>
              {movie.genres.map((genre, index) => <li key={index} >{genre}</li> )}
            </ul>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default Movies;
