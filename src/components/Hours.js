import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

const Main = styled.div`
  margin-bottom: 1em;
  padding: 1em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  alignt-items: center;
  width: 100%;
  button {
    margin: 0.6em;
  }
  .button-group {
    display: flex;
    justify-content: center;
    alignt-items: center;
  }
`;
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
  span {
    display: flex;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Hours({ days, resetState, toggleOpen, handleChange }) {
  const [edit, setEdit] = useState(false);
  const [oldState, setOldState] = useState({});

  const clickEdit = () => {
    setOldState(JSON.stringify(days));
    setEdit(!edit);
  };

  const clickCancel = () => {
    resetState("days", JSON.parse(oldState));
    setEdit(!edit);
  };
  return (
    <Main>
      <Header>
        <h2>Hours of Operation</h2>
        {!edit ? (
          <Button color='primary' onClick={() => clickEdit()}>
            Edit
          </Button>
        ) : (
          <div className='button-group'>
            <Button onClick={() => clickCancel()}>Cancel</Button>
            <Button
              variant='contained'
              color='primary'
              onClick={() => setEdit(!edit)}
            >
              Save
            </Button>
          </div>
        )}
      </Header>
      <p>
        Manage standard order of operation when providers are available to
        provide care. Patients will be informed if they submit an exam outside
        if these hours.
      </p>

      {edit
        ? Object.keys(days).map((key) => {
            return (
              <Row key={key}>
                <span>
                  <p>{days[key].name}</p>
                  <Switch
                    checked={days[key].open}
                    onChange={(e) => toggleOpen(e, key)}
                    name='open'
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <p>{days[key].open === true ? "OPEN" : "CLOSED"}</p>
                </span>
                <span>
                  <input
                    type='time'
                    name='start'
                    onChange={(e) => handleChange(e, key)}
                    value={days[key].start}
                  ></input>
                  -
                  <input
                    type='time'
                    name='finish'
                    onChange={(e) => handleChange(e, key)}
                    value={days[key].finish}
                  ></input>
                </span>
              </Row>
            );
          })
        : Object.keys(days).map((key) => {
            return (
              <Row key={key}>
                <span>
                  <p>{days[key].name}</p>
                  <p>{days[key].open === true ? "OPEN" : "CLOSED"}</p>
                </span>
                <span>
                  <p>{days[key].start}</p>
                  <p>{days[key].finish}</p>
                </span>
              </Row>
            );
          })}
    </Main>
  );
}
