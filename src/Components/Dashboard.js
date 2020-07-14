import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    padding: theme.spacing(3),
  },
  gridContainer: {
    padding: theme.spacing(2),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Quick Trade
          </Typography>
        </Toolbar>
      </AppBar>
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
              <ListItem button key={text}>
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
      <main className={classes.content}>
        <Toolbar />
        <Grid container>
            <Grid container>
              <Grid item>
                <Typography variant="h4">
                  Welcome, Anim Malvat
                </Typography>
              </Grid>
            </Grid>
            <Grid style={{paddingTop: "2%"}} container spacing={2}>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">
                      CREDIT
                    </Typography>
                    <br />
                    <Typography variant="h4">
                      $40,000  
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">
                      STOCKS OWNED
                    </Typography>
                    <br />
                    <Typography variant="h4">
                      976  
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="outlined" style={{backgroundColor: "#3F51B5", color: "white"}}>
                  <CardContent>
                    <Typography variant="h6">
                      STOCKS PRICE
                    </Typography>
                    <br />
                    <Typography variant="h4">
                      $986,100  
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </Grid>
      </main>
    </div>
  );
}