import React from 'react'
import {Paper, Typography, TextField, Button, Snackbar, Slide, Grow } from '@material-ui/core';
import {Redirect} from "react-router-dom";

const heading = {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "column",
}

const paper = {
    width:"40%",
    padding: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
};

const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
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

export default class BuyStock extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            snackmessage: "hello, there",
            snackbar: false,
            buy_stock: false,
            stock_price: 0,
        }
    }

    onSubmit(e) {
        var data = {};
        var fields = ["ticker", "quantity"];
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
                data[fields[i]] = temp.value;
            } else {
                incomplete = true;
                break;
            }
        }
        data['price'] = 123;
        data['user_id'] = "5f01060ca35a4705000204f5";
        data['stock_name'] = "Apple";

        console.log(data);
        // check if all the necessary information is provided 
        if(!incomplete) {
            // make request to backedn for creating user
            fetch("http://localhost:8000/user/stock/add", {
                method: "POST",
                headers: {
                    'Accept': 'application/JSON', 
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(data)
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
                            buy_done: true,
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
            <Grow in={3}>
                <div style={container}>
                    <Paper style={paper} variant="outlined" elevation={3}>

                        {/* heading  */}
                        <div style={heading}>
                            <Typography variant="h5">
                                Sell Stock
                            </Typography>
                            <Typography variant="subtitle1">
                                Get your share, you deserve it
                            </Typography>
                        </div>

                        {/* input form */}
                        <div style={form}>
                            <div style={{paddingTop: "10%", paddingBottom: "5%"}}>
                                <TextField style={inputStyle} id="ticker" label="Stock Ticker" variant="outlined"/>
                            </div>
                            <div style={{ paddingBottom: "5%"}}>
                                <TextField type="number" style={inputStyle} id="quantity" label="Number of Stock" variant="outlined"/>
                            </div>
                            <div style={{ paddingBottom: "10%"}}>
                                <Typography variant="h6">
                                    Price : {this.state.stock_price}
                                </Typography>
                            </div>
                            <div style={links}>
                                <Button onClick={this.onSubmit} variant="contained" color="primary">
                                    SELL
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
            </Grow>
        )
    }
}