import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, Series } from 'devextreme-react/chart';


export const VolunteerEventChart = (props) => {
  return (
    <div>
      <Paper>
      <Chart id="skills" dataSource={props.data}>
        <Series
          valueField="volunteerAttendance"
          argumentField="eventName"
          name="Volunteer Attendance by Event"
          type="bar"
          color="#ffaa44" />
      </Chart>
      </Paper>
    </div>
  )
}
