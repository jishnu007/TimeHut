import React,{useState,useEffect} from 'react';
import './ShowSupplier.css';
import axios from 'axios';
import ShowSupplierInScreen from './ShowSupplierInscreen';
import Spinner from '../../UI/spinner/Spinner';
const Supplier = (props) => {
    const name=props.data;
    const [SingleData, setSingleData] = useState([]);
    const [eachProduct ,seteachProduct]=useState([]);
    const [showData,setShowData]=useState(false);
    useEffect(() => {
        axios
            .get("api/showSupplier/" + name)
            .then(res => {
                setSingleData(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios
            .get("api/showSupplierProducts")
            .then(res => {
                seteachProduct(res.data);
                setShowData(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, [name]);

    const showeachProductHandler = () => {
        setShowData(false);
    };
    let showSupplier = null;

    if (showData) {
        eachProduct.map(c => {
            SingleData.map(v => {
                if (c.p_id === v.p_id) {
                    showSupplier = (
                        <ShowSupplierInScreen
                            image1={c.p_image}
                            description={c.description}
                            product_name={c.p_name}
                            s_id={name}
                            p_id={v.p_id}
                        />
                    );
                }
            });
        });
    }else {
        showSupplier=<Spinner/>;
    }

    return (
        <div className="holder-single-supplier-product">
            {showSupplier}
        </div>
    );
}
 
export default Supplier;

