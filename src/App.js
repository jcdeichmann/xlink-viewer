import React from "react";
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

const CollectCowsReport = () => {
  const BackButton = (
  <IconButton style={{ color: "white" }} edge="start" href="#">
    <ArrowBackIos ></ArrowBackIos>
  </IconButton>)

  return (
    <React.Fragment>
      <NavBar button={BackButton}></NavBar>
      <Box bgcolor="white">
        <Box p={2}>
          <Typography variant="h4" >Collect Cows</Typography>
        </Box>

        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData2}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData2}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData2}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
        <AccordianCowCard data={cowData}></AccordianCowCard>
      </Box>
    </React.Fragment>
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
