import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import App from './App';
import { Toolbar, Typography } from '@material-ui/core';

export default class NavBar extends React.Component {
    render() {
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                        Stock Broker
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
