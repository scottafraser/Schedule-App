import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: "100%"
    }
  }
}));

const Main = styled.div`
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
const Row = styled.div`
  display: flex;
  h4 {
    min-width: 150px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Branding({ display, handleText, resetState }) {
  const [edit, setEdit] = useState(false);
  const classes = useStyles();
  const [oldState, setOldState] = useState({});

  const clickEdit = () => {
    setOldState({ ...display });
    setEdit(!edit);
  };

  const clickCancel = () => {
    resetState("display", oldState);
    setEdit(!edit);
  };

  return (
    <Main>
      <div>
        <Header>
          <h2>Branding</h2>
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
          Set name, welcome page text, and other branding for your patients to
          see during an exam
        </p>
        <h4>Display Name</h4>
        <p>
          Set how the organization name is displayed to patients. With instances
          of limited screen space (emails, mobile view), a shortened name is
          displayed
        </p>
      </div>
      {edit ? (
        <form className={classes.root} noValidate autoComplete='off'>
          <Row>
            <h4>Full Name</h4>
            <TextField
              id='outlined-basic'
              fullWidth
              variant='outlined'
              value={display.fullName}
              onChange={handleText}
              name={"fullName"}
            />
          </Row>
          <Row>
            <h4>Short Name</h4>
            <TextField
              id='outlined-basic'
              fullWidth
              variant='outlined'
              value={display.shortName}
              onChange={handleText}
              name={"shortName"}
            />
          </Row>
          <Row>
            <h4>Welcome Text</h4>
            <TextField
              id='outlined-basic'
              fullWidth
              variant='outlined'
              value={display.welcomeText}
              onChange={handleText}
              name={"welcomeText"}
            />
          </Row>
        </form>
      ) : (
        <div>
          <Row>
            <h4>Full Name</h4>
            <p>{display.fullName}</p>
          </Row>
          <Row>
            <h4>Short Name</h4>
            <p>{display.shortName}</p>
          </Row>
          <Row>
            <h4>Welcome Text</h4>
            <p>{display.welcomeText}</p>
          </Row>
        </div>
      )}
    </Main>
  );
}
