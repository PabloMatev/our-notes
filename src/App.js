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

const initialState = {
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    notes: "",
    joined: "",
  },
  notes: [
    {
      id: "",
      title: "",
      content: "",
      dateCreated: "",
      email: "",
    },
  ],
};

class App extends Component {
  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  constructor() {
    super();
    this.state = initialState;
  }
  //   {
  //     notes: [
  //       {
  //         id: 1,
  //         name: "Leanne Graham",
  //         username: "Bret",
  //         description: "Sincere@april.biz",
  //       },
  //       {
  //         id: 2,
  //         name: "Ervin Howell",
  //         username: "Antonette",
  //         description: "Shanna@melissa.tv",
  //       },
  //       {
  //         id: 3,
  //         name: "Clementine Bauch",
  //         username: "Samantha",
  //         description: "Nathan@yesenia.net",
  //       },
  //       {
  //         id: 4,
  //         name: "Patricia Lebsack",
  //         username: "Karianne",
  //         description: "Julianne.OConner@kory.org",
  //       },
  //     ],
  // //mainnote: this.state.notes[0] ? this.state.notes[0].id : null,
  //     input: "",
  //     route: "signin",
  //     isSignedIn: true,
  //   };

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        notes: data.notes,
        joined: data.joined,
      },
    });
  };

  loadNotes = (data) => {
    this.setState({
      notes: [
        {
          id: data.id,
          title: data.title,
          content: data.content,
          dateCreated: data.dateCreated,
          email: data.email,
        },
      ],
    });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      // If the route is going to signin, then you aren't signed in
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={this.isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Notes loadNotes={this.loadNotes} notes={this.state.notes} />
          </div>
        ) : this.state.route === "signin" ? (
          <Signin loadNotes={this.loadNotes} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
            
    );
  }
}

export default App;
