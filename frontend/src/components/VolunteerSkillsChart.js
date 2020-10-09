import React from 'react';
import Paper from '@material-ui/core/Paper';

import { Chart, SeriesTemplate, CommonSeriesSettings, Title, Export } from 'devextreme-react/chart';


const parseData = (data) => {
    let skills = {"IT": 0, "Finance": 0, "Teaching": 0, "Art": 0}
    for (let volunteer of data){
        for (let skill of volunteer.skills){
            if (skill=="IT"){
                skills["IT"]+=1;
            }
            else if (skill=="Finance"){
                skills["Finance"]+=1;
            }
            else if (skill=="Teaching"){
                skills["Teaching"]+=1;
            }
            else if (skill=="Art"){
                skills["Art"]+=1;
            }
        }

    }
    
    return ["IT", "Finance", "Teaching", "Art"].map((val)=>{
        return {
            skills: val,
            num: skills[val]
        }
    })
}


export const VolunteerSkillsChart = (props) => {
  return (
    <Chart
    id="event"
    palette="Bright"
    dataSource={parseData(props.data)}
    title="Volunteer Distribution by Skills"
    >
    <CommonSeriesSettings
      argumentField="skills"
      valueField="num"
      type="bar"
      ignoreEmptyPoints={true}
    />
    <SeriesTemplate nameField="skills" />
    <Title
      subtitle="as of October 2020"
    />
    <Export enabled = {true}/>
  </Chart>
   
  )
}

