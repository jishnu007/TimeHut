import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationItems from './NavigationItems/NavigationItems'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = (props) => {
    return ( 
        <div className="site-wrap">
        <header className="site-navbar" role="banner">
            <HeaderTop />
            <NavigationItems />
        </header>
        </div>
     );
}
 
export default Header;