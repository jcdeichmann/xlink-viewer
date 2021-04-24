import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Grid, TextField } from "@material-ui/core";

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
  list = list.slice(0, expanded ? list.length : 3)


  return (
    <Card>
      <CardActionArea onClick={() => setExpanded(!expanded)}>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
        </Typography>
          <Grid container spacing={2}>
            {list.map(ele =>
              <Grid item xs={4}>
                <Data label={ele} data={props.data[ele]}></Data>
                </Grid>
              )}
          </Grid>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default function App() {
  // Object.keys(cowData).forEach(key =>
  //   console.log(key)
  // )


  return (
    <div>
      <CowCard data={cowData}></CowCard>
      <CowCard data={cowData}></CowCard>
      <CowCard data={cowData}></CowCard>
      <CowCard data={cowData}></CowCard>
      <CowCard data={cowData}></CowCard>
    </div>

  );
}
