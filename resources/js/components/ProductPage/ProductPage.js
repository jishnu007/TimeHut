import React from 'react';
import Products from './Products/Products';
import Sidebar from '../SideBar/SideBar';

const ProductPage = () => {  

return(     
    <div className="site-section">
        <div className="container">
            <div className="row mb-5">
                <div className="row mb-5">
                    <Products/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductPage;