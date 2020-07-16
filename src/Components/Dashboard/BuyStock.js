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
import { Card, CardContent, Slide } from '@material-ui/core';
import { Line, CartesianGrid, LineChart, XAxis, YAxis, BarChart, Bar } from 'recharts';
import NavBar from '../NavBar';
import SideMenu from '../SideMenu';
import BuyPage from '../Pages/BuyPage';

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

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <SideMenu />
      <main className={classes.content}>
        <Toolbar />
        <BuyPage />        
      </main>
    </div>
  );
}