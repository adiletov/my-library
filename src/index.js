import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import store, {history} from "./store/configStore";
import {Router, BrowserRouter} from 'react-router-dom'
const app = (
    <Provider store={store}>
        <Router history={history}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
