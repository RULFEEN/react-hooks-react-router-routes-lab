import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors);
  return (
    <React.Fragment>
      <h1>
        Directors Page
      </h1>
      {directors.map((director, index) => {
        return (
          <div key={index} >
            <h2>
              Name: {director.name}
            </h2>
            <p>
              Movies: 
            </p>
            <ul>
              {director.movies.map((movie, index) => <li key={index} >{movie}</li> )}
            </ul>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default Directors;
