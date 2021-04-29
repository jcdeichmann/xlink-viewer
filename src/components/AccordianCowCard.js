import React, { Component, useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Chip, Grid, Accordion, Typography, AccordionSummary, AccordionDetails } from "@material-ui/core";

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

export var AccordianCowCard = (props) => {
  var list = Object.keys(props.data);
  var mainItem = list[0];
  var toplist = list.slice(1, 4);
  var botlist = list.slice(4);

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

          {toplist.map(ele => <Grid item>
            <Data label={ele} data={props.data[ele]}></Data>
          </Grid>
          )}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {botlist.map(ele => <Grid item xs={4} xm={3}>
            <Data label={ele} data={props.data[ele]}></Data>
          </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
