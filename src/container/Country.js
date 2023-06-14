import React, { Component } from 'react';
import FamousPlaces from './FamousPlaces';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            country_name: 'India'
        }
    }

    handleclick = () => {
        this.setState({
            country_name: 'London'
        }); 
    }

    render() {
        return (
            <div>
                <h1>Country class Component</h1>
                <FamousPlaces cname={this.state.country_name} />
                <button onClick={this.handleclick}>Change Country</button>
            </div>
        );
    }
}

export default Country;