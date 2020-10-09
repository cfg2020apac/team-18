import React, { useEffect, useState } from "react";
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar';
import style from "react-big-calendar/lib/css/react-big-calendar.css";

import { Card, Container } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import EventsDataService from "../services/events.services";
import moment from "moment";

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
  const [events, setEvents] = useState([]);

  const handleSelectEvent = (event, e) => {
    history.push(`/events/${event.id}`)
  }

  const onDataChange = (items) => {
    let events = []
    items.forEach((item) => {
      const id = item.id
      const data = item.data()
      events.push({
        id: id,
        start: moment.unix(data.eventStartDate.seconds).format("YYYY-MM-DD"),
        end: moment.unix(data.eventEndDate.seconds).format("YYYY-MM-DD"),
        title: data.eventName,
        coordinator: data.coordinator,
        coordinatorEmail: data.coordinatorEmail,
        allDay: true,
      })
    })
    setEvents(events);
  }

  useEffect(() => {
    EventsDataService.getAll().orderBy("eventName", "asc").onSnapshot(onDataChange)
  }, [])

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
