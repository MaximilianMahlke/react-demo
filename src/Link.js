import React from "react";

function Link(props) {
  console.log(props);
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Whats up
    </a>
  );
}

export default Link;
