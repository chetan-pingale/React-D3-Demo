import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {Grid, Row, Col} from 'react-bootstrap';

class ScatterChartDemo extends React.Component {

    render() {
        const data = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
            {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
            {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]
        return(
            <Grid>
                <Row>
                    <Col md={3}>
                        <h3>Simple Scatter Chart</h3>
                    </Col>
                    <Col md={9}>
                        <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                            <XAxis dataKey={'x'} name='stature' unit='cm'/>
                            <YAxis dataKey={'y'} name='weight' unit='kg'/>
                            <Scatter name='A school' data={data} fill='#8884d8'/>
                            <CartesianGrid />
                            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                        </ScatterChart>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ScatterChartDemo;
