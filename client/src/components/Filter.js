import React from 'react';
import { Row, Col, Card, CardBody, FormGroup, Form, Label, Input  } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          filterKey: '',
          filteredResults: null
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    filterInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        this.props.filterFavourite(e.target.value);
      }
    render() {
        return (
            <Row className="filterBlock">
                <Col md="4" lg="6">
                </Col>
                <Col md="8" lg="6">
                    <Card className="text-center">
                        <CardBody>
                        <Form>
                            <FormGroup className="label-animation ">
                                <Input type="text" name="filterKey" id="FilterKey" onLoad={(event) => this.filterInput(event)}
                                onChange={(event) => this.filterInput(event)} className="form-control" placeholder="filter artists" value={this.state.filterKey}  />
                                <Label for="FilterKey" className="font-italic helper-label">filter artists</Label>
                            </FormGroup>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};

function mapStateToProps({favourites}) {
    return {favourites};
}
export default connect(mapStateToProps, actions) (Filter);