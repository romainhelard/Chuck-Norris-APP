import React, { useState, useEffect } from "react";
import "./App.css";

function Joke(props) {
  return (
    <div className="joke">
      <p className="setup">{props.joke}</p>
    </div>
  );
}

function App() {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetchJoke();
  }, []);

  function fetchJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(resp => resp.json())
      .then(data => setJoke(data.value) & console.log(data));
  }

  return (
    <div className="App">
      <Joke joke={joke} />
      <button className="btn" onClick={() => fetchJoke()}>
        another one
      </button>
    </div>
  );
}

export default App;