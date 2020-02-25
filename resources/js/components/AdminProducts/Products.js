import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../ProductPage/Products/Product/Product';
import {connect} from 'react-redux'

const Products = (props) => {
    const[first,setfirst]=useState(true);
    const [products,setProducts] = useState([]);
    const [ searchValue, setSearchValue] = useState('');
    const [supplier,setSupplier] = useState('');
    const [stock, setStock] = useState([]);
    const [supplierList, setSupplierList] = useState([]);
    const toUpdateAgain=props.role;
    console.log('component Mounted'+toUpdateAgain);

    useEffect(()=>{
        console.log('component Mounted'+toUpdateAgain);
    },[toUpdateAgain]);

    useEffect(()=>{
            setfirst(false);
        },[searchValue])

        useEffect(() => {
        if(first){axios.get('/api/products')
        .then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
        .catch(err => {
            console.log(err)
        })}
    },[]);

    useEffect(() => {
            if(supplier === 'all'){
                setSupplier('');
            }
            else if(supplier !== ''){
            setStock([]);
            axios.get(`/api/search/${supplier}`)
            .then(response =>{
            setStock(response.data);
        })
        .catch(err => {
            console.log(err)
        })}
    },[supplier]);

    useEffect(() => {
            axios.get(`/api/supplierList`)
            .then(response =>{
            setSupplierList(response.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]);


    return(
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="row">
                    <div className="col-lg-6 mb-2 text-center">
                        <form action="" className="site-block-top-search">
                        <span className="icon icon-search2"></span>
                        <input type="text" 
                        className="form-control border-0" 
                        placeholder="Search"
                        aria-label="Search" 
                        onInput={(e)=>setSearchValue(e.target.value)}
                        />
                        </form>
                    </div>
                    <p className="col-lg-3 mb-2 text-right">Search by Category: </p>
                    <div className="col-lg-3 mb-2 text-left">
                    <select id="select" onInput={(e)=>setSupplier(e.target.value)}>
                        <option value="all">All</option>
                        {supplierList.map(c => {
                        return (
                            <option value={c.s_name} key={c.s_name}>
                                {c.s_name}
                            </option>
                        );})}
                    </select>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="row mb-5">

                    {
                        (searchValue &&  supplier) ?
                        stock.map(p => {
                            if(p.p_name.toLowerCase().includes(searchValue.toLowerCase()) || p.category.toLowerCase() === searchValue.toLowerCase()) {
                                return <React.Fragment key={p.id}>
                                <Product price={p.price}
                                product_name={p.p_name}
                                category={p.category}
                                image1={p.p_image}
                                id={p.id}
                                />
                                </React.Fragment> 
                            }
                        }) 
                        :
                        ((searchValue) ? products.map(p=>{
                            if(p.p_name.toLowerCase().includes(searchValue.toLowerCase()) || p.category.toLowerCase() === searchValue.toLowerCase())
                                    {
                                return <React.Fragment key={p.id}>
                                <Product price={p.price}
                                product_name={p.p_name}
                                category={p.category}
                                image1={p.p_image}
                                id={p.id}
                                />
                                </React.Fragment> 
                                }
                            }): (supplier) ? stock.map(p => {
                                return <React.Fragment key={p.id}>
                                <Product price={p.price}
                                product_name={p.p_name}
                                category={p.category}
                                image1={p.p_image}
                                id={p.id}
                                />
                                </React.Fragment> 
                            }): products.map( p => {
                                return <React.Fragment key={p.id}>
                                    <Product price={p.price}
                                    product_name={p.p_name}
                                    category={p.category}
                                    image1={p.p_image}
                                    id={p.id}
                                    />
                                </React.Fragment> 
                            }))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStatetoProps=state=>{
    return{
        role:state.role
    }
}
export default connect(mapStatetoProps)(Products);