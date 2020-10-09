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
    let genderNums = {}
    let listOfGender = []
    for(let volunteer of data){
        if(genderNums[volunteer.gender]){
            genderNums[volunteer.gender]+=1
        } else {
            genderNums[volunteer.gender] = 1
            listOfGender.push(volunteer.gender)
        }
    }
    return listOfGender.map((val)=>{
        return {
            gender: val,
            num: genderNums[val]
        }
    })
}

export const VolunteerGenderChart = (props) => {
        return (
            <div>
              <Paper>
                <PieChart id="gender" dataSource={parseData(props.data)} palette="bright" title="Volunteer Gender Demographics" >
                    <Series argumentField="gender" valueField="num">
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



