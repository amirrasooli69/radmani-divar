import React from 'react';
import { Link } from 'react-router-dom';

import './ProductStyle.css';

const Product = (props) => {
    const {image, title, price, id} = props.data;
    return (
        <div>
            <div className='carContainer item'>
                <img src={'https://radmanisho.ir/radman/requirements/uploads/' + image} alt="vehicle" className='image'/>
                <h5>{title}</h5>
                {/* <p>{item.description}</p> */}
                <h5>{price} تومان</h5>
                <Link to={`/view/:name/${id}`} ><h5>توضیحات</h5></Link>


            {/* <button key={i} className="city-Selection-btn">{cat.name}</button> */}
            </div>
        </div>
    );
};

export default Product;