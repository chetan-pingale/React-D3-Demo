import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import LineChart from './LineChart';
import PieChart from './PieChart';
class Charts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            childComponent: null,
        };
        this.getLineChart = this.getLineChart.bind(this);
        this.getPieChart = this.getPieChart.bind(this);
    }
    getLineChart(){
        const chart = <LineChart/>;
        this.setState({childComponent: chart});
    }
    getPieChart(){
        const chart = <PieChart/>;
        this.setState({childComponent: chart});
    }
    render() {
        const chart = this.state.childComponent || <LineChart /> ;
        return (
            <Grid>
                <Row>
                    <Col mdOffset={4} md={4}>
                        <h3>D3 Charts</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <Row>
                            <Col md={12}>
                                <h4><a onClick={this.getLineChart}>Line Chart</a></h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h4> <a onClick={this.getPieChart}>Pie Chart</a></h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col col md={9}>
                        {chart}
                    </Col>
                </Row>
            </Grid>
        );
    /* jshint ignore:end */
    }
};

export default Charts;
