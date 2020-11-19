import React, { Component } from "react";
import "./App.css";
import Branding from "./components/Branding";
import Hours from "./components/Hours";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: {
        0: {
          name: "Monday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        1: {
          name: "Tuesday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        2: {
          name: "Wednesday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        3: {
          name: "Thursday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        4: {
          name: "Friday",
          open: true,
          start: "09:00",
          finish: "17:00"
        }
      },
      display: {
        fullName: "Scott.md Hospital",
        shortName: "SMD",
        welcomeText:
          "Get a quick diagnosis for many medications conditions from your computer or mobile device"
      }
    };
  }

  toggleOpen = (event, i) => {
    const { days } = { ...this.state };
    const currentState = days;
    currentState[i].open = event.target.checked;
    this.setState({ days: currentState });
  };

  handleChange = (event, i) => {
    const { days } = { ...this.state };
    const currentState = days;
    const { name, value } = event.target;
    currentState[i][name] = value;
    this.setState({ days: currentState });
  };

  handleText = (event) => {
    const { name, value } = event.target;
    const { display } = { ...this.state };
    const item = display;
    item[name] = value;
    this.setState({ display: item });
  };

  resetState = (name, value) => {
    console.log(value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Hours
          days={this.state.days}
          handleChange={this.handleChange}
          toggleOpen={this.toggleOpen}
          resetState={this.resetState}
        />
        <hr />
        <Branding
          display={this.state.display}
          handleText={this.handleText}
          resetState={this.resetState}
        />
      </div>
    );
  }
}
