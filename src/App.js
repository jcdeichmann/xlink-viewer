import React from "react";
import { createMuiTheme, CardActionArea, Divider, TextField, ThemeProvider, Icon, CssBaseline } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import { Home } from "./components/Home";
import { CollectCowsReport } from "./components/CollectCowsReport";


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
