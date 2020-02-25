import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from '../../../../../assets/logo-timehut.png'

const HeaderTop = (props) => {
    return ( 
        
            <div className="site-navbar-top">
                <div className="container">
                <div className="row align-items-center">

                    <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                    <form action="" className="site-block-top-search">
                        <span className="icon icon-search2"></span>
                        <input type="text" className="form-control border-0" placeholder="Search"/>
                    </form>
                    </div>

                    <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                    <div className="site-logo">
                        <a href="/" className="js-logo-clone">TIMEHUT</a>
                        <img className="site-logo-img" src={Logo} alt="site-logo" ></img>    
                    </div>
                    </div>
                </div>
                </div>
            </div> 
     );
}
 
export default HeaderTop;