import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { id: 'd1', eventName: 'Elder Academies', volunteerAttendance: 23 },
//   { id: 'd2', eventName: 'Blood Donation Drive', volunteerAttendance: 6 },
//   { id: 'd3', eventName: '5k Marathon', volunteerAttendance: 17 },
//   { id: 'd4', eventName: 'Teach Young', volunteerAttendance: 12 },
//   { id: 'd4', eventName: 'Lupus Awareness', volunteerAttendance: 5 }
// ];


export const VolunteerEventChart = (props) => {
  return (
    <div>
      <Paper>
        <Chart
          data={props.data}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="volunteerAttendance"
            argumentField="eventName"
          />
          <Title text="Volunteer Attendance by Event" />
          <Animation />
        </Chart>
      </Paper>
    </div>
  )
}


