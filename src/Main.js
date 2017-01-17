import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import LineChartDemo from './LineChartDemo';
import DonutChartDemo from './DonutChartDemo';
import ScatterChartDemo from './ScatterChartDemo';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childComponent: null,
        };
    }
    getScatterChart(){
        const scatterChart = <ScatterChartDemo/>;
        this.setState({childComponent: scatterChart});
    }
    getDonutChart(){
        const donutChart = <DonutChartDemo/>;
        this.setState({childComponent: donutChart});
    }
    getLineChart(){
        const LineChart = <LineChartDemo/>;
        this.setState({childComponent: LineChart});
    }
    render() {
        const children = this.state.childComponent || <LineChartDemo/>;
        return (
            <Grid>
                <Row>
                    <Col md={3} >
                        <h3><a onClick={this.getLineChart.bind(this)}>Line Chart</a></h3>
                    </Col>
                    <Col md={3} >
                        <h3><a onClick={this.getDonutChart.bind(this)}>Donut Chart</a></h3>
                    </Col>
                    <Col md={3} >
                        <h3><a onClick={this.getScatterChart.bind(this)}>Scatter Chart</a></h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <h3>{children}</h3>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Main;