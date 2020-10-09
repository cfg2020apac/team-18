import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00C463",
    },
    secondary: {
      main: "#F7DDCE",
    },
  },
});

const renderHomePage = (props) => {
  return <HomePage {...props} />;
};

const renderEventsPage = (props) => {
  return <EventsPage {...props} />;
};

const renderReportsPage = (props) => {
  return <ReportsPage {...props} />;
};


export const App = () => {

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact={true} path="/home" render={renderHomePage} />
            <Route exact={true} path="/events" render={renderEventsPage} />
            <Route exact={true} path="/reports" render={renderReportsPage} />
            <Redirect exact={true} from="/" to="/home" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
