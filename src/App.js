import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, AppBar, Box, CardActionArea, Divider, TextField, Toolbar, ThemeProvider, Icon, IconButton, CssBaseline, List, ListItem, ListItemText } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { AccordianCowCard } from "./components/AccordianCowCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

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
        <Box bgcolor="white">
          <Box p={2}>
            <Typography variant="h4">{props.reportName}</Typography>
          </Box>
          {props.data.map(row => <AccordianCowCard data={row}></AccordianCowCard>)}
        </Box>
        </Box>
      </React.Fragment>
    )
}

const CollectCowsReport = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://xlink-worker.jcdeichmann.workers.dev/collect-cows")
      .then(res => res.json())
      .then(
        (result) => {
          var dd = prioritizeData(result)
      
          setData(dd);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error happened....")
        }
      )
  }, [])
  
  return (
   <Report reportName="Collect Cows" data={data}></Report>
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
