import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3-shape';
import { interpolateLab } from 'd3-interpolate';
import {Grid, Row, Col} from 'react-bootstrap';
import * as d3 from 'd3';

class PieChart extends React.Component {

    componentDidMount(){
        const chartObject = d3.select(ReactDOM.findDOMNode(this.refs.chart));
        this.drawPieChart(chartObject);
    }
    drawPieChart(chart){

        const data = [2, 2, 4, 8, 16, 32];
        // const arcs = pie()(data);
        const arcs = d3.pie()
            .value(function(d) { return d })
            (data);
        const arcGen = arc()
            .innerRadius(5)
            .outerRadius(100);

        const col = interpolateLab('darkgray', 'blue');
        arcs.map((a, i) => {
            const ratio = Math.abs(a.startAngle - a.endAngle) / 2 / Math.PI;
            return (
            chart.append('path')
                .attr('key', 'arc'+i)
                .attr('stroke', 'white')
                .attr('fill', col(ratio))
                .attr('d', arcGen(a))
            )
        });

    }
    render() {
        const margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        const transform = 'translate(450, 200)';

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

export default PieChart;
