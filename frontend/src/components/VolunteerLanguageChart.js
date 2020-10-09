import React from 'react';
import Paper from '@material-ui/core/Paper';


import PieChart, { Connector, Export, Series, Label, Size } from 'devextreme-react/pie-chart'

import { Animation } from '@devexpress/dx-react-chart';

// const data = [
//   { id: 'd1', eventName: 'Elder Academies', volunteerAttendance: 23 },
//   { id: 'd2', eventName: 'Blood Donation Drive', volunteerAttendance: 6 },
//   { id: 'd3', eventName: '5k Marathon', volunteerAttendance: 17 },
//   { id: 'd4', eventName: 'Teach Young', volunteerAttendance: 12 },
//   { id: 'd4', eventName: 'Lupus Awareness', volunteerAttendance: 5 }
// ];
const parseData = (data) => {
    let languageNums = {}
    let listOfLanguage = []
    for(let volunteer of data){
        if(languageNums[volunteer.language]){
            languageNums[volunteer.language]+=1
        } else {
            languageNums[volunteer.language] = 1
            listOfLanguage.push(volunteer.language)
        }
    }
    return listOfLanguage.map((val)=>{
        return {
            gender: val,
            num: languageNums[val]
        }
    })
}

export const VolunteerLanguageChart = (props) => {
        return (
            <div>
              <Paper>
                <PieChart id="language" dataSource={parseData(props.data)} palette="bright" title="Volunteer Language Demographics" >
                    <Series argumentField="language" valueField="num">
                        <Label visible={true}>
                            <Connector visible={true} width={1}/>
                        </Label>

                    </Series>
                    <Size width={1000}></Size>
                    <Export enabled={true}/>
                </PieChart>
              </Paper>
            </div>
          )
    }


