import React from 'react';
import Paper from '@material-ui/core/Paper';

import Bullet, { Tooltip } from 'devextreme-react/bullet';
import { Title } from 'devextreme-react/chart';

export const EventBulletChart = (props) => {
    return(
        <div style={{width: "400px"}}>
            <h2>Volunteer Target</h2>
            <Paper>
                <Bullet startScaleValue={0} value={props.value} target = {props.target} color = {props.color}>
                    <Tooltip customizeTooltip={tooltip}/>
                </Bullet>
            </Paper>
        </div>
    )
}

const tooltip = (arg)=>{
    return {
        text: `${arg.value} volunteers signed up <br>${arg.target} volunteers requested`
    }
}