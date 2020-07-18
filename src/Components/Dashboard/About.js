import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from '../NavBar';
import SideMenu from '../SideMenu';
import AboutPage from '../Pages/AboutPage';

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
        <AboutPage />        
      </main>
    </div>
  );
}