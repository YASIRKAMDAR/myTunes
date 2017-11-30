import React from 'react';
import { Row, Col, Card, CardBody, Button, FormGroup, Form, Label, Input  } from 'reactstrap';

import logo from '../images/my_tunes_logo.jpg' 
import loading from '../images/ajax-loader.gif' 

import { connect } from 'react-redux';
import * as actions from '../actions';

class Search extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          artist: '',
          formErrors: {artistError: ''},
          artistValid: false,
          formValid: false
        }
    }
    ComponentDidUpdate()
    {
    }
    HandleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
    getAlbumResults(params) {
        this.props.loading(true);
        this.props.getResults(this.state.artist);
    }
    render() {
        return (
            <Row className='search-block'>
                <Col md="10" lg="8" className="mr-auto mx-auto">
                    <Card className="text-center">
                        <CardBody>
                            <img src={logo} alt="logo"/>
                        <Form>
                            <FormGroup className="label-animation ">
                                <Input type="text" name="artist" id="Artist" 
                                onChange={(event) => this.HandleInput(event)} className="form-control" placeholder="Search for your favourite artists" value={this.state.artist}  />
                                <Label for="Artist" className="font-italic helper-label">Search for your favourite artists</Label>
                            </FormGroup>
                                <Button onClick={(event) => this.getAlbumResults(event)}>Get albums</Button>
                                <img src={loading} className="mr-auto mx-auto" alt="loading"/>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
};


function mapStateToProps({results}) {
    return {results};
}

export default connect(mapStateToProps, actions) (Search);