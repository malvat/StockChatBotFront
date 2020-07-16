import React from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router";

const drawerWidth = 240;


const styles = {
    root: {
      display: 'flex',
      marginLeft: '50px',
      marginTop: '20px',
      width: '90%',
    },
    appBar: {
      zIndex: 1201,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: "3%",
    },
    gridContainer: {
      padding: "2%",
    },
}

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            buy_page: false,
            home_page: false,
        }
    }

    onItemSelected(item) {
        console.log(item);
        console.log("function called");
        if(item === "Buy stocks") {
            this.setState({
                buy_page: true,
                home_page: false,
            })
        } else if(item === "Home") {
            this.setState({
                buy_page: false,
                home_page: true,
            })
        }
    }

    render() {
        const { classes } = this.props
        if(this.state.buy_page) {
            this.setState({
                buy_page: false,
                home_page: false,
            })
            return(
                <Redirect to="/dashboard/buystock" />
            )
        }
        if(this.state.home_page) {
            this.setState({
                buy_page: false,
                home_page: false,
            })
            return(
                <Redirect to="/dashboard/home" />
            )
        }
        return(
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    {['Home', 'Buy stocks', 'Sell stocks', 'Report'].map((text, index) => (
                    <ListItem onClick={ this.onItemSelected.bind(this, text) } button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['About us', 'Help'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </div>
            </Drawer>
        )
    }
}

export default withStyles(styles)(SideMenu)