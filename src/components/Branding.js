import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

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
  align-items: center;
  margin-bottom: 0.5em;
  h6 {
    min-width: 150px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default function Branding({ display, handleText, resetState }) {
  const [edit, setEdit] = useState(false);
  //   const classes = useStyles();
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
          <Typography variant='h4' gutterBottom>
            Branding
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
          Set name, welcome page text, and other branding for your patients to
          see during an exam
        </Typography>
        <Typography variant='h5' gutterBottom>
          Display Name
        </Typography>
        <Typography variant='body1' gutterBottom>
          Set how the organization name is displayed to patients. With instances
          of limited screen space (emails, mobile view), a shortened name is
          displayed
        </Typography>
      </div>
      {edit ? (
        <Fade in={edit}>
          <form noValidate autoComplete='off'>
            <Row>
              <Typography variant='h6'>Full Name</Typography>
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
              <Typography variant='h6'>Short Name</Typography>
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
              <Typography variant='h6'>Welcome Text</Typography>
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
        </Fade>
      ) : (
        <div>
          <Row>
            <Typography variant='h6'>Full Name</Typography>
            <p>{display.fullName}</p>
          </Row>
          <Row>
            <Typography variant='h6'>Short Name</Typography>
            <p>{display.shortName}</p>
          </Row>
          <Row>
            <Typography variant='h6'>Welcome Text</Typography>
            <p>{display.welcomeText}</p>
          </Row>
        </div>
      )}
    </Main>
  );
}
