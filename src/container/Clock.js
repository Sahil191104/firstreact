import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            time: new Date()
        });
    }

    clock = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {
        this.timedata = setInterval(this.clock, 1000);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {
            console.log("componentDidUpdate Updated");
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.timedata);
    }

    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;