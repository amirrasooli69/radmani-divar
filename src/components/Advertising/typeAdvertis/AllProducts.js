import React, { useContext } from 'react';

//Components
import Product from 'components/shared/Product';
import DemoNavbar from 'components/Navbars/DemoNavbar';


//Contexts
import { ProductsContext } from 'context/ProductContextProvider';

//Style
import styles from './AllProducts.module.css'

const AllProducts = () => {

    const products = useContext(ProductsContext);
    return (
        <div>
            <DemoNavbar />
            <div className={styles.container}>
                {
                    products.map(product => <Product 
                                            key={product.id}
                                            data={product}
                                            />)
                }
            </div>
        </div>
    );
};

export default AllProducts;