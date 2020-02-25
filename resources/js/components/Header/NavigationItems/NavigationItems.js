import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

const NavigationItems = (props) => {
    return ( 
        <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li ><NavLink activeClassName="active" to='/' exact >Home</NavLink></li>
            <li ><NavLink activeClassName="active" to='/about' >About</NavLink></li>
            {( props.role !== 'Admin')  ? <li><NavLink activeClassName="active" to='/shop' >Shop</NavLink></li> : null}
            {(props.auth && props.role === 'Admin')  ? <li><NavLink activeClassName="active" to='/products' >Products</NavLink></li> : null}
            {(props.auth && props.role === 'Customer')  ? <li><NavLink activeClassName="active" to='/myorders' >My Orders</NavLink></li> : null}
            {(props.auth && props.role === 'Admin')  ? <li><NavLink activeClassName="active" to='/orders' >Orders</NavLink></li> : null}
            {(props.auth && props.role === 'Admin')  ? <li><NavLink activeClassName="active" to='/srequest' >Request to Supplier</NavLink></li> : null}
            {(props.auth && props.role === 'Admin')  ? <li><NavLink activeClassName="active" to='/stock' >Stock</NavLink></li> : null}
            {(props.role !== 'Admin') ? <li><NavLink activeClassName="active" to='/contact' >Contact</NavLink></li> : null}
          </ul>
        </div>
      </nav>
     );
}

const mapStateToProps = state =>{
  return {
    auth: state.isAuth,
    role: state.role
  }
}
 
export default connect(mapStateToProps)(NavigationItems);