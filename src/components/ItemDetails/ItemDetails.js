import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
    }

    render(){
        return(
            <Button className="item-details-button" bsStyle="link" onClick={()=>this.setState({open: !this.state.open})}>
                {this.state.open === false ? `Show ` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
            </Button>
        );
    }
}