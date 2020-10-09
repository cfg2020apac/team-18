import React from 'react';
import Paper from '@material-ui/core/Paper';

import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip } from 'devextreme-react/chart';

const parseData = (data) => {
    let ageRange = {"15to20": {count:0}, "20to30": {count:0}, "30to40": {count:0}, "40to50": {count:0}, "50to60":{count:0}, "60+": {count:0}}
    let listOfInterests = []
    for (let volunteer of data){
        let ageRangeToSet;
        if (volunteer.age <=20){
            ageRangeToSet = "15to20"
        }
        else if (volunteer.age <=30) {
            ageRangeToSet = "20to30"        }
        else if (volunteer.age <=40){
            ageRangeToSet = "30to40"        }
        else if (volunteer.age <=50){
            ageRangeToSet = "40to50"        }
        else if (volunteer.age <=60){
            ageRangeToSet = "50to60"        }
        else{
            ageRangeToSet = "60+"
        }
        ageRange[ageRangeToSet].count +=1
        for(let interest of volunteer.interests){
            if(listOfInterests.indexOf(interest)===-1){
                listOfInterests.push(interest)
            }
            if(ageRange[ageRangeToSet][interest]){
                ageRange[ageRangeToSet][interest] += 1
            } else {
                ageRange[ageRangeToSet][interest] = 1
            }
        }
    }
    console.log(listOfInterests)
    console.log(ageRange);
    const chartList = ["15to20", "20to30", "30to40", "40to50", "50to60", "60+"].map((val)=>{
        let returnJSON = {
            ageRange: val,
            num: ageRange[val].count
        }
        for(let interest of listOfInterests){
            returnJSON[interest] = ageRange[val][interest] ? ageRange[val][interest] : 0 
        }
        return returnJSON
    })
    console.log(chartList)
    return {
        chartList,
    }
}

export const VolunteerAgeChart = (props) => {
    const {chartList} = parseData(props.data)
    console.log(chartList)
  return (
    <div>
      <Paper>
      <Chart id="age" dataSource={chartList} title = "Volunteer Age and Interests">
        <CommonSeriesSettings argumentField="ageRange" type="stackedBar"/>
        <Series
          valueField="food"
          name="food"
        />
        <Series
          valueField="animals"
          name="animals"
        />
        <Series
          valueField="elderly"
          name="elderly"
        />
        <Series
          valueField="homeless"
          name="homeless"
        />
        <ValueAxis position="left">
            <Title text="Number of volunteers"></Title>
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />
        <Export enabled={true} />
      </Chart>
      </Paper>
    </div>
  )
}

