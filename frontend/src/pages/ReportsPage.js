
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

const data = [
  { id: 'd1', eventName: 'Elder Academy', volunteerAttendance: 23 },
  { id: 'd2', eventName: 'Blood Donation Drive', volunteerAttendance: 6 },
  { id: 'd3', eventName: '5k Marathon', volunteerAttendance: 17 },
  { id: 'd4', eventName: 'Teach Young', volunteerAttendance: 12 },
  { id: 'd4', eventName: 'Lupus Awareness', volunteerAttendance: 5 }
];


export const ReportsPage = () => {
  const [openBar, setOpenBar] = useState(false);
  return (<div>
    <Button onClick={()=>setOpenBar(!openBar)}>Open Bar</Button>
    {openBar && 
      <VolunteerEventChart data={data}></VolunteerEventChart>
    }
  </div>)
}


