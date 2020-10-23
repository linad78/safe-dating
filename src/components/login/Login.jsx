import React, {useState} from 'react'
import './Login.css'
import { withRouter, Link } from 'react-router-dom'
import { Button } from 'rsuite'
import {auth,db} from "../../config/firebase";
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap'
;

class Login extends React.Component {
    componentDidMount() {
        console.log('this.props.history', this.props.history)
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    loginUserMain() {
        console.log('loginUser exist')
        var userObject = {
            email: this.refs.email.value,
            password: this.refs.password.value,
        }

        console.log('userObject', userObject)
        if (userObject.email && userObject.password) {
            fetch('http://localhost:1234/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userObject }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('data obtained is', data)
                    if (data.status === 404) {
                        alert('invalid login credentials...')
                    } else if (data.content) {
                        localStorage.setItem('token', data.token)
                        this.props.history.push({
                            pathname: '/dashboard',
                            state: data.content,
                        })
                        alert('logged in successfully...')
                    }
                })
        } else {
            alert('please fill the required credentails...')
        }
    }
    loginUser = () => {
        //this.props.history.push('/platform')
        var response = {
            email: this.state.email,
            password: this.state.password,
        }
        if (response.email != "" || response.password != "") {
            this.props.history.push('/platform')
        } else {
            alert("Must enter email and password to log in!")
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

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
                        Scammers are everywhere, especially online. They like to use fake pictures and pretend to be someone else.
                    </p>
                    <p className="form-heading">
                        {' '}
                        Beware of their sweet talk, they will pretend to fall in love with you, and then try to use that "love" for manipulation.{' '}
                    </p>
                    <p className="form-heading"> Scammers will try to manipulate their victims for money, or other nefarious purposes.</p>
                    <p className="form-heading ">Make sure to report any suspicious users to protect yourself and others.</p>
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <img
                                    className="header__logoForm"
                                    src="https://www.freelogodesign.org/file/app/client/thumb/c01a4d95-80ea-44a8-a590-21c4d8b140f2_200x200.png?1600112149245"
                                    alt="logo"
                                />

                                <h1> Welcome! Please enter your username and password</h1>
                            </div>
                            <Form id="Login">
                                <div className="mx-auto col-lg-3 col-md-6 col-lg-12">
                                    <Input name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                                </div>

                                <div className="mx-auto col-lg-3 col-md-6 col-lg-12">
                                    <Input
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>

                                <Button className="btn btn-primary" onClick={this.loginUser}>
                                    Login
                                </Button>
                            </Form>
                            <p>
                                New User?{' '}
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
        )
    }
}

export default withRouter(Login)
