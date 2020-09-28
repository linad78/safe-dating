import React from "react";
import "./Login.css";
import { withRouter,Link} from "react-router-dom";
import {Button} from "rsuite";
//import firebase from "../../firebase";
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";


class Login extends React.Component {
  componentDidMount() {
    console.log("this.props.history", this.props.history);
  }

  loginUserMain() {
    console.log("loginUser function called...");
    var userObject = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    console.log("userObject", userObject);
    if (userObject.email && userObject.password) {
      fetch("http://localhost:1234/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userObject }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data obtained is", data);
          if (data.status === 404) {
            alert("invalid login credentials...");
          } else if (data.content) {
            localStorage.setItem("token", data.token);
            this.props.history.push({
              pathname: "/dashboard",
              state: data.content,
            });
            alert("logged in successfully...");
          }
        });
    } else {
      alert("please fill the required credentails...");
    }
  }

  loginUser = () => {
    this.props.history.push("/platform");
  };

  // xyz = () => {//xyz
  //   console.log("registerUser Function called...");
  //   this.props.history.push("/register");
  // };

  render() {
    return (
      <div id="LoginForm">
        <div className="container">
          <h1 className="form-heading">Date and Be Safe</h1>
          <p className="form-heading">
            Scammers are everywhere especially online they use fake pictures
            pretend to be someone else{" "}
          </p>
          <p className="form-heading">
            {" "}
            Beware their seweet talk they will fall in love instantly use the
            being away serving their country as an excuse not to meet you{" "}
          </p>
          <p className="form-heading">
            {" "}
            Then when they garntee your love they use it to scam you by asking
            for money they are dnagerous and can ruin your life
          </p>
          <p className="form-heading ">
            Make sure to to report any suspicious users to protect yourself and
            others{" "}
          </p>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <img
                  className="header__logo"
                  src="https://www.freelogodesign.org/file/app/client/thumb/c01a4d95-80ea-44a8-a590-21c4d8b140f2_200x200.png?1600112149245"
                  alt="logo"
                />

                <h1> Welcome! Please enter your username and password</h1>
              </div>
              <form id="Login">
                <div className="form-group">
                  <input
                    type="phone"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Phone"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.loginUser}
                >
                  Login
                </button>
              </form>
              <p>
                New User?{" "}
                
                  <Link to="/xyz">
                    <Button renderAs="button">
                      <span>Sign Up</span>
                    </Button>
                  </Link>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
