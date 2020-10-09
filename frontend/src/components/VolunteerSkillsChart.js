import React from 'react';
import Paper from '@material-ui/core/Paper';

import { Chart, Series } from 'devextreme-react/chart';



// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
// } from '@devexpress/dx-react-chart-material-ui';

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
    <div>
      <Paper>
      <Chart id="skills" dataSource={parseData(props.data)}>
        <Series
          valueField="num"
          argumentField="skills"
          name="Volunteer Skills Distribution"
          type="bar"
          color="#ffaa66" />
      </Chart>
      </Paper>
    </div>
  )
}

