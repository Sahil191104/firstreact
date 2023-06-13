import React, { Component } from 'react';

class Employe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 101,
            name: 'smit',
            age: 50
        }
    }

    handleclick = () => {
        this.setState({
            id: 102,
            name: 'sanjay',
            age: 40
        });
    }

    render() {
        return (
            <div>
                <h1>Employe class based Component</h1>
                <p>Id: {this.state.id}</p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <button onClick={this.handleclick}>Change Value</button>
            </div>
        );
    }
}

export default Employe;