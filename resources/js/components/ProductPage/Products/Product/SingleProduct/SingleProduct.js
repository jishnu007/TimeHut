import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SingleProduct = (props) => {
    const [singleProduct,setsingleProduct] = useState([]);
    const [initQuantity,setQuantity] = useState(1);
    const loggedId = localStorage.getItem('loggedId');
    const loggedRole = localStorage.getItem('loggedRole');
    useEffect(() => {
        const productId = props.match.params.id
        axios.get(`/api/products/${productId}`).then(response => {
            setsingleProduct(response.data)
          })
      },[]);

    const orderNow = () =>{
        /*date of order*/
        var orderDateTime = new Date();
        var dateoforder = orderDateTime.getFullYear() + '-' + (orderDateTime.getMonth() + 1) + '-' + orderDateTime.getDate();
        /*Product Id*/ 
        const productId = props.match.params.id

        /*Generating Order reference number*/
        const min = 1;
        const max = 1000000;
        const randomNum = min + Math.floor( Math.random() * (max - min));
        const order_ref_no =  randomNum + '-' + dateoforder + '-' + productId;
        const productDetails = {
            p_id: singleProduct.p_id,
            date_of_order: dateoforder,
            order_qty: initQuantity, 
            total_price: initQuantity*singleProduct.price,
            c_id: loggedId,
            order_status: 'submitted',
            order_ref_no: order_ref_no,
            s_id:1
       }
       axios.post('/api/orders',productDetails).then(response => {
        props.history.push('/myorders')
      })
      .catch(err => {
        console.log(err);    
      })
    }

    const redirectIfNotLogged = () => {
      props.history.push('/login')
    }

    return(
        <div className="row" data-aos="fade-left">
        <div className="col-md-6">
          <img  src={'/uploads/' + singleProduct.p_image} alt="Image" className="single-product-img"/>
          <img  src={'/uploads/' + singleProduct.image2} alt="Image" className="single-product-img"/>
          <img  src={'/uploads/' + singleProduct.image3} alt="Image" className="single-product-img"/>
        </div>
        <div className="col-md-6">
          <h2 className="text-black mb-4">{singleProduct.product_name}</h2>
            <p>{singleProduct.description}</p>
            <p className="mb-4">Category : <span className="text-bold">{singleProduct.category}</span></p>
            <p><strong className="text-white font-weight-bold badge badge-primary badge-pill h4">Rs. {singleProduct.price}</strong></p>
            { loggedRole === 'Admin' ? null : <p className="mb-4">Quantity<span className="ml-2"><input type="number" value={initQuantity} onChange={()=>setQuantity(event.target.value)} name="quantity" min="1" max="5"/></span></p>}
            {loggedRole === 'Admin' ? null : (loggedId !== null ?  <p><button onClick={orderNow} className="buy-now btn btn-sm btn-primary">Order Now</button></p> : <p><button onClick={redirectIfNotLogged} className="buy-now btn btn-sm btn-primary">Login to Order</button></p>)}
        </div>
      </div>
    );
}

export default SingleProduct;