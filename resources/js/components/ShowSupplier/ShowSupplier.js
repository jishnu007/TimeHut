import React,{useState,useEffect} from 'react';
import './ShowSupplier.css';
import axios from 'axios';
import Head from './Holder/HeadSection'
import SupplierData from './supplierdata';

const ShowSupplier = () => {     
    const [Supplied, setSupplied] = useState(" ");
    const[sup,setSup]=useState([]);
    useEffect(() => {
        axios
            .get("api/fetchSupplier")
            .then(res => {
                setSup(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const SetRedirection =(event)=>{
         setSupplied(event.target.value);
    }

    let ShowSupplier=null;
    if(Supplied !==' '){
        ShowSupplier = <SupplierData data={Supplied} />;
    }
    return (
        <React.Fragment>
            <div className="select-Holder">
                <Head />
                <div className="row">
                    <h1 className="showSupplier_H1_tag text-center">
                        Choose The Supplier To Update The Quantity
                    </h1>
                </div>
                <div className="row">
                    <select
                        className="browser-default custom-select"
                        onChange={() => SetRedirection(event)}
                        value={Supplied}
                    >
                        <option>Open This To Select Supplier</option>
                        {sup.map(c => {
                            return (
                                <option value={c.s_id} key={c.s_id}>
                                    {c.s_name}
                                </option>
                            );})}
                    </select>
                </div>
            </div>
            {ShowSupplier}
        </React.Fragment>
    );
}
 
export default  ShowSupplier;

