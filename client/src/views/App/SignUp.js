import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/SignUp.scss'
import { Link } from "react-router-dom";
// import HUE from '@material-ui/core/colors/HUE';
import Button from '@material-ui/core/Button';
// import blue from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/red';
// import purple from '@material-ui/core/colors/red';
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";



import styled from 'styled-components';
import { TextField, FormControl, Typography } from "@material-ui/core";
var Red = styled.p`text-align:center;`

// const primary = blue[600];
// const accent = green[400];
// const secondAccent = purple[800];
const styles = makeStyles({
  modal: {
    marginTop: "500px"
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        username: "",
        password: "",
      }
    };
  }

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  //needs to be integrated with a sign up function
  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state.credentials);
  };

  render() {
    return (
      <>
        <div>
          <Navbar />
          {/* email */}
          <div className={styles.modal}>
          <Grid container spacing={2} justify='center' style={{marginTop: "25%"}}>
            <FormControl onSubmit={this.onSubmit}>
              <TextField className='input' placeholder="Email"
                value={this.state.credentials.name}
                type="email" onChange={this.onChange}></TextField>
              {/* username */}
              <TextField className='input' placeholder="Username"
                value={this.state.credentials.username}
                type="text"
                onChange={this.onChange}></TextField>
              {/* password */}
              <TextField className='input' placeholder="Password"
                value={this.state.credentials.password}
                type="password"
                onChange={this.onChange}></TextField>
              <Button className="Button" color="primary">
                Sign Up
              </Button>
              <Typography style={{ color: "gray"}}>
                <Red>
                  Already a member? <Link  to="/login">Log In</Link>
                </Red>
            </Typography>
            </FormControl>
          </Grid>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;