import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box, Button, Card, Chip, Container, Grid } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import FaceIcon from '@material-ui/icons/Face';

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

const tags = [
  "epic",
  "animals",
  "exciting",
]

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: 50,
    },
    title: {
      margin: 50,
      textAlign: "center",
      color: "#f44336",
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
    },
    chip: {
      marginRight: 5,
    }
  })
);


export const EventPage = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const handleGenerateVolunteers = () => {
    setData(rows);
  }

  const handleSendEmails = () => {
    console.log("Emails sent !");
  }

  return (
    <div>
      <Container className={classes.title}>
        Event 1
      </Container>
      <Card className={classes.card}>
        <Grid container className={classes.fields}>
          <Grid item xs={2}>
            <b>Description :</b>
          </Grid>
          <Grid item xs={10}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
          </Grid>
        </Grid>
      </Card>
      <Card className={classes.card}>
        <Grid container className={classes.fields}>
          <Grid item xs={2}>
            <b>Tags :</b>
          </Grid>
          <Grid item xs={10}>
          {tags.map((tag) => (
            <Chip
              className={classes.chip}
              icon={<FaceIcon />}
              label={tag}
              color="primary"
            />
          ))}
          </Grid>
        </Grid>
      </Card>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleGenerateVolunteers}
      >
        Generate Potential Volunteers
      </Button>
      {data.length !== 0 &&
        <>
          <Card className={classes.card}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
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