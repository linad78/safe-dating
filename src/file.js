import React from "react";
import "./SignUp.css";

//import PhoneInput from 'react-phone-number-input'

//made a controlled component to handle form inputs
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getImageUrl = this.getImageUrl.bind(this);
    this.isFormFilled = true;
    this.state = {
      url: "",
    };
  }
  componentDidMount() {
    this.state.url = "";
  }

  getImageUrl(url) {
    this.setState({
      url: url,
    });
    console.log("got url", this.state.url);
  }

  goToLogin() {
    this.props.history.push("/");
  }

  registerUser() {
    console.log("inside registerUser and state is", this.state);
    if (
      Object.keys(this.state).length === 0 &&
      this.state.constructor === Object
    ) {
      alert("please fill all the credentials properly..");
    } else if (this.state.password != this.state.confirm_password) {
      alert("the passwords donot match..");
    } else if (Object.keys(this.state).length <= 5) {
      alert("please fill all the deatils..");
    } else {
      fetch("http://localhost:1234/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userObject: this.state }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("register data", data);
          if (data.status == 404) {
            alert("some error occured while registering you..");
          } else if (data.isExists == true) {
            alert("this user already exists..please try with another email...");
          } else {
            alert("registered successfully...");
          }
        });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container" id="wrap">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form className="form">
              <legend>Sign Up</legend>

              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control "
                    placeholder="Enter your name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <input
                type="phone"
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />

              <input
                type="text"
                name="email"
                className="form-control "
                placeholder="Your Email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />

              <input
                type="password"
                name="password"
                className="form-control "
                placeholder="Password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />

              <input
                type="password"
                name="confirm_password"
                className="form-control "
                placeholder="Confirm Password"
                onChange={this.handleInputChange}
                value={this.state.confirm_password}
              />
              <label>Gender : </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked={this.state.gender == "male"}
                  onChange={this.handleInputChange}
                />{" "}
                Male
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  onChange={this.handleInputChange}
                  checked={this.state.gender == "female"}
                />{" "}
                Female
              </label>
              <br />
            </form>
          </div>
        </div>

        <button
          className="btn btn-lg btn-primary btn-block signup-btn"
          type="button"
          onClick={this.registerUser.bind(this)}
          disabled={this.state.url == "" ? true : false}
        >
          Create my Profile
        </button>
      </div>
    );
  }
}
export default SignUp;
