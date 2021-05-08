import "./App.css";
import { Component } from "react";
import Particles from "react-particles-js";
import Register from "./components/Register/Register";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Logo from "./components/Logo/Logo";
import Notes from "./components/Notes/Notes";

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
      notes: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          description: "Sincere@april.biz",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          description: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          description: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          description: "Julianne.OConner@kory.org",
        },
      ],
      // mainnote: this.state.notes[0],
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
            <Notes notes={this.state.notes} />
            {/* <Mainnote/> */}
            {/* <Register /> */}
            {/* <Logo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default App;
