import React from 'react';
import Paper from '@material-ui/core/Paper';

import { Chart, Series } from 'devextreme-react/chart';

const parseData = (data) => {
    let ageRange = {"15to20": 0, "20to30": 0, "30to40": 0, "40to50": 0, "50to60":0}
    for (let volunteer of data){
        if (volunteer.age <=20){
            ageRange["15to20"]+=1;
        }
        else if (volunteer.age <=30) {
            ageRange["20to30"]+=1;
        }
        else if (volunteer.age <=40){
            ageRange["30to40"]+=1;
        }
        else if (volunteer.age <=50){
            ageRange["40to50"]+=1;
        }
        else if (volunteer.age <=60){
            ageRange["50to60"]+=1;
        }
        
    }
    
    console.log(ageRange);
    return ["15to20", "20to30", "30to40", "40to50", "50to60" ].map((val)=>{
        return {
            ageRange: val,
            num: ageRange[val]
        }
    })
}


export const VolunteerAgeChart = (props) => {
  return (
    <div>
      <Paper>
      <Chart id="skills" dataSource={parseData(props.data)}>
        <Series
          valueField="num"
          argumentField="ageRange"
          name="Volunteer Age Distribution"
          type="bar"
          color="#ffaa55" />
      </Chart>
      </Paper>
    </div>
  )
}

