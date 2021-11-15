import React, { Component } from "react";
// import 'axios'
// import '../../../public/assets/css/style.css'
import axios from "axios";
// import Navbar from '../global-components/navbar'
import { Link } from "react-router-dom";

class Login1 extends React.Component {
  state = {
    email: "",
    password: "",
    Success: "false",
    users: {},
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      this.state.users.mail = res.data.map((user) => user.email);
      this.state.users.pass = res.data.map((user) => user.username);
      console.log(this.state.users);
    });
  }

  handleMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    for (var i = 0; i < this.state.users.mail.length; i++) {
      let testmail = this.state.users.mail[i];
      let testpass = this.state.users.pass[i];
      if (testmail === this.state.email && testpass === this.state.password) {
        this.setState({
          Success: "true",
        });
        break;
        console.log(this.state.users.mail[i]);
        console.log(this.state.email);
        console.log(this.state.users.pass[i]);
        console.log(this.state.password);
        console.log(this.state.Success);
      } else {
        this.setState({
          Success: "false",
        });
        console.log(this.state.Success);
        console.log(this.state.users.mail[i]);
        console.log(this.state.email);
      }
    }

    alert(this.state.Success);
  };

  render() {
    return (
      //  <div className="Login1">
      <div className="Login">
        {/* <Navbar /> */}
        <div className="colorbackground"></div>
        <div className="App1">
          <div className="left"></div>
          <div className="right">
            <h2>
              We Are <span>Rowaad</span>
            </h2>
            <p>Welcome back! Log in to your account to view today's updates:</p>
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="buttonform"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleMail}
                />
                <input
                  className="buttonform"
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword}
                />
                <Link
                  className="btn btn-yellow"
                  to="/tour-details"
                  style={{ float: "right" }}
                >
                  Sign In <i className="fa fa-arrow-right" />
                </Link>
                {/* {console.log("hihi" + this.state.Success)} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login1;
