import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './vehicleStyle.css';

const Vehicle = () => {

    // const ostan = 'https://radmanisho.ir/api/items/state';
    // const fake = 'https://fakestoreapi.com/products';
    const fake = 'https://radmanisho.ir/api/items/item';

    // const [categories , setCategories] = useState([]);
    const [vehicle , setVehicle] = useState([]);


    useEffect (() => {

        axios.get(fake)
        .then(response => setVehicle(response.data));

    } , [])

    return (
        <div>
            {/* <text className='vehicleTitle'>وسیله نقلیه</text> */}
            <div>
            {
                vehicle.map((item, i) => (
                    <div className='carContainer'>
                        <img src={'https://radmanisho.ir/radman/requirements/uploads/' + item.image} alt="vehicle" className='image'/>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <h3>{item.price} تومان</h3>


                        {/* <button key={i} className="city-Selection-btn">{cat.name}</button> */}
                    </div>
                    ))
            }

            </div>
            
        </div>
    );
};

export default Vehicle;