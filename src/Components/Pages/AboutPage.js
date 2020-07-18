import React from 'react'
import {Paper, Typography, TextField, Button, Snackbar, Slide, Grow, Divider } from '@material-ui/core';
import {Redirect} from "react-router-dom";

const heading = {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    flexDirection: "column",
}

const paper = {
    width:"70%",
    paddingTop: "5%",
    paddingBottom: "5%",
};

const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
}

const sub_container = {
    display: "flex",    
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

export default class AboutPage extends React.Component {
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
        return(
            <Grow in={3}>
                <div style={container}>
                    <Paper style={paper} variant="outlined" elevation={3}>

                        <div style={ sub_container }>
                            <div>
                                 {/* heading  */}
                                <div style={heading}>
                                    <Typography variant="h5">
                                        About us
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Don't spend it, invest it
                                    </Typography>
                                </div>

                            
                                {/* about us content  */}
                                <div style={{ padding: "5%",  paddingTop: "0" }}>
                                    <Typography variant="subtitle1">
                                        <ul>
                                            <li> We are online stock brokers</li>
                                            <li> We will help you invest your money without hastles </li>
                                            <li> We provide live insights to your stock data </li>
                                            <li> Use our chatbot to save your time </li>
                                        </ul>
                                    </ Typography>
                                </div>

                            </div>

                            <Divider orientation="vertical" flexItem />
                            
                            <div>
                                <div style={heading}>
                                    <Typography variant="h5">
                                        Contact information
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Don't be shy, give us a mail
                                    </Typography>
                                </div>

                                <Typography variant="subtitle1">
                                    <ul>
                                        <li> 
                                            Mail: malvat@uwindsor.ca
                                        </li> 
                                        <li>
                                            GitHub: https://github.com/malvat/StockChatBotFront
                                        </li>
                                        <li>
                                            Website: http://animmalvat.ml/?i=1
                                        </li>
                                    </ul>
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Grow>
        )
    }
}