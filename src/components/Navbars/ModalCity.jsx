import React from 'react'
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

export default function ModalCity() {
    return (
        <>
            <InputGroup className="in-modal-city">                
                <Input placeholder="جستجوی سریع نام شهر" />
                <InputGroupAddon addonType="prepend"><button><i className="fa fa-search" ></i></button></InputGroupAddon>
            </InputGroup>
            <div className="city-wrapper-btn">
                <button className="city-Selection-btn"> سمنان </button>
                <button className="city-Selection-btn"> شاهرود </button>
                <button className="city-Selection-btn"> دامغان </button>
                <button className="city-Selection-btn"> گرمسار </button>
                <button className="city-Selection-btn"> مهدی شهر </button>
                <button className="city-Selection-btn"> سرخه </button>
                <button className="city-Selection-btn"> آرادان </button>
                <button className="city-Selection-btn"> میامی </button>
            </div>
        </>
    )
}

