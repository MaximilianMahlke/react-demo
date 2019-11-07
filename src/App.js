import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [person, setPerson] = useState(null);
  const [personId, setPersonId] = useState(5);
  console.log("render nochmal mit person ", person);

  function fetchPerson(id) {
    fetch(`https://swapi.co/api/people/${id}`)
      .then(response => response.json())
      .then(json => setPerson(json));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {person ? (
          <div>
            <h1>{person.name}</h1>
            <FilmList person={person} />
          </div>
        ) : (
          "Loading"
        )}
        <input
          value={personId}
          onChange={event => setPersonId(event.target.value)}
        ></input>
        <button onClick={() => fetchPerson(personId)}>Load</button>
      </header>
    </div>
  );
}

function FilmList(props) {
  return (
    <ul>
      {props.person.films.map(film => (
        <li key={film}>{film}</li>
      ))}
    </ul>
  );
}

// function PersonCard(props) {
//   function handleClick(person) {
//     fetch(`https://swapi.co/api/people/${person.id}`)
//       .then(response => response.json())
//       .then(json => console.log(json));
//     alert("whooooo " + person.name + " was clicked");
//   }

//   const person = props.person;
//   return (
//     <li key={person.name} onClick={x => handleClick(person)}>
//       {person.avatar}:{person.name} <Link to={person} />
//     </li>
//   );
// }

export default App;
