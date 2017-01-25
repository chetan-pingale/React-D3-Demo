import React from 'react';
import ReactDOM from 'react-dom';
import { curveBasisClosed } from 'd3-shape';
import {Grid, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';

class LineChart extends React.Component {

    componentDidMount(){
        const chartObject = d3.select(ReactDOM.findDOMNode(this.refs.chart));
        this.drawLine(chartObject);
    }
    drawLine(chart){
        const line = d3.line()
            .x(d => d.x)
            .y(d => d.y)
            .curve(curveBasisClosed);

        const size = 300;
        const random = () => 300 * Math.random();

        const data = [{
            x: 0,
            y: random(),
        }, {
            x: random(),
            y: 0,
        }, {
            x: size,
            y: random(),
        }, {
            x: random(),
            y: size,
        },
        ];
        chart.append('path')
            .attr('class', 'line')
            .attr('stroke', '#0284ff')
            .attr('fill', 'none')
            .attr('d', line(data));
    }
    render() {
        const margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;
        const transform = 'translate(250, 50)';
        return (
            <Grid fluid={true}>
                <Row>
                    <Col col md={12}>
                        <svg className="chart" ref="svg" width={width} height={height}>
                            <g ref="chart" transform={transform}/>
                        </svg>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default LineChart;
