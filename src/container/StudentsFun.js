import React from 'react';

const person =[
    {
        name:"amit",
        age:19,
        course:{
            c1: "c",
            c2: "html"
        }
    },
    {
        name:"mayur",
        age:20,
        course:{
            c1: "c",
            c2: "html"
        }
    }
];

function StudentsFun(props) {
    return (
        <div>
            <h1>I am Student Function Based Component</h1>
            {
                    person.map((v) => {
                        return (
                            <>
                                <h3>{v.name}</h3>
                                <h5>{v.age}</h5>
                                <p>{v.course.c1}</p>
                                <p>{v.course.c2}</p>
                            </>
                        )
                    })
                }
        </div>
    );
}

export default StudentsFun;