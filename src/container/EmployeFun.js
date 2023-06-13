import React, { useState } from 'react';

function EmployeFun(props) {

    // Hooks useState

    const [id, setId] = useState(101);
    const [name, setName] = useState('amit');
    const [city, setCity] = useState('surat');

    const handleclick = () => {
        setId(102);
        setName('sumit');
        setCity('Ahmdabad');
    }

    return (
        <div>
            <h1>Employe Function based Component</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>City: {city}</p>
            <button onClick={handleclick}>Change value</button>
        </div>
    );
}

export default EmployeFun;