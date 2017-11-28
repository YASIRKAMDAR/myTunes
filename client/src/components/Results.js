import React from 'react';
import { Row, Col, Card,  CardBody  } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends React.Component {
    componentDidMount()
    {
    }
    componentWillUnmount()
    {
        console.log("here");
    }
    AddToFav(event) {
        event.preventDefault();
        var album = this.props.results.results.filter(v => v.collectionId == event.target.id)[0];
        this.props.addFavourite(album);
    }
    render() {
        var list = null;
        console.log(this.props);
        if(this.props.location.pathname == "/")
        {
            if(this.props.results !== null)
                list = this.props.results.results;
        }
        else
        {
            if(this.props.favourites !== null)
                list = this.props.favourites.data;
        }
        switch (list)
        {
            case null:
              return  <p></p>
            case false:
                return <p>No results to display</p>
            default:
                return (
                    <Row className="comp-block" id="resultsBlock">
                        {list.map((result, index) => (
                            <Col md="6" lg="4" xs="12" key={result.collectionId}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col sm="4">
                                                <img src={result.artworkUrl100} className="img-thumbnail" alt="Card cap" />
                                            </Col>
                                            <Col sm="8">
                                                <p className="price text-left text-truncate" title={result.artistName}>{result.artistName}</p>
                                                <p className="name text-left">{result.currency + " " + result.collectionPrice}</p>
                                            </Col>
                                        </Row>
                                        <div className="card-text text-truncate" title={result.collectionCensoredName}>{result.collectionCensoredName}</div>
                                        <Row>
                                            <Col sm="6">
                                                <a href={result.collectionViewUrl} target="_blank">view details</a>
                                            </Col>
                                            <Col sm="6">
                                                <a href={"#" + result.collectionId} id={result.collectionId} onClick={(event) => this.AddToFav(event)}>Add to favourites</a>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                         ))}
                    </Row>
                );
        }
        
    }
};


function mapStateToProps({results, favourites}) {
    return {results, favourites};
}

export default connect(mapStateToProps, actions) (Results);
