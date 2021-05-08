import React, { Component } from "react";

function myFunction(asd) {
  // this.setState(asd.target.innerHTML);
}
const Note = (props) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <h1 onClick={myFunction}>{props.id}</h1>
        <h1>{props.name}</h1>
        <h6>{props.description}</h6>
      </div>
    </div>
  );
};

export default Note;
