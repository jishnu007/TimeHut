import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product/Product';

const Products = () => {
    const[first,setfirst]=useState(true);
    const [products,setProducts] = useState([]);
    const [ searchValue, setSearchValue] = useState('');

    useEffect(()=>{
        setfirst(false);
    },[searchValue])

    useEffect(() => {
    if(first){axios.get('/api/products').then(response => {
        setProducts(response.data);
     })
       
    }
      },[]);

    return(
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="col-lg-12 mb-2">
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
                    <div className="row">
                    <div className="row mb-5">

                    {
                        !searchValue ? 
                        products.map( p => {
                            return <React.Fragment key={p.id}>
                                <Product 
                                price={p.price}
                                product_name={p.p_name}
                                category={p.category}
                                image1={p.p_image}
                                id={p.id}
                                />
                            </React.Fragment> 
                        })
                        :
                        products.map(p=>{
                        if(p.p_name.toLowerCase().includes(searchValue.toLowerCase()) || p.category.toLowerCase() === searchValue.toLowerCase())
                                {
                            return <React.Fragment key={p.id}>
                            <Product 
                                price={p.price}
                                product_name={p.p_name}
                                category={p.category}
                                image1={p.p_image}
                                id={p.id}
                                />
                            </React.Fragment> 
                            }
                        })
                    }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Products;