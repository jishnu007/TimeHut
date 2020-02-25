import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/actions' ;

const login=(props)=>{
   const[initialEmail,setEmail]=useState('');
   const[datalength,setDatalength]=useState(false);
   const[initialPassword,setPassword]=useState('');
   const[initialRole,setRole]=useState('Customer');
   const [data ,setdat]=useState([]);
   const [valid, setValid] = useState(true);
   const[demo,setDemo]=useState('');

   const handleCreateNewProject =(event)=> {
        event.preventDefault();
        let isvalid =validationHandler(event);
        if(isvalid)
        {
            if(initialRole=="Customer")
            {
                axios.get(`/api/login/${initialEmail}/${initialPassword}`)
                .then(response => {
                    setdat(response.data)
                    if(response.data.length==0)
                    {
                        setDatalength(true);
                        setDemo(response.data[0].password);
                    }
                    else{
                        setDatalength(false);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
            else if(initialRole=="Admin"){
                axios.get(`/api/adminlogin/${initialEmail}/${initialPassword}`)
                .then(response => {
                    setdat(response.data)
                    if(response.data.length==0)
                    {
                        setDatalength(true);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
        }

      const validationHandler = (event) => {
        let isValid = true;
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        isValid = pattern.test(initialEmail) && isValid
        setValid(isValid);
        return isValid
      }

    let c=data.map(c=>{
        if(c.c_email===initialEmail && initialPassword===c.password ){
        localStorage.setItem('loggedId', c.c_id);
        if(initialRole==='Admin'){
            localStorage.setItem('loggedRole', initialRole);
        }else if(initialRole==='Customer'){
            localStorage.setItem('loggedRole', initialRole);
        }
        const loggedId = localStorage.getItem('loggedId');
        const loggedRole = localStorage.getItem('loggedRole');
        props.onLogin(loggedId,loggedRole);
        props.history.push('/')
        }
      })

    let messageCheck = "";
    datalength ? null : messageCheck=" ";
    if(datalength==true)
    {
            messageCheck= <div className="alert alert-danger col-6 offset-3 mt-5">
            <strong>FAILED!</strong> Authentication failed
            </div>;
    }

    let message = ""
    if(valid==false){
        message=<p className="text-danger">Invalid Email</p>
    }

    return(
    <React.Fragment>
        <div className="shadow p-3 p-lg-5 border mt-5 text-center col-4 offset-4 mb-5">
            <form className="login100-form validate-form flex-sb flex-w " onSubmit={handleCreateNewProject}>
                <h1>LOGIN</h1>
                <div className="wrap-input100 validate-input m-b-36" data-validate = "email is required">
                    <input className="form-control mt-4" type="text" placeholder="someone@example.com" name="email" value={initialEmail} onChange={()=>setEmail(event.target.value)}/>
                    <span className="focus-input100"></span>
                    {message}
                </div>
                <div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
                    <span className="btn-show-pass">
                        <i className="fa fa-eye"></i>
                    </span>
                    <input className="form-control mt-4" type="password" placeholder="password" name="pass" value={initialPassword} onChange={()=>setPassword(event.target.value)}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="flex-sb-m w-full p-b-48">
                <select className="form-control mt-4" value={initialRole} onChange={()=>setRole(event.target.value)}>
                    <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                </select>
                </div>
                <div className=" flex-sb-m w-full p-b-48 mt-4 mb-5">
                    <button type="submit" className="float-left btn btn-info">
                        Login
                    </button>
                    <p>
                        <NavLink to='/register' className="btn btn-sm btn-success float-right" style={{'color': 'white'}}>Register</NavLink>
                    </p>
                </div>
            </form>
        </div>
        {c}
        {messageCheck}
    </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (id,role)=>dispatch(actions.login(id,role))
    }
}

export default connect(null, mapDispatchToProps)(login);
