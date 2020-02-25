import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reducer from '../store/reducers/reducer'
import thunk from 'redux-thunk';
import Main from './Main'
import AdminLayout from '../components/Admin/AdminLayout/AdminLayout'

const store = createStore(reducer, applyMiddleware(thunk));

const App = (props) => {
    return ( 
        <Provider store= {store}>
            <BrowserRouter>
                <Main/>
                <Route path='/admin' exact component={AdminLayout} />
            </BrowserRouter>
        </Provider>
     );
}

ReactDOM.render(<App />, document.getElementById('app'))