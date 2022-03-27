import React,{ useState , useEffect} from 'react'
import axios from 'axios';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
 import config from 'boot/config/dotenv';

export default function ModalCity() {
    
    const ostan = 'https://radmanisho.ir/api/items/state';

        // const [categories , setCategories] = useState([]);
        const [filterCategories , setFilterCategories] = useState([]);

        useEffect (() => {

            axios.get(ostan)
            .then(response => setFilterCategories(response.data));
    
        } , [])
    
        // let newCategory=[];
        // const createCategory = () => {
        //     filterCategories.forEach(cat => {
        //         newCategory.push(cat);
        //         filterSubCategories.forEach(subCat => {
        //             if(cat.cat_id === subCat.cat_id) {
        //                 console.log(cat.cat_id + ' === ' + subCat.id)
        //                 newCategory.push(subCat);
        //             }
        //         });
                
        //     });
            // console.log(newCategory)
            // newCategory.map((cat, i) => (<ul><li className="cat" key={i}><h2>{cat.cat_name}</h2></li></ul>))
    return (
        <>
            <InputGroup className="in-modal-city">                
                <Input placeholder="جستجوی سریع نام شهر" />
                <InputGroupAddon addonType="prepend"><button><i className="fa fa-search" ></i></button></InputGroupAddon>
            </InputGroup>
            <div className="city-wrapper-btn">
                {/* {console.log(filterCategories)} */}
            {/* {filterCategories.map((cat, i) => (<ul><li className="cat" key={i}><h2>{cat.cat_name}</h2></li></ul>))} */}
            {filterCategories.map((cat, i) => ( <button key={i} className="city-Selection-btn">{cat.name}</button>))}
            {/* <button className="city-Selection-btn">{cat.cat_name}</button>
                {/* <button className="city-Selection-btn"> سمنان </button>
                <button className="city-Selection-btn"> شاهرود </button>
                <button className="city-Selection-btn"> دامغان </button>
                <button className="city-Selection-btn"> گرمسار </button>
                <button className="city-Selection-btn"> مهدی شهر </button>
                <button className="city-Selection-btn"> سرخه </button>
                <button className="city-Selection-btn"> آرادان </button>
                <button className="city-Selection-btn"> میامی </button> */}
            </div>
        </>
    )
}

