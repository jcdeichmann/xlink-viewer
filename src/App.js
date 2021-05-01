import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, AppBar, Box, CardActionArea, Divider, TextField, Toolbar, ThemeProvider, Icon, IconButton, CssBaseline, List, ListItem, ListItemText, Accordion, AccordionSummary, Grid } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { AccordianCowCard } from "./components/AccordianCowCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import Pullable from 'react-pullable'
import moment from "moment";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

var cowData = {
  "Animal Number": "118",
  "Robot": "101",
  "Lactation No": "2",
  "Lactation Days": "228",
  "Interval Exceeded": "197.2",
  "Away": "21:20",
  "Milk Yield Expected": "20.4",
  "Lactation No2": "2",
  "Lactation Days2": "228",
  "Interval Exceeded2": "197.2",
  "Away2": "21:20",
  "Milk Yield Expected2": "20.4"
}

var cowData2 = {
  "Animal Number": "24",
  "Robot": "101",
  "Lactation No": "2",
  "Lactation Days": "34",
  "Interval Exceeded": "17.2",
  "Away": "8:20",
  "Milk Yield Expected": "20.4",
  "Lactation No2": "2",
  "Lactation Days2": "228",
  "Interval Exceeded2": "197.2",
  "Away2": "21:20",
  "Milk Yield Expected2": "20.4"
}

function prioritizeData(datas) {
  console.log("datas: " + datas)
  var priorityKeys = ["Animal Number", "Away", "Robot", "Interval Exceed"]

  var sort = (x,y) => {
      var xInd = priorityKeys.indexOf(x)
      var yInd = priorityKeys.indexOf(y)

      xInd = xInd == -1 ? 1000 : xInd
      yInd = yInd == -1 ? 1000 : yInd

      if (xInd < yInd) {
        return -1
      } else {
        return 0
      }
    }

  var ordered =  datas.map(function(data) {
    return Object.keys(data).sort(sort).reduce(
      (obj, key) => { 
        obj[key] = data[key]; 
        return obj;
      }, 
      {}
    )
  })

  console.log("ordered: " + ordered)

  return ordered
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c30a13"
    },
    background: {
      default: "#c30a13",
      body: "#c30a13"
    },
    secondary: {
      main: "#0ac3ba"
    }
  }
});

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Box className="testing" style={{
        position: "fixed",
        width: "100%",
        height: "300px",
        top: "-250px",
        zIndex: "10",
        backgroundColor: "#c30a13"
      }} ></Box>
      <AppBar position="sticky" style={{ clipPath: "inset(0px -10px -10px -10px)" }}>
        <Toolbar>
          {props.button}
          <Typography variant="h6">Xlink Mobile</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

const Report = (props) => {
  const BackButton = (
    <IconButton style={{ color: "white" }} edge="start" href="#">
      <ArrowBackIos ></ArrowBackIos>
    </IconButton>)
  
    return (
      <React.Fragment>
        <Box bgcolor="white" width="100vw" height="100vh">
        <NavBar button={BackButton}></NavBar>
        <Pullable onRefresh={props.refreshReport}>
        <Box bgcolor="white">
          <Box p={0.5}>
          <Typography variant="body2" style={{ fontSize: 13 }} color="textSecondary" align="center">Last refresh: {props.refreshTime}</Typography>
          </Box>
          <Box p={2} pt={0}>
          
            <Typography variant="h4">{props.reportName}</Typography>
          </Box>
          {props.data.map(row => props.isLoading ? <SkeletonCowCard></SkeletonCowCard> : <AccordianCowCard data={row}></AccordianCowCard>)}
        </Box>
        </Pullable>
        </Box>
      </React.Fragment>
    )
}

const SkeletonCowCard = () => {
  return (
  <Accordion>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container justify="space-around" spacing={1}>
          <Grid item xs={2}>
          <Skeleton variant="circle" width={40} height={40} />
          </Grid>
          <Grid item xs={10}>
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave"/>
          </Grid>
        </Grid>
      </AccordionSummary>
    </Accordion>)
}

const CollectCowsReport = () => {

  const [data, setData] = useState([null, null, null, null, null, null, null]);
  const [isLoading, setLoading] = useState(true);
  const [time, setTime] = useState("never")

  var fetchNewData = () => {
    setLoading(true)
    fetch("https://xlink-worker.jcdeichmann.workers.dev/collect-cows")
      .then(res => res.json())
      .then(
        async (result) => {
          await new Promise(r => setTimeout(r, 300));
          var dd = prioritizeData(result)
          setData(dd);
          setLoading(false)
          setTime(moment().format('h:mm a'))

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error happened....")
        }
      )
  }

  useEffect(() => {
    fetchNewData()
  }, [])
  
  return (
   <Report reportName="Collect Cows" data={data} refreshTime={time} refreshReport={fetchNewData} isLoading = {isLoading}></Report>
  )
}

const Home = () => {
  return (
    <React.Fragment>
      <Box bgcolor="white" width="100vw" height="100vh">
      <NavBar></NavBar>
      <Box p={2}>
          <Typography variant="h4" >Report Lists</Typography>
        </Box>
        <List>
          <ListItem divider button component="a" href="#/collect-cows">
            <ListItemText primary="Collect Cows"></ListItemText>
          </ListItem>
          <ListItem divider button component="a" href="#/collect-cows">
            <ListItemText primary="Health List"></ListItemText>
          </ListItem>
        </List>
      </Box>

    </React.Fragment>)
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <HashRouter basename="xlink-viewer">
        <Switch>
          <Route path="/collect-cows/">
            <CollectCowsReport></CollectCowsReport>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider >
  );
}
