
import React, {useState} from 'react';
import {Paper, Button} from '@material-ui/core';

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import {VolunteerEventChart} from '../components/VolunteerEventChart'
import {VolunteerGenderChart} from '../components/VolunteerGenderChart'
import {VolunteerAgeChart} from '../components/VolunteerAgeChart'
import {VolunteerSkillsChart} from '../components/VolunteerSkillsChart'

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



export const ReportsPage = () => {
  const [openGenderPie, setOpenGenderPie] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [openAge, setOpenAge] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  return (<div>
    <Button onClick={()=>setOpenEvent(!openEvent)}>Open Event</Button>
    {openEvent && 
      <VolunteerEventChart data={eventData}></VolunteerEventChart>
    }
    <Button onClick={()=>setOpenGenderPie(!openGenderPie)}>Open Pie</Button>
    {openGenderPie && 
      <VolunteerGenderChart data={volunteerData}></VolunteerGenderChart>
    }
    <Button onClick={()=>setOpenAge(!openAge)}>Open Age</Button>
    {openAge && 
      <VolunteerAgeChart data={volunteerData}></VolunteerAgeChart>
    }
    <Button onClick={()=>setOpenSkills(!openSkills)}>Open Skills</Button>
    {openSkills && 
      <VolunteerSkillsChart data={volunteerData}></VolunteerSkillsChart>
    }
  </div>)
}



