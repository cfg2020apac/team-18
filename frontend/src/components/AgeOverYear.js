import React from 'react';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Grid
} from 'devextreme-react/chart';
import { Paper } from '@material-ui/core';


export const TotalOverYears = (props) => {
    return (<div>
        <React.Fragment>
        <Chart
          palette="Bright"
          dataSource={props.data}
        >
          <CommonSeriesSettings
            argumentField="year"
            type="line"
          />
          <Series key="total" valueField="total" name="Total" />
          <Margin bottom={20} />
          <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode="crossLabels"
          >
            <Grid visible={true} />
          </ArgumentAxis>
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            itemTextPosition="bottom"
          />
          <Export enabled={true} />
          <Title text="Number of Volunteers">
            <Subtitle text="in past 5 years" />
          </Title>
          <Tooltip enabled={true} />
        </Chart>
      </React.Fragment>
    </div>)
}