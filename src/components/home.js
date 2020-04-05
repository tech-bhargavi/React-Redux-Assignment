import React, { Component } from "react";
import { connect } from "react-redux";

class home extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    pwd: ""
  };

  // Used history component to push on another component i.e. user component
  submit = () => {
    this.props.onSubmitBtn(this.state);
    this.props.history.push("/user");
  };

  setFName = event => {
    console.log("event.target.value", event.target.value);
    this.setState({
      fName: event.target.value
    });
  };
  setLName = event => {
    console.log("event.target.value", event.target.value);
    this.setState({
      lName: event.target.value
    });
  };
  setEmail = event => {
    console.log("event.target.value", event.target.value);
    this.setState({
      email: event.target.value
    });
  };
  setPwd = event => {
    console.log("event.target.value", event.target.value);
    this.setState({
      pwd: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>User Form</h1>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your first name.." onChange={this.setFName} />
        </label>
        <label>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          onChange={this.setLName}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address.."
          onChange={this.setEmail}
        ></input>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password.."
          onChange={this.setPwd}
        ></input>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

// Set dispatcher action need to be performed
const mapDispatchtoProps = dispatch => {
  return {
    onSubmitBtn: value => {
      dispatch({ type: "submit", value: value });
    }
  };
};

// Connect redux dispatcher action with components
export default connect(
  null,
  mapDispatchtoProps
)(home);
