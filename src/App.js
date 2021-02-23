import React from "react";
import "./App.css";
import UserItem from "./Component/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phonenumber: "",
      password: "",
      users: [],
    };
  }
  handleUsernameChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state.username);
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };
  handlePhonenumberChange = (e) => {
    this.setState({ phonenumber: e.target.value });
    console.log(this.state.phonenumber);
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      username: this.state.name,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
    };
    this.setState({ users: [...this.state.users, newUser] });

    this.setState({ username: "", email: "", phonenumber: "", password: "" });
  };
  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={this.state.phonenumber}
              onChange={this.handlePhonenumberChange}
            />
            <input
              type="password"
              placeholder=" Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div>
          {this.state.users.map((user) => (
            <UserItem
              name={user.username}
              email={user.email}
              phonenumber={user.phonenumber}
              password={user.password}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
