import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'

const HeaderTop = (props) => {
  console.log(props.auth);
  
    return ( 
        <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="active"><NavLink to='/' exact >Home</NavLink></li>
            <li ><NavLink to='/about' >About</NavLink></li>
            <li><NavLink to='/shop' >Shop</NavLink></li>
            {props.auth ? <li><a href="/">Orders</a></li> : null}
            <li><NavLink to='/contact' >Contact</NavLink></li>
          </ul>
        </div>
      </nav>
     );
}

const mapStateToProps = state => {
  return {
    auth: state.isAuth
  }
}
 
export default connect(mapStateToProps)(HeaderTop);