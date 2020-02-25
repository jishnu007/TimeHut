import React, { useState, useRef, useEffect } from "react";
import Modal from "react-awesome-modal";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

const returnOrders = props => {
    const myRef = useRef(null);
    const [intState, setIntState] = useState(false);
    const [visible, setVisible] = useState(false);

    // Form Handler
    const returnSubmitHandler = event => {
        event.preventDefault();
        const val = {
            c_id: props.location.state.c_id,
            ref: props.location.state.ref,
            dor: props.location.state.dor,
            price: props.location.state.price,
            reason: myRef.current.value
        };
        axios.post("/api/return", val)
        .then(response => {
            setIntState(true);
        })
        .catch(err => {
            console.log(err)
        });
    };

    if (intState === true) {
        return (
            <Redirect
                to='/myorders'
            />
        );
    }

    const openModal = () => {
        setVisible(true);
    };

    const closeModal = () => {
        setVisible(false);
    };
    
    return (
        <div className="container">
            <form class="form m-4" onSubmit={returnSubmitHandler}>
                <div class="form-group">
                    <label>Reason for Returning</label>
                    <select
                        class="form-control"
                        name="reason"
                        ref={myRef}
                        id="reason"
                    >
                        <option value="">Select Reason</option>
                        <option value="bad_product">Damaged/Bad Product</option>
                        <option value="incorrect_product">
                            Incorrect Product/Size Ordered
                        </option>
                        <option value="detail_mismatch">
                            Product Does Not Match Description on Website
                        </option>
                    </select>

                    <a
                        class="btn btn-md btn-primary return-button mt-4"
                        onClick={() => openModal()}
                    >
                        Submit
                    </a>
                    <Modal
                        visible={visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => closeModal()}
                    >
                        <div class="justify-content-center">
                            <h1 class="text-center">ORDER RETURN</h1>
                            <p class="pl-5 pt-4">
                                Reference No:{props.location.state.ref}
                            </p>
                            <p class="pl-5">
                                Product Name:{props.location.state.p_name}
                            </p>
                            <p class="pl-5">
                                Price:{props.location.state.price}
                            </p>
                            <div class="text-center">
                                <a
                                    class="btn btn-md btn-primary return-button mt-4"
                                    href="javascript:void(0);"
                                    onClick={() => closeModal()}
                                >
                                    Cancel
                                </a>
                                <button
                                    class="btn btn-md btn-danger mt-4 ml-3"
                                    onClick={() => closeModal()}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </form>
        </div>
    );
};

export default returnOrders;
