import React from 'react'
import Layout from './Layout'
import { Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Login from '../components/Login/Login'
import Register from '../components/Register/Registration'
import ProductPage from '../components/ProductPage/ProductPage'
import SingleProduct from '../components/ProductPage/Products/Product/SingleProduct/SingleProduct'   
import NotFound from '../components/404/NotFound'
import MyOrders from '../components/Myorders/Myorders'
import ReturnOrder from '../components/ReturnOrders/ReturnOrders'     
import Order from '../components/OrderProcessing/OrderProcessing'
import Invoice from '../components/InvoiceDataList/InvoiceDataList'
import OrderToSupplier from '../components/ShowSupplier/ShowSupplier'
import Stock from '../components/Stock/Stock'
import StockView from '../components/Stock/StockView'
import Products from '../components/AdminProducts/Products';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {connect} from 'react-redux';
const Main = (props) => {

    const loggedId = localStorage.getItem('loggedId');
    const loggedRole = localStorage.getItem('loggedRole');

    let routes = (
            <Layout>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/shop' component={ProductPage} />
                <Route path='/singleproduct/:id' component={SingleProduct} />
                <Route path='/contact' component={Contact} />
            </Layout>
        )

    if(loggedId != '' && loggedRole === 'Customer'){
        routes = (
            <Layout>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/shop' component={ProductPage} />
                <Route path='/myorders' component={MyOrders} />
                <Route path='/return' component={ReturnOrder} />
                <Route path='/singleproduct/:id' component={SingleProduct} />
            </Layout>
        )
    }

    if(loggedId != '' && loggedRole === 'Admin'){
        routes = (
        <Layout>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/products' component={Products} />
            <Route path='/singleproduct/:id' component={SingleProduct} />
            <Route path='/orders' component={Order} />
            <Route path='/invoice' component={Invoice} />
            <Route path='/srequest' component={OrderToSupplier} />
            <Route path='/stock' component={Stock} />
            <Route path='/stockview' component={StockView} />
        </Layout>
        )}
    else{
        <Route path='/404' exact component={NotFound} />
    }

    return ( 
        <React.Fragment>
            <Header />
                {routes}
            <Footer/>
        </React.Fragment>
     );
}
const mapStateToProps = state =>{
    return {
      auth: state.isAuth,
      role: state.role
    }
  }
export default connect(mapStateToProps)(Main);    