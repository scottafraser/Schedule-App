import React from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

const Main = styled.div``;

const Row = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  padding: 0em 1em;
  p {
    font-weight: 700;
    min-width: 100px;
  }
  input {
    hover: pointer;
    margin: 0em 0.5em;
    border: none;
    border-radius: 5px;
    padding: 0.7em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default function Hours(props) {
  return (
    <Main>
      {props.days.map((day, i) => {
        return (
          <Row key={i}>
            <p>{day.name}</p>
            <Switch
              checked={day.open}
              onChange={(e) => props.toggleOpen(e, i)}
              name='open'
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p> {day.open === true ? "OPEN" : "CLOSED"}</p>
            <input
              type='time'
              name='start'
              onChange={(e) => props.handleChange(e, i)}
              value={day.start}
            ></input>
            -
            <input
              type='time'
              name='finish'
              onChange={(e) => props.handleChange(e, i)}
              value={day.finish}
            ></input>
          </Row>
        );
      })}
    </Main>
  );
}
