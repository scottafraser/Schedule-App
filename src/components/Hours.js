import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

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
  P {
    min-width: 100px;
  }
  h6 {
    min-width: 150px;
  }
  input {
    margin: 0.7em;
    hover: pointer;
    border: none;
    border-radius: 5px;
    padding: 0.7em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  span {
    display: flex;
    align-items: center;
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
        <Typography variant='h4' gutterBottom>
          Hours of Operation
        </Typography>
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
      <Typography variant='body1' gutterBottom>
        Manage standard order of operation when providers are available to
        provide care. Patients will be informed if they submit an exam outside
        if these hours.
      </Typography>
      {edit
        ? Object.keys(days).map((key) => {
            return (
              <Fade in={edit} key={key}>
                <Row>
                  <span>
                    <Typography variant='h6'>{days[key].name}</Typography>
                    <Switch
                      checked={days[key].open}
                      onChange={(e) => toggleOpen(e, key)}
                      name='open'
                      color='primary'
                    />
                    <Typography variant='h6'>
                      {days[key].open === true ? "OPEN" : "CLOSED"}
                    </Typography>
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
              </Fade>
            );
          })
        : Object.keys(days).map((key) => {
            const start = moment(days[key].start, "H:mm");
            const finish = moment(days[key].finish, "H:mm");
            console.log(start);
            return (
              <Row key={key}>
                <span>
                  <Typography variant='h6'>{days[key].name}</Typography>
                  <Typography variant='h6'>
                    {days[key].open === true ? "OPEN" : "CLOSED"}
                  </Typography>
                </span>
                <span>
                  <p>{start.format("H:mm a")}</p>
                  <p>{finish.format("H:mm a")}</p>
                </span>
              </Row>
            );
          })}
    </Main>
  );
}
