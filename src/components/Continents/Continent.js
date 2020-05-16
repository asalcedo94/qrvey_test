import React, { Component } from 'react';
import Countries from './Country/Countries';

class Continent extends Component { 

    constructor(props) {
        super(props);
        const { continent, data } = props;
        this.state = {
            continent,
            data
        };
    };
    render(){
        const { continent, data } = this.state;
        return(
            <div className="Continent">
                <span>{continent}</span>
                <Countries continent = {continent} data={data}></Countries>
            </div>
            
        )
    }
}

export default Continent;