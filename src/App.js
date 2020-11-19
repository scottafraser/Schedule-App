import React, { Component } from "react";
import "./App.css";
import Branding from "./components/Branding";
import Hours from "./components/Hours";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        {
          name: "Monday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        {
          name: "Tuesday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        {
          name: "Wednesday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        {
          name: "Thursday",
          open: true,
          start: "09:00",
          finish: "17:00"
        },
        {
          name: "Friday",
          open: true,
          start: "09:00",
          finish: "17:00"
        }
      ]
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

  render() {
    return (
      <div>
        <Hours
          days={this.state.days}
          handleChange={this.handleChange}
          toggleOpen={this.toggleOpen}
        />
      </div>
    );
  }
}
