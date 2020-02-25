import React , { useState, useEffect } from 'react';
import  './Stock.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const  stock = () => {




    const [stock,setStock] = useState([]);


    useEffect(() => {
        axios.get('/api/show')
        .then(res => {
          setStock(res.data);
    }).catch(err=>{
        alert(err.message);
        console.log(err)
    })
    
},[]);


    return ( 
        <div className="StockView">
            <div className="StockTable">
                <div className="container">
                    <h2 className="d-flex justify-content-center">Stock Details</h2>
                    <table className="table table-hover table-fixed">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Stock Qty</th>
                        <th>Product Qty</th>
                        <th>Warehouse</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {stock.map(s => (
                        
                        <tr key={s.id}>
                        <th scope="row">{s.id}</th>
                        <td>{s.p_id}</td>
                        <td>{s.p_name}</td>
                        <td>{s.p_price}</td>
                        <td>{s.cost}</td>
                        <td>{s.stock_qty}</td>
                        <td>{s.product_qty}</td>
                        <td>{s.warehouse}</td>
                        </tr>

                        
                    )) }

                    
                        <tr>
                        
                        </tr>
                    </tbody>
                    </table>
                    
                </div>
            </div>

        </div>
     );
}
 
export default stock;