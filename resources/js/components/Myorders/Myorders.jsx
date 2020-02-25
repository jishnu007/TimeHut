import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import "./Myorders.css";
import axios from "axios";
import {connect} from 'react-redux';

const Myorders = props => {
    console.log('rendered it')
    const [orders, setOrders] = useState([]);
    const [unconfirmedOrders, setUnconfirmedOrders] = useState([]);
    const [returns, setReturns] = useState([]);
    const loggedId = localStorage.getItem("loggedId");
    const toRenderAgain=props.loggedId;
    // Fetching the Queried data from Laravel using API
    // API to fetch the orders-product table joined data
    useEffect(() => {
        axios
            .get(`/api/myorders/${loggedId}`)
            .then(response => {
                setOrders(response.data);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`/api/myunconfirmedorders/${loggedId}`)
            .then(response => {
                setUnconfirmedOrders(response.data);
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // API to get count of Result table
    useEffect(() => {
        axios
            .get("/api/ret")
            .then(response => {
                setReturns(response.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);
    let count = 0;
    // Date Check Handler
    const dateCheckHandler = (dor, ref) => {
        count = 0;
        var date1 = new Date(dor);
        var date2 = new Date();
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        returns.map(pro => {
            if (pro.order_ref_no == ref) {
                count++;
            }
            return count;
        });

        if (Difference_In_Days < 5 && count === 0) {
            return true;
        } else {
            return false;
        }
    };
    const countCheckHandler = () => {
        if (count > 0) {
            return false;
        } else {
            return true;
        }
    };
    
    let myOrders = null;
     if(props.auth && props.role === 'Customer'){ 
        myOrders =  (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="container">
                        <div>
                            <h2
                                className="mt-5 md-2"
                                data-aos="fade-left"
                                data-aos-delay=""
                            >
                                CONFIRMED ORDERS
                            </h2>
                            <table className="returntable table table-hover">
                                <thead className="tableHead">
                                    <tr>
                                        <th scope="col">Order_Ref_No</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Date of Order</th>
                                        <th scope="col">Return</th>
                                    </tr>
                                </thead>
                                {orders.length>0 ? (
                                    <tbody>
                                        {orders.map(pro => (
                                            <tr
                                                key={pro.o_id}
                                                data-aos="fade-up"
                                                data-aos-delay=""
                                            >
                                                <td className="justify-content-center align-middle">
                                                    {pro.ref}
                                                </td>
                                                <td className="justify-content-center align-middle">
                                                    <img
                                                        src={
                                                            "/uploads/" +
                                                            pro.p_image
                                                        }
                                                        alt="Image placeholder"
                                                        className="return-image"
                                                    />
                                                </td>
                                                <td className="justify-content-center align-middle">
                                                    {pro.p_name}
                                                </td>
                                                <td className="justify-content-center align-middle">
                                                    {pro.qty}
                                                </td>
                                                <td className="justify-content-center align-middle">
                                                    ${pro.price}
                                                </td>
                                                <td className="justify-content-center align-middle">
                                                    {pro.dor}
                                                </td>
    
                                                <td className="justify-content-center align-middle">
                                                    {dateCheckHandler(
                                                        pro.dor,
                                                        pro.ref
                                                    ) ? (
                                                        <Link
                                                            to={{
                                                                pathname: "/return",
                                                                state: {
                                                                    c_id: pro.c_id,
                                                                    ref: pro.ref,
                                                                    p_name:
                                                                        pro.p_name,
                                                                    qty: pro.qty,
                                                                    price:
                                                                        pro.price,
                                                                    dor: pro.dor
                                                                }
                                                            }}
                                                            className="btn btn-md btn-primary return-button"
                                                        >
                                                            Return
                                                        </Link>
                                                    ) : countCheckHandler() ? (
                                                        <button
                                                            className="btn btn-md btn-danger return-button"
                                                            disabled
                                                            style={{
                                                                cursor:
                                                                    "not-allowed"
                                                            }}
                                                        >
                                                            Not Returnable
                                                        </button>
                                                    ) : (
                                                        <h6>
                                                            Your Return is
                                                            Processing
                                                        </h6>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                ) : (
                                    <tbody className="justify-content-center text-center w-100">
                                        <tr data-aos="fade-up" data-aos-delay="">
                                            <td colspan="7">
                                                <h2 className="col-offset-7 m-5">
                                                    No Confirmed Orders!!
                                                </h2>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
    
                        <h2
                            className="mt-5 md-2"
                            data-aos="fade-left"
                            data-aos-delay=""
                        >
                            UNCONFIRMED ORDERS
                        </h2>
                       <table className="returntable table table-hover">
                            <thead className="tableHead">
                                <tr>
                                    <th scope="col">Order_Ref_No</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Date of Order</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {unconfirmedOrders.length>0?
                            <tbody>
                                {unconfirmedOrders.map(pro => (
                                    <tr
                                        key={pro.o_id}
                                        data-aos="fade-up"
                                        data-aos-delay=""
                                    >
                                        <td className="justify-content-center align-middle">
                                            {pro.ref}
                                        </td>
                                        <td className="justify-content-center align-middle">
                                            <img
                                                src={"/uploads/" + pro.p_image}
                                                alt="Image placeholder"
                                                className="return-image"
                                            />
                                        </td>
                                        <td className="justify-content-center align-middle">
                                            {pro.p_name}
                                        </td>
                                        <td className="justify-content-center align-middle">
                                            {pro.qty}
                                        </td>
                                        <td className="justify-content-center align-middle">
                                            ${pro.price}
                                        </td>
                                        <td className="justify-content-center align-middle">
                                            {pro.dor}
                                        </td>
    
                                        <td className="justify-content-center align-middle">
                                            <h6>Waiting for Confirmation</h6>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>: (
                                    <tbody className="justify-content-center text-center w-100">
                                        <tr data-aos="fade-up" data-aos-delay="">
                                            <td colspan="7">
                                                <h2 className="col-offset-7 m-5">
                                                    No UnConfirmed Orders!!
                                                </h2>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                        </table>
                    </div>
                </div>
            </div>
        ) }
    return myOrders;
};

const mapStateToProps = state =>{
    return {
      auth: state.isAuth,
      role: state.role
    }
  }

export default connect(mapStateToProps)(Myorders);
