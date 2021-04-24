import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Divider, Grid, TextField } from "@material-ui/core";

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
  "Lactationd Days": "228",
  "Interval Exceeded": "197.2",
  "Away": "21:20",
  "Milk Yield Expected": "20.4"
}

var CowCard = (props) => {
  const [expanded, setExpanded] = useState(false)
  var list = Object.keys(props.data)
  var mainItem = list[0]
  list = list.slice(1, expanded ? list.length : 4)


  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => setExpanded(!expanded)}>
        <CardContent>
          <Typography variant="h5"
            color="textPrimary"
            gutterBottom
          >
            {props.data[mainItem]}
          </Typography>
          <Divider></Divider>
          <Grid container spacing={2}>
            {list.map(ele =>
              <Grid item xs={4} xm={3}>
                <Data label={ele} data={props.data[ele]}></Data>
              </Grid>
            )}
          </Grid>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

var FullCowCard = (props) => {
  var list = Object.keys(props.data)
  var mainItem = list[0]
  list = list.slice(1, 4)

  return (
    <CardContent>
      <Typography variant="h5"
            color="textPrimary"
            gutterBottom
          >
            {props.data[mainItem]}
          </Typography>
          <Divider></Divider>
          <Grid container spacing={2}>
            {list.map(ele =>
              <Grid item xs={4} xm={3}>
                <Data label={ele} data={props.data[ele]}></Data>
              </Grid>
            )}
          </Grid>
    </CardContent>
  )
}

var SlimCowCard = (props) => {
  var list = Object.keys(props.data)
  var mainItem = list[0]
  list = list.slice(1, 4)

  return (
    <CardContent>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h5"
            color="textPrimary"
            gutterBottom>
            {props.data[mainItem]}
          </Typography>
        </Grid>
        {list.map(ele =>
          <Grid item xs={3}>
            <Data label={ele} data={props.data[ele]}></Data>
          </Grid>
        )}
      </Grid>
    </CardContent>
  )
}

export default function App() {
  // Object.keys(cowData).forEach(key =>
  //   console.log(key)
  // )


  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <CowCard data={cowData}></CowCard>
        </Grid>
        <Grid item xs={12}>
          <CowCard data={cowData}></CowCard>
        </Grid>
        <Grid item xs={12}>
          <CowCard data={cowData}></CowCard>
        </Grid>
        <Grid item xs={12}>
          <CowCard data={cowData}></CowCard>
        </Grid>
      </Grid>

    </div>

  );
}
