import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {connect} from 'react-redux';

const Layout = (props) => {
    return ( 
        <React.Fragment>
            {props.children}
        </React.Fragment>
     );
}
const mapStateToProps = state =>{
    return {
      auth: state.isAuth,
      role: state.role
    }
  }
export default connect(mapStateToProps)(Layout);