import React, { Component } from "react";
import Note from "../Note/Note";

const Notes = ({ notes }) => {
  return (
    <div>
      {notes.map((user, i) => {
        return (
          <ol>
            <Note
              key={i}
              id={notes[i].id}
              name={notes[i].name}
              description={notes[i].description}
            />
          </ol>
        );
      })}
    </div>
  );
};

export default Notes;
