import React,{useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import Wrapper from "components/wrapper";
import NotFound from "components/Error/NotFound";
import Axios from 'axios';
import ProductContextProvider from './context/ProductContextProvider';

import Vehicle from 'components/Advertising/typeAdvertis/Vehicle';
import ElectronicTools from 'components/Advertising/typeAdvertis/ElectronicTools';
import Chat from 'components/chatComponent/Chat';
import About from 'components/page/About';
import Weblog from 'components/blog/Weblog';
import Support from 'components/Support/Support';
import Contact from 'components/page/contact';
import New from 'components/Advertising/newAdvertis/NewAdvertising'
import MainPage from 'views/MainPage';
import SingelAdvertis from './components/Advertising/view/SingelAdvertis'
import AllProducts from 'components/Advertising/typeAdvertis/AllProducts';

function App({
    fetchAdvertise,
    fetchCategories,
    widgetList,
    Categoryes,
}) {
    useEffect(() => {
          const getData = async () => {
                  await fetchAdvertise("tehran");
                  await fetchCategories();
                  await getApi()
                }
        getData();
        
    }, [])
    const getApi =()=>{
        Axios.get('https://radmanisho.ir/api/items/read', {
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers' : 'Content-Type, Authorization, Authorizations, X-Authorization'
            },
            proxy: {
                host: '104.236.174.88',
                port: 3128
            }
        }).then(function (response) {
            console.log('response is :&&&&&&&&&&&&&&& ' , response);
        }).catch(function (error) {
            if (error.response) {
                console.log(" error.config -=>&&&&&&&&&&&&&&&&&&&&&",error.response.headers, );
            } else if (error.request) {
                console.log("error.request -=> &&&&&&&&&&&&&&&&", error.request);
            } else {
                console.log("error.message -=>&&&&&&&&&&&&&&&&", error.message);
            }
            console.log("error.config -=> &&&&&&&&&&&&&&", error.config);
        });
    }
    return (
        <>
            <BrowserRouter>
                <ProductContextProvider>
                    <Switch>
                        <Route path='/view/:name/:id' component={SingelAdvertis}/>
                        <Route path='/vehicle' component={Vehicle} /> 
                        <Route path='/electronictools' component={ElectronicTools} />
                        <Route path='/chat' component={Chat} />
                        <Route path='/about' component={About} />
                        <Route path='/blog' component={Weblog} />
                        <Route path='/support' component={Support} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/new' component={New} />
                        <Route path='/radman/requirements/site' component={MainPage} />
                        {/* <Redirect exact from='/requirements' Link='/radman/requirements/site' /> */}
                        <Redirect from='/requirements' to='/radman/requirements/site' />
                        {/* <Route exact path = "/" render = {(props) => <Wrapper {...props}/>} / > */}

                    </Switch>
                </ProductContextProvider>
            </BrowserRouter>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdvertise: (payload) => {
            dispatch({
                type: "GET_ADVERTISING_DATA",
                payload
            })
        },
        fetchCategories: (payload) => {
            dispatch({
                type: "GET_ALL_CATEGORYES_DATA",
                payload
            })
        }
    }
}

const mapStateToProps = (state) => {
    let {
        DivarApi
    } = state;
    return {
        widgetList: DivarApi.AdvertisingList,
        Categoryes: DivarApi.AllCategory
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)