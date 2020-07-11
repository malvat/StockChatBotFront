import React from 'react'
import {Paper, Typography, TextField, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

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
    render() {
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
                            <Button variant="contained" color="primary">
                                Log in
                            </Button> 
                        </div>
                    </div>

                </Paper>
            </div>
        )
    }
}