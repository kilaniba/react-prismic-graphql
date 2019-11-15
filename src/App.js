import React from "react";
import "./App.css";

function App({ prismicCtx }) {
  const { image, description, title } = prismicCtx;

  return (
    <div className="App">
      <header className="App-header">
        <h1> {title.length !== 0 && title[0].text} </h1>
        <img src={image.url} className="App-logo" alt={image.alt} />
        <p>{description.length !== 0 && description[0].text}</p>
      </header>
    </div>
  );
}

export default App;
