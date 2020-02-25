import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationItems from './AdminNavigationItems/AdminNavigationItems'
import HeaderTop from './AdminHeaderTop/AdminHeaderTop'

const Header = (props) => {
    return ( 
        <header className="site-navbar" role="banner">
            <HeaderTop/>
            <NavigationItems/>
        </header>
     );
}
 
export default Header;