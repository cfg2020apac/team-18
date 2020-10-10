
import React, {useState} from 'react';
import {Paper, Button} from '@material-ui/core';

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Box, Card, Container, Divider } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

import { Animation } from '@devexpress/dx-react-chart';
import {VolunteerEventChart} from '../components/VolunteerEventChart'
import {VolunteerGenderChart} from '../components/VolunteerGenderChart'
import {VolunteerAgeChart} from '../components/VolunteerAgeChart'
import {VolunteerSkillsChart} from '../components/VolunteerSkillsChart'
import {VolunteerLanguageChart} from '../components/VolunteerLanguageChart'
import {TotalOverYears} from '../components/AgeOverYear'
const eventData = [
  { id: 'd1', eventName: 'Elder Academy', volunteerAttendance: 23},
  { id: 'd2', eventName: 'Blood Donation Drive', volunteerAttendance: 6 },
  { id: 'd3', eventName: '5k Marathon', volunteerAttendance: 17 },
  { id: 'd4', eventName: 'Teach Young', volunteerAttendance: 12 },
  { id: 'd4', eventName: 'Lupus Awareness', volunteerAttendance: 5 }
];

const volunteerData = [
  {name: "Amy Chan", email: "amyc@gmail.com", age: 17, gender: "female", language: "Chinese", skills: ["IT"], interests: ["food", "animals"] },
  {name: "John Stone", email: "js@gmail.com", age: 27, gender: "male", language: "English", skills: ["IT", "Finance"], interests: ["food", "elderly"] },
  {name: "Emily Wong", email: "ew@gmail.com", age: 42, gender: "other", language: "Both", skills: ["Teaching"], interests: ["homeless","animals"] },
  {name: "Jane Doe", email: "jd@gmail.com", age: 19, gender: "non-binary", language: "Chinese", skills: ["Finance", "Art"], interests: ["food", "homeless"] },
  {name: "Jack Frost", email: "jf@gmail.com", age: 45, gender: "male", language: "Both", skills: ["IT"], interests: ["food", "animals"] },
]

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
    box: {
      outline: "2px dotted gray",
      padding: 5,
      marginBottom: 10,
    }
  })
);



export const ReportsPage = () => {
  const [openGenderPie, setOpenGenderPie] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openNum, setOpenNum] = useState(false);


  const classes = useStyles();
  return (
    <div>
      <Container className={classes.title}>
        Annual Reports
      </Container>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenEvent(!openEvent)}>Event Participation</Button>
        {openEvent && 
          <VolunteerEventChart data={eventData}></VolunteerEventChart>
        }
      </Box>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenGenderPie(!openGenderPie)}>Volunteer Gender Ratio</Button>
        {openGenderPie && 
          <VolunteerGenderChart data={volunteerData}></VolunteerGenderChart>
        }
      </Box>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenAge(!openAge)}>View Volunteer Age and Interests</Button>
        {openAge && 
          <VolunteerAgeChart data={volunteerData}></VolunteerAgeChart>
        }
      </Box>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenLang(!openLang)}>Volunteer Languages</Button>
        {openLang && 
          <VolunteerLanguageChart data={volunteerData}></VolunteerLanguageChart>
        }
      </Box>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenSkills(!openSkills)}>Volunteer Skills</Button>
        {openSkills && 
          <VolunteerSkillsChart data={volunteerData}></VolunteerSkillsChart>
        }
      </Box>
      <Box className={classes.box}>
        <Button onClick={()=>setOpenNum(!openNum)}>Volunteer Trend</Button>
        {openNum && 
          <TotalOverYears data={[{year:2015,total:5000}, {year:2016, total: 5500}, {year:2017, total: 6500},{year:2018, total: 8500},{year:2019, total: 10000}]}></TotalOverYears>
        }
      </Box>
    </div>
  )
}



