import React from 'react'
import Header from '../../Header/AdminHeader/AdminHeader'
import Footer from '../../Footer/Footer'

const Layout = (props) => {
    return ( 
        <React.Fragment>
            <Header />
                {props.children}
            <Footer/>
        </React.Fragment>
     );
}
 
export default Layout;