import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, List, ListItem, ListItemText } from "@material-ui/core";
import { NavBar } from "./NavBar";

export const Home = () => {
  return (
    <React.Fragment>
      <Box bgcolor="white" width="100vw" height="100vh">
        <NavBar></NavBar>
        <Box p={2}>
          <Typography variant="h4">Report Lists</Typography>
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

    </React.Fragment>);
};
