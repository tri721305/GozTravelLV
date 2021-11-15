import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  // TextField,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Icon from "./Icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./input";

import { signin, signup } from "../../actions/auth";
// import { Alert } from "@material-ui/lab";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  //   const isSignup = true;

  const [isSignup, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (formData.password !== formData.confirmPassword) {
    //   Alert(
    //     "Your Password Not Matched ! Please Check your password and confirm password"
    //   );
    //   return false;
    // }
    // console.log(formData.password);
    // if (formData.password !== formData.confirmPassword) {
    //   console.log("Sai");
    //   return (
    //     <Alert severity="error">
    //       <AlertTitle>Error</AlertTitle>
    //       This is an error alert — <strong>check it out!</strong>
    //     </Alert>
    //   );
    // }

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(res);

    const result = res?.profileObj; // cannot get property profileObj of undefined

    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again");
  };
  return (
    <Container component="main" maxWidth="xs">
      {/* <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert> */}
      <Paper className={classes.paper} elevation={3}>
        <Avatar
          className={classes.avatar}
          style={{ backgroundColor: "#F39142" }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  value={formData.firstName}
                />
                <Input
                  name="lastName"
                  label="Last Name "
                  handleChange={handleChange}
                  autoFocus
                  half
                  value={formData.lastName}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Adress"
              handleChange={handleChange}
              type="email"
              value={formData.email}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              value={formData.password}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
                value={formData.confirmPassword}
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: "F39142" }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <GoogleLogin
            clientId="206502096917-j0aljh1tua959e5koc5ik0a3hrhvod60.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                style={{ color: "F39142" }}
                className={classes.googleButton}
                // color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
