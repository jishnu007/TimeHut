import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {  

return(     
    <div className="col-sm-6 col-lg-3 mb-4"  data-aos="fade-up" key={props.key}>
        <div className="block-4 text-center border">
            <figure className="block-4-image">
                <NavLink to={`/singleproduct/${props.id}`}><img src={'/uploads/' + props.image1} alt="Image placeholder" className="product-image"/></NavLink>
            </figure>
            <div className="block-4-text">
                <h3><NavLink to={`/singleproduct/${props.id}`}>{props.product_name}</NavLink></h3>
                <p className="mb-0">{props.category}</p>
                <p className="text-white font-weight-bold badge badge-primary badge-pill">Rs. {props.price}</p>
            </div>
        </div>
    </div>
    );
}

export default Product;