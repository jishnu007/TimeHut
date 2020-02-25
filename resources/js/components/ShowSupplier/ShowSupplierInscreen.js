import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ModalSuccess from '../../UI/Modal/SuccessModal';

const SupInScreen = (props) => {
    const[showForm,setshowForm]=useState(false);
    const [qty,setqty]=useState(props.qty);
    const [SuccessMsg,setSuccessMsg]=useState('');
    const [errorMsg,seterrorMsg]=useState('');
    useEffect(() => {
        setTimeout(() => {
            setSuccessMsg("");
        }, 2000);
    }, [SuccessMsg]);

    const onClickHanlder=()=>{
        setshowForm(!showForm);
    }

    const orderMake=()=>{
        const dataToUp = {
            s_id: props.s_id,
            p_id: props.p_id,
            Count: qty
        };
        axios.post('api/MakeOrder', dataToUp).then(res=>{
            setSuccessMsg(res.data);
        }).catch(err=>{
            seterrorMsg(err);
            console.log(err)
        });
    }
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 align-self-center">
            <div className="card mb-4">
                <div className="view overlay">
                    <img
                        className="card-img-top"
                        src={"/uploads/" + props.image1}
                        alt="Card image cap"
                    />
                    <a href="">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.product_name}</h4>
                    <p className="card-text">{props.description}</p>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded waves-effect"
                        onClick={onClickHanlder}
                    >
                        {showForm ? "Cancell Order" : "Add More"}
                    </button>
                </div>

                <div
                    style={{
                        opacity: showForm ? "1" : "0",
                        transition: ".3s ease"
                    }}
                >
                    <p style={{ textAlign: "center", color: "#dba614" }}>
                        Add More Qty
                    </p>
                    <div className="input-group mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter New Quantity"
                            aria-label="Enter New Quantity"
                            aria-describedby="basic-addon2"
                            value={qty}
                            onChange={() => setqty(event.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-primary btn-rounded "
                                type="button"
                                onClick={orderMake}
                            >
                                Make Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {SuccessMsg != "" ? <ModalSuccess msg={SuccessMsg} /> : null}
            {errorMsg != "" ? <ModalSuccess msg={errorMsg} /> : null}
        </div>
    );
}
 
export default SupInScreen;