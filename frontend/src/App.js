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
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00C463",
    },
    secondary: {
      main: "#f44336",
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

const renderEventPage = (props) => {
  return <EventPage {...props}/>
}


export const App = () => {

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact={true} path="/home" render={renderHomePage} />
            <Route exact={true} path="/events" render={renderEventsPage} />
            <Route exact={true} path="/reports" render={renderReportsPage} />
            <Route exact={true} path="/events/:eventId" render={renderEventPage} />
            <Redirect exact={true} from="/" to="/home" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
