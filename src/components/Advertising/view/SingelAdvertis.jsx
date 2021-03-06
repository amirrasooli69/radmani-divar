import React,{useState,useEffect, useContext} from 'react'
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalBody,
  ModalCity,
  ModalHeader
} from "reactstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSilder from './productSlider'
import ShareBox from './ShareBox';
import AdvertisingActions from './AdvertisingActions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

//Contexts
import { ProductsContext } from 'context/ProductContextProvider';

function SingelAdvertis(props) {

  // const {image, title, description, price, id} = props.data;
  // // console.log(id, title, description, price );
  const id = props.match.params.id
  // useEffect(() => {
    
  //   props.getSingledata(props.match.params.id)
    
  // }, [])

  // const id= props.id;

  const data = useContext(ProductsContext);

  // data = data.filter(item => item.id === id)
  // console.log("AAAAAAaaaaaAAAA  ", data[1].description);

  const [Modal, setModal] = useState(false)
  const toggle = () => {
    // setModal(!(Modal))
    };
  const RenderBreadcrumb=(Datahear)=>{
    let { breadcrumb } =props.singleWidgets;
    let name;
    if (breadcrumb != undefined){
      breadcrumb.categories.map((itme,index) => {
        if (index === Datahear) {
          name = itme.title;
        }
      })
      return name;
    }
  }
  const Renderlist_data = (Datahear) => {
    let { list_data } = props.singleWidgets;
    let name;
    if (list_data != undefined) {
      list_data.map((itme, index) => {
        if (index === Datahear) {
          name = itme.value;
        }
      })
      return name;
    }
  }
    return (
      <section className="single-Adivertis-view">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={12}>
              <div>
                <Breadcrumb tag="nav" listTag="div">
                  <BreadcrumbItem active tag="span">
                    <Link to="/">
                      ????????????
                      </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#" className="first-child">
                    {RenderBreadcrumb(3)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(2)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(1)}
                  </BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">
                    {RenderBreadcrumb(0)}
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 text-right">
            <Col md={6}>
              <div className="Advertis-content-Wrapper">
                <h1 className="Advertis-content-Wrapper__title">
                  
                  {props.singleWidgets.header != undefined ? props.singleWidgets.header.title : ''}
                  {/* {title != undefined ? title : ''} */}
                </h1>
                <div className="Advertis-content-Wrapper__publish-time">
                  {props.singleWidgets.header != undefined ? props.singleWidgets.header.date : ''}
                </div>
                <div className="Advertis-content-Wrapper__btn-details">
                  <AdvertisingActions/>
                </div>
              </div>
              <ul className="advertis-data-list col-md-11">
                <li className="advertis-data-list__item">
                  <span className="title">???????? ????????</span>
                  <span className="discription">
                    {Renderlist_data(0)}
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">??????</span>
                  <span className="discription divar-color">
                    { Renderlist_data(1) }
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">?????? ????????</span>
                  <span className="discription">
                    { Renderlist_data(2) }
                  </span>
                </li>
                <li className="advertis-data-list__item">
                  <span className="title">????????</span>
                  <span className="discription">
                    {Renderlist_data(3)}
                  </span>
                </li>
              </ul>
              <Row>
                <Col md={12}>
                    <div className="discription-Adivertis">
                      <p>
                      {props.singleWidgets.description != undefined ? props.singleWidgets.description : ''}
                      </p>
                    </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              {/* <ProductSilder img={data[1].image} /> */}
              <ProductSilder img={props.singleWidgets.images}/>
              <ShareBox link={props.token}/>
            </Col>
          </Row>

        </Container>
      </section>
    );
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSingledata: (payload) => {
      dispatch({
        type: "GET_SINGLE_POST_DATA",
        payload
      })
    },
  }
}

const mapStateToProps = (state) => {
  let { DivarApi } = state;
  console.log("All state--->",state)
  return {
    singlePostAllData: DivarApi.singlePostData,
    singleWidgets: DivarApi.singleWidgetsData,
    token: DivarApi.tokenpost
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingelAdvertis)

// export default SingelAdvertis;
