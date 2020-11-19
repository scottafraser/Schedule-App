import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

const Main = styled.div`
  margin-bottom: 1em;
  padding: 1em;
`;

const Dash = styled.div`
  margin: 1em;
  @media (max-width: 550px) {
    display: none;
  }
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
  width: 100%;
  span {
    display: flex;
    align-items: center;
  }
  h6 {
    padding: 0.5em;
  }
  @media (max-width: 768px) {
    h6 {
      width: 100%;
    }
    width: 100%;
    height: 100%;
    justify-content: center;
    #time-picker {
      margin: 0.2em;
    }
  }
  @media (max-width: 580px) {
    flex-wrap: wrap;
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
                    <Typography variant='h6' style={{ minWidth: "110px" }}>
                      {days[key].name}
                    </Typography>
                    <Switch
                      checked={days[key].open}
                      onChange={(e) => toggleOpen(e, key)}
                      name='open'
                      color='primary'
                    />
                    <Typography variant='h6' style={{ minWidth: "100px" }}>
                      {days[key].open === true ? "OPEN" : "CLOSED"}
                    </Typography>
                  </span>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin='normal'
                      id='time-picker'
                      name='start'
                      value={moment(days[key].start, "H:mm")}
                      onChange={(e) => handleChange(e, "start", key)}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                    <Dash> - </Dash>
                    <KeyboardTimePicker
                      margin='normal'
                      id='time-picker'
                      name='start'
                      value={moment(days[key].finish, "H:mm")}
                      onChange={(e) => handleChange(e, "finish", key)}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Row>
              </Fade>
            );
          })
        : Object.keys(days).map((key) => {
            const start = moment(days[key].start, "H:mm");
            const finish = moment(days[key].finish, "H:mm");
            return (
              <Row key={key}>
                <span>
                  <Typography variant='h6' style={{ minWidth: "110px" }}>
                    {days[key].name}
                  </Typography>
                  <Typography
                    variant='h6'
                    style={{ minWidth: "100px" }}
                    alignCenter
                  >
                    {days[key].open === true ? "OPEN" : "CLOSED"}
                  </Typography>
                </span>
                <span>
                  <Typography variant='body1' alignCenter gutterBottom>
                    {start.format("h:mm a")}
                  </Typography>
                  <Typography
                    variant='body1'
                    alignCenter
                    style={{ padding: ".5em" }}
                  >
                    -
                  </Typography>
                  <Typography variant='body1' alignCenter gutterBottom>
                    {finish.format("h:mm a")}
                  </Typography>
                </span>
              </Row>
            );
          })}
    </Main>
  );
}
