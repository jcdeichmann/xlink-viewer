import React from "react";
import { Accordion, AccordionSummary, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const SkeletonCowCard = () => {
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
            <Skeleton variant="text" animation="wave" />
          </Grid>
        </Grid>
      </AccordionSummary>
    </Accordion>);
};
