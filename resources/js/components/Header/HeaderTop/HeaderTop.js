import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../../../../assets/logo-timehut.png'
import { NavLink } from 'react-router-dom';
import {connect } from 'react-redux'; 
import * as actions from '../../../store/actions/actions'
 
const HeaderTop = (props) => {
    const loggedId = localStorage.getItem('loggedId');
    const loggedRole= localStorage.getItem('loggedRole')
    useEffect(()=>{
        props.onAutoLogin(loggedId,loggedRole);
    },[]);
    
    const registerHandler=event=>{
        props.onLogout()
    }
    let btnname=null;
    if(!props.auth){
        btnname=<p>
                    <NavLink to='/login' className="btn btn-sm btn-success" style={{'color': 'white'}}>Login</NavLink>
                </p>
    }else{
        btnname=<p>
                    <NavLink to='/' onClick={registerHandler} className="btn btn-sm btn-success" style={{'color': 'white'}}>Logout</NavLink>
                </p>
    }

    return ( 
            <div className="site-navbar-top">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                    <img className="site-logo-img " src={Logo} alt="site-logo" ></img>  
                    </div>
                    <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                    <div className="site-logo">
                        <a href="/" className="js-logo-clone">TIMEHUT</a>  
                    </div>
                    </div>
                    <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                    <div className="site-top-icons">
                        <ul >
                        <div className="col-4 offset-8 col-md-4 order-3 order-md-3 text-right">
                            <div className="site-top-icons">
                                <ul>
                                    <li className="d-inline-block d-md-none ml-md-0 pb-4"><a href="/" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        {btnname}
                        </ul>
                    </div> 
                    </div>
                </div>
                </div>
            </div> 
     );
}

const mapStateToProps = state =>{
    return {
      auth: state.isAuth,
      role: state.role
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLogout: ()=>dispatch(actions.logout()),
        onAutoLogin:(id,role)=>dispatch(actions.onAutoLogin(id,role))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);