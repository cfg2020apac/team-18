import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { Sidebar } from "./components/Sidebar";
import { MuiThemeProvider, createMuiTheme, makeStyles, createStyles } from "@material-ui/core/styles";
import { CssBaseline, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"; 
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00C463",
    },
    secondary: {
      main: "#f44336",
    },
  },
  shadows: ["none"],
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

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export const App = () => {
  const classes = useStyles();

  return (
    <div className="App" style={{ display: "flex" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <div className={classes.content}>
          <Router>
            <Sidebar />
            <Switch>
              <Route exact={true} path="/home" render={renderHomePage} />
              <Route exact={true} path="/events" render={renderEventsPage} />
              <Route exact={true} path="/reports" render={renderReportsPage} />
              <Route exact={true} path="/events/:eventId" render={renderEventPage} />
              <Redirect exact={true} from="/" to="/home" />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
