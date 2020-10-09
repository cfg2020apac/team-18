import * as React from "react";
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar'
import moment from "moment";
import style from "react-big-calendar/lib/css/react-big-calendar.css";

import { Card, Container } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const events = [
  {
      start: moment("2020-10-09").format("YYYY-MM-DD"),
      end: moment("2020-10-09").format("YYYY-MM-DD"),
      allDay: true,
      title: 'Training Workshop',
      description: 'This is a test description of an event',
      id: "event1"
  },
  {
      start: moment("2020-10-09").format("YYYY-MM-DD"),
      end: moment("2020-10-09").format("YYYY-MM-DD"),
      allDay: true,
      title: 'J.P. Morgan Code For Good',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
      id: "event2"
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: 50,
    },
    title: {
      margin: 50,
      textAlign: "left",
      // color: "#f44336",
      fontWeight: "bold",
      fontSize: 50,
    },
  })
);

const localizer = momentLocalizer(moment)

export const EventsPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSelectEvent = (event, e) => {
    history.push(`/events/${event.id}`)
  }

  return (
    <div>
      <Container className={classes.title}>
        Events
      </Container>
      <Card className={classes.card}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={style}
          onSelectEvent={handleSelectEvent}
        />
      </Card>
    </div>
  )
}
