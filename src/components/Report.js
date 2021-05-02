import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, IconButton } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { AccordianCowCard } from "./AccordianCowCard";
import Pullable from 'react-pullable';
import { NavBar } from "./NavBar";
import { SkeletonCowCard } from "./SkeletonCowCard";

export const Report = (props) => {
  const BackButton = (
    <IconButton style={{ color: "white" }} edge="start" href="#">
      <ArrowBackIos></ArrowBackIos>
    </IconButton>);

  return (
    <React.Fragment>
      <Box bgcolor="white" width="100vw" height="100vh" style={{
        position: "fixed",
        zIndex: "-1",
      }}></Box>
        <NavBar button={BackButton}></NavBar>
        <Pullable onRefresh={props.refreshReport}>
          <Box bgcolor="white">

            <Box p={2}>

              <Typography variant="h4">{props.reportName}</Typography>
            </Box>
            {props.data.map(row => props.isLoading ? <SkeletonCowCard></SkeletonCowCard> : <AccordianCowCard data={row}></AccordianCowCard>)}
            <Box p={2}>
            <Typography variant="body2" style={{ fontSize: 13 }} color="textSecondary" align="center">Data last fetched: {props.refreshTime}</Typography>
          </Box>
          </Box>
    
        </Pullable>
      
    </React.Fragment>
  );
};
