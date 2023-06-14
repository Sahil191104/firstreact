import React from 'react';

function FamousPlacesFun(props) {
    return (
        <div>
            <h1>Famous Places Function Component</h1>
            <h2>{props.cname === 'India' ? 'Taj Mahal': 'Tower of London'}</h2>
        </div>
    );
}

export default FamousPlacesFun;