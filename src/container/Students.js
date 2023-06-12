import React, { Component } from 'react';

const person = [
    {
        name: "Amit",
        age: 25,
    },
    {
        name: "Piyush",
        age: 40,
    }
];

class Students extends Component {
    render() {
        return (
            <div>
                <h1>I am Students Component</h1>
                {
                    person.map((v) => {
                        return (
                            <>
                                <h3>{v.name}</h3>
                                <h5>{v.age}</h5>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default Students;