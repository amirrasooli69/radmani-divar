import axios from 'axios';
import React, {useEffect, useState} from 'react';
import DemoNavbar from 'components/Navbars/DemoNavbar';
import MainSidebar from 'components/sidebar/MainSidebar';
import FooterBlog from 'components/Footers/FooterBlog'
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
            <DemoNavbar />
            {/* <MainSidebar /> */}
            <div className='total'>
            {
                vehicle.map((item, i) => (
                    <div className='carContainer item'>
                        <img src={'https://radmanisho.ir/radman/requirements/uploads/' + item.image} alt="vehicle" className='image'/>
                        <h5>{item.title}</h5>
                        {/* <p>{item.description}</p> */}
                        <h5>{item.price} تومان</h5>


                        {/* <button key={i} className="city-Selection-btn">{cat.name}</button> */}
                    </div>
                    ))
            }

            </div>
            <FooterBlog />
            
        </div>
    );
};

export default Vehicle;