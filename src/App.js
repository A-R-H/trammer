import React, { Component } from "react";
import "./App.css";
import TimeDisplay from "./modules/TimeDisplay/TimeDisplay";

class App extends Component {
  render() {
    return (
      <div id="App">
        <TimeDisplay />
      </div>
    );
  }
}

export default App;
