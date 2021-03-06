import {
    takeEvery,
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects';
import ServiceHttp from '../../../boot/HttpRequest/HttpService';
const http2 = new ServiceHttp()
const dataConfig = {"json_schema":{"category":{"value":"ROOT"}},"last-post-date":564151546529635}

// ************************** ADVERTISING data ***************************

export const advertisingDataWatcher = function* () {
    yield takeEvery('GET_ADVERTISING_DATA', advertisingDataWorker)
    console.log("this is saga wather 111 ");
}
const advertisingDataWorker = function* (action) {
    console.log("this is saga worker 333 ");

    try {
        const result = yield call(() => {
            return (
                // http2.httpRequst('POST', 'search/1/ROOT', {}, JSON.stringify(dataConfig))
                http2.httpRequst('GET', `web-search/${action.payload}`, {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                }, JSON.stringify(dataConfig),false)
                .then(response => {
                    return {
                        city : action.payload,
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });
        
        console.log("this is saga Result  ", result);
        console.log("this is saga hasOwnProperty  ", result.hasOwnProperty("widget_list"));

        if (result.hasOwnProperty("widget_list")) {

            yield put({
                type: "FETCH_ADVERTISING_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                case result.status === 401:
                    yield put({
                        type: "FETCH_ADVERTISING_DATA_UNAUTHORIZED",
                        payload: result,
                    });
                    break;
                case result.status === 404:
                    yield put({
                        type: "FETCH_ADVERTISING_DATA_NOTFOUND",
                        payload: result,
                    });
                    break;

                default:
                    yield put({
                        type: "FETCH_ADVERTISING_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "FETCH_ADVERTISING_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}


// ************************** get Categoryes data ***************************

export const getCategoryesDataWatcher = function* () {
    yield takeEvery('GET_ALL_CATEGORYES_DATA', getCategoryesDataWorker)
    console.log("this is saga getCategoryes wather 111 ");
}
const getCategoryesDataWorker = function* (action) {
    console.log("this is saga getCategoryes worker 333 ");

    try {
        const result = yield call(() => {
            return (
                http2.httpRequst('GET', 'categories?source=internal', {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                },{},false )
                .then(response => {
                    return {
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga GET_ALL_CATEGORYES_DATA error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });

        console.log("this is saga Result GET_ALL_CATEGORYES_DATA ", result);

        if (result.result == "success") {

            yield put({
                type: "GET_ALL_CATEGORYES_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                default:
                    yield put({
                        type: "GET_ALL_CATEGORYES_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "GET_ALL_CATEGORYES_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}

// ************************  get data Single Advertising ********************************
// https: //api.divar.ir/v5/posts/gXaMiGq6


export const getDAtaSinglePostWatcher = function* () {
    yield takeEvery('GET_SINGLE_POST_DATA', getDAtaSinglePostWorker)
    console.log("GET_SINGLE_POST_DATAwather 111 ");
}
const getDAtaSinglePostWorker = function* (action) {
    console.log("GET_SINGLE_POST_DATA 333 ");

    try {
        const result = yield call(() => {
            return (
                http2.httpRequst('GET', `posts/${action.payload}`, {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                },{}, false)
                .then(response => {
                    console.log("GET_SINGLE_POST_DATA response  33333 ", response);

                    return {
                         success: true,
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga GET_SINGLE_POST_DATA error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });

        console.log("this is saga Result GET_SINGLE_POST_DATA Result RR", result);

        if (result.success) {

            yield put({
                type: "GET_SINGLE_POST_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                default:
                    yield put({
                        type: "GET_SINGLE_POST_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "GET_SINGLE_POST_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}

// ************************  get Blog Posts Watcher ********************************
// https: //api.divar.ir/v5/posts/gXaMiGq6


export const getBlogPostsWatcher = function* () {
    yield takeEvery('GET_BLOG_POST_DATA', getBlogPostsWorker)
    console.log("GET_SINGLE_POST_DATAwather 111 ");
}
const getBlogPostsWorker = function* (action) {
    console.log("getBlogPosts 333 ");

    try {
        const result = yield call(() => {
            return (
                http2.httpRequst('GET', `https: //api.divar.ir/v8/search/1/ROOT`, {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                },{},true )
                .then(response => {
                    console.log("GET_SINGLE_POST_DATA response  33333 ", response);

                    return {
                         success: true,
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga GET_SINGLE_POST_DATA error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });

        console.log("this is saga Result GET_SINGLE_POST_DATA Result RR", result);

        if (result.success) {

            yield put({
                type: "GET_BLOG_POST_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                default:
                    yield put({
                        type: "GET_BLOG_POST_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "GET_BLOG_POST_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}


export const singleBlogPostsWatcher = function* () {
    yield takeEvery('GET_SINGLE_BLOG_POST_DATA', singleBlogPostsWorker)
    console.log("GET_SINGLE_POST_DATAwather 111 ");
}
const singleBlogPostsWorker = function* (action) {
    console.log("singleBlogPosts 333 ");

    try {
        const result = yield call(() => {
            return (
                http2.httpRequst('GET', `https://jsonplaceholder.ir/posts`, {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                }, {}, true)
                .then(response => {
                    console.log("GET_SINGLE_POST_DATA response  33333 ", response);

                    return {
                        success: true,
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga GET_SINGLE_POST_DATA error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });

        console.log("this is saga Result GET_SINGLE_POST_DATA Result RR", typeof (result));

        if (result.success) {

            yield put({
                type: "GET_SINGLE_BLOG_POST_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                default:
                    yield put({
                        type: "GET_SINGLE_BLOG_POST_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "GET_SINGLE_BLOG_POST_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}