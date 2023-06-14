import React, { useState } from 'react';
import FamousPlacesFun from './FamousPlacesFun';

function CountryFun(props) {

    const [countryName, setCountryName] = useState("India")

    const handleclick = () => {
        setCountryName("London");
    }

    return (
        <div>
            <h1>Country Function Component</h1>
            <FamousPlacesFun cname={countryName} />
            <button onClick={handleclick}>Change Country</button>
        </div>
    );
}

export default CountryFun;