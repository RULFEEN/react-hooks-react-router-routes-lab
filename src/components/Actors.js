import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <React.Fragment>
      <h1>
        Actors Page
      </h1>
      {actors.map((actor, index) => {
        return (
          <div key={index} >
            <h2>
              Name: {actor.name}
            </h2>
            <p>
              Movies:
            </p>
            <ul>
              {actor.movies.map((movie, index) => <li key={index} >{movie}</li> )}
            </ul>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default Actors;
