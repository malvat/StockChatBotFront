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
import { Card, CardContent, Tooltip } from '@material-ui/core';
import { Line, CartesianGrid, LineChart, XAxis, YAxis, BarChart, Bar } from 'recharts';

const drawerWidth = 240;
const data = [ {date: "A" ,uv: 400}, {date: "B", uv: 500}, {date: "C", uv: 700} ]
const stock_data = [ {name :"AAPL", stocks: 24 }, {name :"GOOGL", stocks: 10 },
{name :"NFLX", stocks: 22 }, {name :"AMZN", stocks: 44 }, {name: "SEN", stocks: "15"} ]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '50px',
    marginTop: '20px',
    width: '90%',
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
            <Grid style={{paddingTop: "2%"}} container spacing={7}>
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
                <Card variant="outlined" >
                  <CardContent>
                    <Typography variant="h6">
                      STOCKS COST
                    </Typography>
                    <br />
                    <Typography variant="h4">
                      $986, 208  
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
            {/* next row  */}
            <Grid style={{paddingTop: "4%"}} container spacing={7}>
              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5">
                      PROFIT
                    </Typography>
                    <br />
                    <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" />
                    <XAxis dataKey="date" />
                    <YAxis />
                  </LineChart>

                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5">
                      TOP 5 STOCKS
                    </Typography>
                    <br />
                    <BarChart width={440} height={300} data={stock_data}>
                    <Bar barSize={30} type="monotone" dataKey="stocks" fill="#3F51B5"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                  </BarChart>

                  </CardContent>
                </Card>
              </Grid>

            </Grid>
        </Grid>
      </main>
    </div>
  );
}