import React from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';
const background = require('../Assets/background.jpg');

const container = {
    background: `center fixed url(${background})`,
    height: "100vh",
}

const heading = {
    padding: "0",
    margin: "0",
    fontSize: "46px",
    fontWeight: "200",
    backgroundColor: "#3f51b5",
    color: "white",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
}

const holder = {
    position: "absolute",
    bottom: "10%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "20%",
    justifyContent: "space-evenly",
}

const sub_heading = {
    fontSize: "25px",
    fontWeight: "300",
}

const button_login = {
    marginLeft: "2%",
    marginRight: "2%",
    paddingLeft: "2%",
    paddingRight: "2%",
}

const button_signup = {
    marginLeft: "2%",
    marginRight: "2%",
    paddingLeft: "1.8%",
    paddingRight: "1.8%",
}

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this);
        this.state = {
            login: false,
            signup: false,
        }
    }

    onLogin(e) {
        console.log("login ");
        this.setState({
            login: true,
        });
    }

    onSignup(e) {
        console.log("signup");
        this.setState({
            signup: true,
        });
    }
    render() {
        if(this.state.login) {
            return(<Redirect to="/login"/>);
        } else if(this.state.signup) {
            return(<Redirect to="/signup"/>);
        }
        return(
            <div style={container}>
                <div style={heading}>
                    Quick Trade
                </div>

                <div style={holder}>
                    <div style={sub_heading}>
                        Join us and build your market right now
                    </div>
                    <div>
                        <Button onClick={this.onLogin} style={button_login} color="primary" variant="contained">
                            login
                        </Button>
                        <Button onClick={this.onSignup} style={button_signup} color="primary" variant="contained">
                            signup
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}