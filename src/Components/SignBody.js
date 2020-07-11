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
    constructor(props) {
        super(props);   
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            heading: "click the damn button",
            check: true,
        }
    }

    onSubmit(e) {
        var user = {};
        var fields = ["first_name", "last_name", "email", "password"];
        var temp;
        console.log("clicked");
        for(var i = 0; i < fields.length; i++) {    
            var temp = document.getElementById(fields[i]);
            if(temp != undefined) {
                user[fields[i]] = temp.value;
            }
        }
        fetch("http://localhost:8000/user/create", {
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
            });
        });
    }

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
                                <TextField style={inputStyle} id="first_name" label="First Name" variant="outlined"/>
                            </div>
                            <div>
                                <TextField style={inputStyle} id="last_name" label="Last Name" variant="outlined"/>
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
                            <Button onClick={this.onSubmit} variant="contained" color="primary">
                                Sign up
                            </Button> 
                        </div>
                    </div>

                </Paper>
            </div>
        )
    }
}