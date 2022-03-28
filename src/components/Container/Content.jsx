import React from 'react'
import {Link, Route} from 'react-router-dom';
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";
import Filter from './Filter';
import PostContainer from './PostContainer';
import Vehicle from 'components/Advertising/typeAdvertis/Vehicle';
import ElectronicTools from 'components/Advertising/typeAdvertis/ElectronicTools';


export default function Content() {
    return (
      <div>
        
          <section className="content-all">
            <Container>
              <Filter />
              <PostContainer/>
            </Container>
          </section>
      </div>
    );
}
