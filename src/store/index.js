import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";

// 开启react-devTool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store
const store = createStore(reducer, composeEnhancers(
    // 注册中间件
    applyMiddleware(thunk)
))

export default store
