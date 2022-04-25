import axios from 'axios';

// const BASE_URL = "https://fakestoreapi.com/";



// const getProducts = async () => {
//     const response = await axios.get(`${BASE_URL}/products`);
//     return response.data;
// }


const BASE_URL = "https://radmanisho.ir/api/items/item";

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
}


export {getProducts};