import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box, Button, Card, Chip, Container, Divider, Grid } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import FaceIcon from '@material-ui/icons/Face';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import moment from "moment";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const event = {
  name: "Code For Good 2020",
  description: "At a Code for Good hackathon, you'll collaborate with other coders to develop innovative technology solutions for nonprofit organizations. You'll also learn about starting a Technology career with us while being guided by the sharpest minds in our industry.",
  tags: [
    "epic",
    "animals",
    "exciting",
    "epic",
    "animals",
    "exciting",
  ],
  coordinator: "J.P. Morgan",
  coordinatorEmail: "jp@morgan.com",
  startDate: "2020-01-17",
  endDate: "2020-01-18",
}

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: 10,
      borderRadius: 20,
    },
    cardWrapper: {
      margin: 50,
      // marginRight: 100,
    },
    descCard: {
      margin: 50,
      backgroundColor: "#C9F3DE",
      borderRadius: 20,
    },
    title: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50,
      textAlign: "left",
      // color: "#f44336",
      fontWeight: "bold",
      fontSize: 50,
    },
    fields: {
      padding: 20,
      textAlign: "left",
    },
    button: {
      color: "white",
      borderRadius: 30,
      marginBottom: 20,
      marginTop: 20,
    },
    chip: {
      marginRight: 5,
      marginBottom: 5,
    },
    fieldTitle: {
      fontSize: 24,
      marginBottom: 10,
    },
    tagTitle: {
      fontSize: 24,
      marginBottom: 10,
    },
    mailingListTitle: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      marginBottom: 20,
    },
    statusChipCompleted: {
      marginLeft: 75,
      backgroundColor: "#64b5f6"
    },
    statusChipUncompleted: {
      marginLeft: 75,
      backgroundColor: "#ffb74d"
    },
  })
);

const tagColors = ["#ff1148", "#5b2b95", "#ffc300", "#00bdba"];


export const EventPage = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState([]);

  const handleGenerateVolunteers = () => {
    setData(rows);
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  }

  const handleGenerateEventReport = () => {
    console.log("Report generated !")
  }

  const handleSendEmails = () => {
    console.log("Emails sent !");
  }

  const handleSelectionChange = (selections) => {
    setSelection(selections);
  }

  let future = true;
  if (moment().isAfter(moment(event.endDate).format("YYYY-MM-DD"))) {
    future = false;
  }

  return (
    <div>
      <Container className={classes.title}>
        {event.name}
      </Container>
      <Box display="flex">
        {future ? <Chip
          className={classes.statusChipUncompleted}
          icon={<QueryBuilderIcon />}
          label="Pending"
          color="primary"
        /> :
        <Chip
          className={classes.statusChipCompleted}
          icon={<DoneOutlineIcon />}
          label="Completed"
          color="primary"
        />}
      </Box>
      <Card className={classes.descCard}>
        <Grid container className={classes.fields}>
          <Grid item xs={12} className={classes.fieldTitle}>
            <b>Description</b>
          </Grid>
          <Grid item xs={12}>
            {event.description}
          </Grid>
        </Grid>
      </Card>
      <Grid container className={classes.cardWrapper}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <Grid container className={classes.fields}>
              <Grid item xs={12} className={classes.tagTitle}>
                <b>Information</b>
              </Grid>
              <Grid item xs={6}>
                Coordinator
              </Grid>
              <Grid item xs={6}>
                {event.coordinator}
              </Grid>
              <Divider />
              <Grid item xs={6}>
                Coordinator email
              </Grid>
              <Grid item xs={6}>
                {event.coordinatorEmail}
              </Grid>
              <Divider />
              <Grid item xs={6}>
                Start Date
              </Grid>
              <Grid item xs={6}>
                {moment(event.startDate).format("YYYY-MM-DD")}
              </Grid>
              <Divider />
              <Grid item xs={6}>
                End Date
              </Grid>
              <Grid item xs={6}>
                {event.endDate}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card className={classes.card}>
            <Grid container className={classes.fields}>
              <Grid item xs={12} className={classes.tagTitle}>
                <b>Tags</b>
              </Grid>
              <Grid item xs={12}>
              {event.tags.map((tag, i) => (
                <Chip
                  className={classes.chip}
                  icon={<FaceIcon />}
                  label={tag}
                  color="primary"
                  style={{ color: "white", backgroundColor: tagColors[i%4] }}
                />
              ))}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      {future ? <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleGenerateVolunteers}
      >
        Generate Potential Volunteers
      </Button> :
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleGenerateEventReport}
      >
        Generate Event Report
      </Button>}
      {data.length !== 0 &&
        <>
          <Container className={classes.mailingListTitle}>
            Volunteer Mailing List
          </Container>
          <Card className={classes.card}>
            <div style={{ height: Math.min(data.length*65, 650), width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                onSelectionChange={handleSelectionChange}
                checkboxSelection
              />
            </div>
          </Card>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleSendEmails}
          >
            Send Emails
          </Button>
        </>
      }
    </div>
  )
}