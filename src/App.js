import "./App.css";
import Particles from "react-particles-js";
import { Component } from "react";

const particlesOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 100,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
      </div>
    );
  }
}

export default App;
