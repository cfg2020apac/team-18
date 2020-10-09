import React from "react";
import Logo from "../handsonhk_logo.png";

import { MuiThemeProvider, createMuiTheme, makeStyles, createStyles } from "@material-ui/core/styles";
import { CssBaseline, Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core"; 
import DataUsageIcon from '@material-ui/icons/DataUsage';
import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AssessmentIcon from '@material-ui/icons/Assessment';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    title: {
      fontSize: 36,
      textAlign: "center",
      margin: 15,
      marginTop: 50,
      // marginBottom: 50,
    },
    list: {
      marginTop: 50,
    },
    listItem: {
      paddingLeft: 30,
    },
  })
);

export const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSidebarClick = (route) => (event) => {
    history.push(`/${route}`);
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <div className={classes.title}>
          <img style={{ height: 100, cursor: "pointer" }} src={Logo} onClick={handleSidebarClick("")} />
        </div>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button key="events" className={classes.listItem} onClick={handleSidebarClick("events")}>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button key="reports" className={classes.listItem} onClick={handleSidebarClick("reports")}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button key="analytics" className={classes.listItem} onClick={handleSidebarClick("import_data")}>
          <ListItemIcon>
            <DataUsageIcon />
          </ListItemIcon>
          <ListItemText primary="Import Data" />
        </ListItem>
        <ListItem button key="voluteers" className={classes.listItem}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Volunteers" />
        </ListItem>
      </List>
    </Drawer>
  )
}