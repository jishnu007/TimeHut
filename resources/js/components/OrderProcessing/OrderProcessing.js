import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import './OrderProcessing.css'

const orderProcess =()=>{
    const [orderProcessing,setOrderProcessing]=useState([]);

    useEffect(()=>{
        axios.get('/api/OrderProcessing')
        .then(response=>{
            setOrderProcessing(response.data);
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    const submitHandler= (pId,orderQuantity) =>{
        window.location.reload(false);  
        axios.get('/api/QuantityCheck').then(response=>{
            let checkQuantity;
            for(var key in response.data){
              checkQuantity=0;
              if(response.data[key].p_id === pId && response.data[key].product_qty >= orderQuantity){
              const quantity = response.data[key].product_qty - orderQuantity;
              const passing={
                p_id:pId,
                quantity:quantity,
                status:'verified'
                }
                axios.post('/api/updateStatus/',passing)
                .catch(err => {
                  console.log(err)
                }) ;
                
                axios.post('/api/updateProduct',passing)
                .catch(err => {
                  console.log(err)
                }) ;
                checkQuantity++;
                break;
                }
              else{
               continue;
              }
            }
            if(checkQuantity===0){
              alert('NOT ENOUGH PRODUCT QUATITY');
            }  
        })
        }
        const removeOrderHandler = (pId) =>{
          window.location.reload(false);
          const passing={
            p_id:pId,
            status:'rejected'
          }
          axios.post('/api/rejectOrder',passing)
          .then(res=> {
            alert('You Have Rejected the Order');
          })
          .catch(err => {
            console.log(err)
          }) 
       }
        return(
            
            <div className="container">
              
              <div className="row">
                <div className="col-6 float-left"><h2  className="mt-5 md-2"data-aos="fade-left" data-aos-delay="">SUBMITTED ORDERS</h2></div>
                <div className="col-6 float-right"><button  type="button" className="btn btn-primary float-right m-3"><NavLink style={{color: 'white', textDecoration: 'none'}} to='/invoice' >INVOICE</NavLink></button></div>
              </div>
              <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col">Order No:</th>
                <th scope="col">Item</th>
                <th scope="col">Date of Purchase</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Customer Id</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              {orderProcessing.length >0 ? orderProcessing.map(i => (
                <tr className="m-5" key={i.id}>
                  <td>{i.id}</td> 
                  <td>{i.item}</td> 
                  <td>{i.date_of_order}</td> 
                  <td>{i.order_qty}</td> 
                  <td>{i.total_price}</td> 
                  <td>{i.c_id}</td>
                  <td>
                      <button  onClick={()=>submitHandler(i.pid,i.order_qty)} type="button" className="btn btn-md btn-primary accept-button"> Verify</button>
                      <button onClick={()=>removeOrderHandler(i.pid)} type="button" className="btn btn-md btn-danger reject-button">Reject</button>
                  </td>   
                </tr> 
              )):<tr className="text-center"><td colSpan="7"><h2 className="col-offset-7 m-5">No More Submitted Orders!!</h2></td></tr>
              }
                
            </tbody>
          </table>
          </div>
        );
}
export default orderProcess;