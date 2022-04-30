import SingelAdvertis from 'components/Advertising/view/SingelAdvertis';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import './ProductStyle.css';

const Product = (props) => {
    const {image, title, price, id} = props.data;
    return (
        <div>
            <div className='productContainer item'>
                <img src={'https://radmanisho.ir/radman/requirements/uploads/' + image} alt="vehicle" className='image'/>

                <h5>{title}</h5> 
                {/* // <p>{item.description}</p> */}
                
                <h5> {price.toLocaleString()} <h6> تومان </h6> </h5>
                <Link to={`/view/:name/${id}`} key={id} data={props.data}><h6><span>توضیحات</span></h6></Link>


            {/* <button key={i} className="city-Selection-btn">{cat.name}</button> */}
            </div>
        </div>
    );
};

export default Product;