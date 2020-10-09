import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, SeriesTemplate, CommonSeriesSettings, Title, Export } from 'devextreme-react/chart';


export const VolunteerEventChart = (props) => {
  return (
    <Chart
      id="event"
      palette="Bright"
      dataSource={props.data}
      title="Volunteer Attendance"
      >
      <CommonSeriesSettings
        argumentField="eventName"
        valueField="volunteerAttendance"
        type="bar"
        ignoreEmptyPoints={true}
      />
      <SeriesTemplate nameField="eventName" />
      <Title
       
        subtitle="as of October 2020"
      />
      <Export enabled = {true}/>
    </Chart>
    
  )
}

