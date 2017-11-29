import React from 'react';
import { Row, Col, Card,  CardBody  } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends React.Component {
    componentDidMount()
    {
    }
    AddToFav(event) {
        event.preventDefault();
        var album = this.props.results.results.filter(v => v.collectionId == event.target.id)[0];
        this.props.addFavourite(album);
    }
    RemoveFav(event) {
        event.preventDefault();
        let list;
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
        var album = list.filter(v => v.collectionId == event.target.id)[0];
        this.props.removeFavourite(album);
    }
    favouriteClass(isFavourite, collectionID){
        var favClass = "";
        try {
            if (isFavourite) {
                favClass = "favourite";
            } else {
                if(this.props.favourites !== null)
                {
                    if(this.props.favourites.data.filter(v => v.collectionId == collectionID).length >0)
                    {
                        favClass = "favourite";
                    }
                }
            }   
        } catch (error) {
            console.log(error);
        }
        return favClass;
    }
    render() {
        var list = null;
        var isFavourite = false;
        if(this.props.location.pathname == "/")
        {
            if(this.props.results !== null)
                list = this.props.results.results;
        }
        else
        {
            isFavourite = true;
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
                    <Row id="resultsBlock">
                        {list.map((result, index) => (
                            <Col md="6" lg="4" xs="12" className={this.favouriteClass(isFavourite, result.collectionId)} key={result.collectionId}>
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
                                            <Col sm="4">
                                                <a href={result.collectionViewUrl} target="_blank">view details</a>
                                            </Col>
                                            <Col sm="8" className="add-favourites">
                                                <a href={"#" + result.collectionId} id={result.collectionId} onClick={(event) => this.AddToFav(event)}>Add to favourites</a>
                                            </Col>
                                            <Col sm="8" className="remove-favourites">
                                                <a href={"#" + result.collectionId} id={result.collectionId} onClick={(event) => this.RemoveFav(event)}>No more my favourite</a>
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
