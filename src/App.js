import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createMuiTheme, AppBar, Box, CardActionArea, Chip, Divider, Grid, TextField, Toolbar, ThemeProvider, Icon, Accordion, AccordionSummary, AccordionDetails, IconButton, CssBaseline } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";

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

class Data extends Component {
  render() {
    return (
      <div>
        <Typography variant="caption" color="textSecondary">
          {this.props.label}
        </Typography>
        <Typography style={{ fontSize: 16 }} variant="body1">
          {this.props.data}
        </Typography>
      </div>
    );
  }
}

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

var AccordianCowCard = (props) => {
  var list = Object.keys(props.data)
  var mainItem = list[0]
  var toplist = list.slice(1, 4)
  var botlist = list.slice(4)

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container justify="space-around" spacing={1}>
          <Grid item>
            <Chip color="primary" label={props.data[mainItem]}></Chip>
          </Grid>

          {toplist.map(ele =>
            <Grid item>
              <Data label={ele} data={props.data[ele]}></Data>
            </Grid>
          )}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {botlist.map(ele =>
            <Grid item xs={4} xm={3}>
              <Data label={ele} data={props.data[ele]}></Data>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Box className="testing" style={{
          position: "fixed",
          width: "100%",
          height: "300px",
          top: "-250px",
          zIndex: "10",
          backgroundColor: "#c30a13"}} ></Box>
      <React.Fragment className={{ flexGrow: "2" }}>
      <AppBar position="sticky" style={{clipPath: "inset(0px -10px -10px -10px)"}}>
        <Toolbar>
          <IconButton style={{ color: "white" }} edge="start">
            <ArrowBackIos ></ArrowBackIos>
          </IconButton>
          <Typography variant="h6">Xlink Mobile</Typography>
        </Toolbar>
      </AppBar>
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
    </ThemeProvider >

  );
}
