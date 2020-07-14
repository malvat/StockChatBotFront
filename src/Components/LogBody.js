import React from 'react'
import {Paper, Typography, TextField, Button, Snackbar, Slide } from '@material-ui/core';
import {Link, Redirect} from "react-router-dom";

const heading = {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "column",
}

const paper = {
    width:"20%",
    padding: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
};

const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}

const form = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
}

const inputStyle = {
    width: "100%",
}

const links = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

export default class LogBody extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            snackmessage: "hello, there",
            snackbar: false,
            loggedin: false,
        }
    }

    onSubmit(e) {
        var user = {};
        var fields = ["email", "password"];
        var temp;
        var incomplete = false;
        console.log("clicked");
        for(var i = 0; i < fields.length; i++) {    
            temp = document.getElementById(fields[i]);
            if(temp !== undefined) {
                if(temp.value.trim() == "") {
                    incomplete = true;
                    break;
                }
                user[fields[i]] = temp.value;
            } else {
                incomplete = true;
                break;
            }
        }

        // check if all the necessary information is provided 
        if(!incomplete) {
            // make request to backedn for creating user
            fetch("http://localhost:8000/user/view", {
                method: "POST",
                headers: {
                    'Accept': 'application/JSON', 
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(user)
            }).then( result=> {
                result.json().then(res=>{
                    // change the page
                    console.log(res);
                    if(res.error) {
                        this.setState({
                            snackbar: true,
                            snackmessage: "User does not exists",
                        })
                    } else {
                        // logged in
                        this.setState({
                            loggedin: true,
                        })
                    }
                });
            });
        }
    }

    render() {
        if(this.state.loggedin) {
            return(<Redirect to="/dashboard" />)
        }
        return(
            <div style={container}>
                <Paper style={paper} variant="outlined" elevation={3}>

                    {/* heading  */}
                    <div style={heading}>
                        <Typography variant="h5">
                            Sign in
                        </Typography>
                        <Typography variant="subtitle1">
                            To get the best out of us
                        </Typography>
                    </div>

                    {/* input form */}
                    <div style={form}>
                        <div style={{paddingTop: "10%", paddingBottom: "5%"}}>
                            <TextField style={inputStyle} id="email" label="Email" variant="outlined"/>
                        </div>
                        <div style={{ paddingBottom: "10%"}}>
                            <TextField type="password" style={inputStyle} id="password" label="Password" variant="outlined"/>
                        </div>
                        <div style={links}>
                            <Link to="/signup" color="primary">
                                create an account
                            </Link>
                            <Button onClick={this.onSubmit} variant="contained" color="primary">
                                Log in
                            </Button> 
                        </div>
                    </div>

                </Paper>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    TransitionComponent={Slide}
                    open={this.state.snackbar}
                    onClose={()=>this.setState({snackbar: false})}
                    message={this.state.snackmessage}
                    autoHideDuration={3000}
                />
            </div>
        )
    }
}