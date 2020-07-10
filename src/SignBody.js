import React from 'react'
import {Paper, Typography, TextField, Button, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const heading = {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "column",
}

const paper = {
    width:"28%",
    padding: "2%",
    paddingTop: "3%",
    paddingBottom: "3%",
};

const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
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

const names = {
    paddingTop: "10%",
    paddingBottom: "5%",
    display: "flex",
    justifyContent: "space-between",
}

export default class SignBody extends React.Component {
    render() {
        return(
            <div style={container}>
                <Paper style={paper} variant="outlined" elevation={3}>

                    {/* heading  */}
                    <div style={heading}>
                        <Typography variant="h5">
                            Sign up
                        </Typography>
                        <Typography variant="subtitle1">
                            Join to start building your market
                        </Typography>
                    </div>

                    {/* input form */}
                    <div style={form}>
                        <div style={ names }>
                            <div>
                                <TextField style={inputStyle} id="email" label="First Name" variant="outlined"/>
                            </div>
                            <div>
                                <TextField style={inputStyle} id="email" label="Last Name" variant="outlined"/>
                            </div>
                        </div>
                        <div style={{ paddingBottom: "5%"}}>
                            <TextField style={inputStyle} id="email" label="Email" variant="outlined"/>
                        </div>
                        <div style={{ paddingBottom: "5%"}}>
                            <TextField type="password" style={inputStyle} id="password" label="Password" variant="outlined"/>
                        </div>
                        <div style={{ paddingBottom: "10%"}}>
                            <TextField type="password" style={inputStyle} id="confirm" label="Confirm" variant="outlined"/>
                        </div>

                        {/* links  */}
                        <div style={links}>
                            <Link href="#" color="primary">
                                log in instead
                            </Link>
                            <Button variant="contained" color="primary">
                                Sign up
                            </Button> 
                        </div>
                    </div>

                </Paper>
            </div>
        )
    }
}