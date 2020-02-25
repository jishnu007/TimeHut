import React , { useState, useEffect  } from 'react';
import  './Stock.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

const  stock = (props) => {

    const [firstId,setFirstId] = useState('');
    const [secondId,setSecondId] = useState('');

    const [stock,setStock] = useState([]);
    const [price,setPrice] = useState('');
    const [input,setInput] = useState('false');
    const [input1,setInput1] = useState('false');
    const [warehouse,setWarehouse] = useState('');

    useEffect(() => {
        axios.get('/api/stock')
        .then(res => {
          setStock(res.data);
    }).catch(err=>{
        alert(err.message);
        console.log(err)
    })
    
},[]);

const Validation =(id, e)=>{
    
    
    setInput('true');
    setFirstId(id);
    setPrice(e.target.value);
}
const Validation1 =(id,e)=>{
    
    setInput1('true');
    setSecondId(id);
    setWarehouse(e.target.value);
}
 
// price,ware,id
const updateData=(...e)=>{
    if (input == 'true' && input1 == 'true') {
        const updated={p_id:e[0],
            p_name:e[1],
            price:e[2],
            cost:e[3],
            warehouse:e[4],
            firstId:e[5],
            secondId:e[6]
        };
            axios.post('/api/insert',updated)
                .then(res => {
                    alert(res.data);   
                    // window.location.reload(false);   
            }).catch(err=>{
                // alert(err.message);
                console.log(err)
            })
        
    }else{
        alert("Feilds Empty")
    }
    
    
}
const btnhandler=(price,id)=>{
    if(price!='' && warehouse!='' && id === firstId){
        return true
    }
    else{
        return false
    }
}



    return ( 
        <div className="Stock">
            <div className="StockTable">
                <div className="container">
                    <h2 className="d-flex justify-content-center">Stock Details Adding</h2>
                    <table className="table table-hover table-fixed">
                    <thead>
                        <tr >
                        <th>#</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Warehouse</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {stock.map(s => (
                        
                        <tr key ={s.id}>
                        <th scope="row">{s.id}</th>
                        <td>{s.p_id}</td>
                        <td>{s.p_name}</td>
                        <td><input className="form-control" type="number" placeholder="Price"  onChange={(e) => Validation(s.p_id, e)} /></td>
                        <td>{s.price}</td>
                        <td><input className="form-control" type="text" placeholder="Warehouse"  onChange={(e) => Validation1(s.p_id, e)}/></td>
                        <td>{btnhandler(price,s.p_id)?
                            <button type="submit" className="btn btn-primary"  onClick={() => updateData(s.p_id,s.p_name,s.price,price,warehouse,firstId,secondId) }>Add</button>
                            :<button type="submit" className="btn btn-primary"  disabled >Add</button>}
                            </td>
                            </tr>

                        
                    )) }
                        <tr>
                        </tr>
                    </tbody>
                    </table>
                    <div className="d-flex justify-content-center"> 

                        <button type="submit" className="btn btn-primary " to='/stockview' ><NavLink className="NavButtonColor" to='/stockview'>View Stock Details</NavLink></button>
                        
                    </div> 
                    
                </div>
            </div>
            {props.children}
        </div>
     );
}
 
export default stock;

