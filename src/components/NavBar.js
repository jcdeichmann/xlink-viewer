import React from "react";
import Typography from "@material-ui/core/Typography";
import { AppBar, Box, Toolbar } from "@material-ui/core";

export const NavBar = (props) => {
  return (
    <React.Fragment>
      <Box className="testing" style={{
        position: "fixed",
        width: "100%",
        height: "300px",
        top: "-250px",
        zIndex: "10",
        backgroundColor: "#c30a13"
      }}></Box>
      <AppBar position="sticky" style={{ clipPath: "inset(0px -10px -10px -10px)" }}>
        <Toolbar>
          {props.button}
          <Typography variant="h6">Xlink Mobile</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
