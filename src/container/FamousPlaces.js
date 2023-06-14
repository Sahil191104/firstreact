import React, { Component } from 'react';

class FamousPlaces extends Component {
    render() {
        return (
            <div>
                <h1>Famous Places class Component</h1>
                <h2>{this.props.cname === 'India' ? 'Taj Mahal': 'Tower of London'}</h2>
            </div>
        );
    }
}

export default FamousPlaces;