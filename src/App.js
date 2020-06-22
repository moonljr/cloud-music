import React from 'react';
import {GlobalStyle} from './style'
//renderRoutes 读取路由配置转化为 Route 标签
import {renderRoutes} from 'react-router-config'
import {IconStyle} from "./assets/iconfont/iconfont";
import routers from './routes/index'
import {HashRouter} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <GlobalStyle></GlobalStyle>
            <IconStyle></IconStyle>
            {renderRoutes(routers)}
        </HashRouter>
    );
}

export default App;
