import "./App.css";
import { Component } from "react";
import Particles from "react-particles-js";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Logo from "./components/Logo/Logo";

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
  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: true,
    };
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Navigation
          isSignedIn={this.isSignedIn}
          onRouteChange={this.onRouteChange}
        />

        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Register />
            <Logo />
          </div>
        )}
      </div>
    );
  }
}

export default App;
