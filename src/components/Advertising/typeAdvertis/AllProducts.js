import React, { useContext } from 'react';

//Components
import Product from 'components/shared/Product';
import DemoNavbar from 'components/Navbars/DemoNavbar';


//Contexts
import { ProductsContext } from 'context/ProductContextProvider';

const AllProducts = () => {

    const products = useContext(ProductsContext);
    return (
        <div>
            <DemoNavbar />
            {
                products.map(product => <Product 
                                        key={product.id}
                                        data={product}
                                        />)
            }
        </div>
    );
};

export default AllProducts;