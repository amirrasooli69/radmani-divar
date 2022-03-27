import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Vehicle = () => {

    const ostan = 'https://radmanisho.ir/api/items/state';

    // const [categories , setCategories] = useState([]);
    const [vehicle , setVehicle] = useState([]);

    useEffect (() => {

        axios.get(ostan)
        .then(response => setVehicle(response.data));

    } , [])

    return (
        <div>
            <h1>Vehicles:</h1>
            <div>
            {vehicle.map((cat, i) => ( <button key={i} className="city-Selection-btn">{cat.name}</button>))}

            </div>
            
        </div>
    );
};

export default Vehicle;