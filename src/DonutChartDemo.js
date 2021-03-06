import React from 'react';
import {PieChart, Pie, Tooltip} from 'recharts';
import {Grid, Row, Col} from 'react-bootstrap';

class DonutChartDemo extends React.Component {

    render() {
        const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
            {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
            {name: 'Group E', value: 278}, {name: 'Group F', value: 189}];

        const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
            {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
            {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
        return(
            <Grid>
                <Row>
                    <Col md={3}>
                        <h3>Simple Donut Chart</h3>
                    </Col>
                    <Col md={9}>
                        <PieChart width={800} height={400}>
                            <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                            <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
                            <Tooltip/>
                        </PieChart>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default DonutChartDemo;
