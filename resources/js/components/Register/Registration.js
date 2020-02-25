import React, { useState , useEffect } from 'react';

    const Registration = (props) => {



    const[isvalid,setisvalid] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone:'',
        address: '',
        password: '',
        confirm: ''
      });

      const [validation, setvalidation] = useState({
        valname: '',
        valemail: '',
        valphone:'',
        valaddress: '',
        valpassword: '',
        valconfirm: ''
      });

      const register = e => {
    e.preventDefault();

    let len = false;
    let checkmail = form.email;
    axios.get(`/api/checkmail/${checkmail}` )
        .then(response => {
      ;
          if(response.data.length===0){
          len=true;
          }
      
        
          }).then(reslength =>{

        
    if (len===false){

          alert("email already exist....please register with another email");
    }
    else if(form.name && form.email && form.password && form.address && isvalid )
    {
    const val = {
    name: form.name,
    email: form.email,
    phone:form.phone,
    adress:form.adress,
    password:form.password
    }

        axios.post('/api/register', val)
        .then(response => {
          
            props.history.push('/login')
          })
          .catch(err=>{
            alert("sorry , registration failed ");
        })
    }
    

    else{
        alert(' Incorrect values,enter valid values');
        props.history.push('/register')
    }

    }  ).catch(err=>{
      alert("sorry ,Registration Failed... Network Error");
    });  

      };



    const handleFieldChange = (event) => {
        setForm({
            ...form,
            [(event.target.name)] : event.target.value
          });
    };

      useEffect(() => {
      
      let formvalid = true;
      if (form.name) {
        let valid = true;
      valid = form.name.length >= 4 && valid;
        valid = form.name.trim() !== '' && valid;
        const pattern = /^[a-zA-Z ]*$/
        valid = pattern.test(form.name) && valid;
      
        if( valid ) {  (setvalidation({
            ...validation,
            valname : null
          }))
        }else{ (setvalidation({
            ...validation,
            valname : 'Enter a valid name with min 4 characters.'
          }))}
          formvalid = formvalid && valid;  
    }
    
   if (form.email) {
      
        let valid = true;
       valid = form.email.length >= 3 && valid;
        valid = form.email.trim() !== '' && valid;
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        valid = pattern.test(form.email) && valid;
        
        valid ?  (setvalidation({
            ...validation,
            valemail : null
          }))
          : (setvalidation({
            ...validation,
            valemail : 'Enter a valid email.'
          }))
          
          formvalid = formvalid && valid;
           
    }
    if (form.phone) {
        let valid = true;
        valid = form.phone.trim() !== '' && valid;
        const pattern = /^\d{10}$/;
        valid = pattern.test(form.phone) && valid;
        valid ?  (setvalidation({
            ...validation,
            valphone : null
          }))
          : (setvalidation({
            ...validation,
            valphone : 'Enter a valid phone number.'
          }))
          formvalid = formvalid && valid;  
    }
    if (form.address) {
        let valid = true;
       valid = form.address.length >= 5 && valid;
        valid = form.address.trim() !== '' && valid;
    
        valid ?  (setvalidation({
            ...validation,
            valaddress : null
          }))
          : (setvalidation({
            ...validation,
            valaddress : 'Address should be min 5 characters.'
          }))
          formvalid = formvalid && valid;  
    }
    if (form.password) {
        let valid = true;
       
        valid = form.password.trim() !== '' && valid;
        const pattern = /^[A-Za-z]\w{7,14}$/;
        valid = pattern.test(form.password) && valid;
        valid ?  (setvalidation({
            ...validation,
            valpassword : null
          }))
          : (setvalidation({
            ...validation,
            valpassword : 'Password must be 7 to 15 characters and first character must be a letter.'
          }))
          formvalid = formvalid && valid;  
    }
    if (form.confirm) {
        let valid = true;
       
        valid =(form.password===form.confirm) && valid;
        valid ?  (setvalidation({
            ...validation,
            valconfirm : null
          }))
          : (setvalidation({
            ...validation,
            valconfirm : 'Password not matching.'
          }))
          formvalid = formvalid && valid;  
    }
   


    setisvalid(formvalid);

  },[form]);

    return ( 
        <div className="container">
                <div className="row">
                <div className="offset-lg-1 col-lg-4 offset-md-2 col-md-8 bg-light mt-5 pt50  align-self-center">
                <div className="row align-items-center justify-content-center">


              
                    <img src="images/timehut-logo.jpg" alt="timehut" className="img rounded"/>
                
                </div>

                </div>
                <div className="col-lg-6 offset-lg-1 offset-md-2 col-md-8 bg-light mt-5" >
                <h1 className="text-center text-warning">REGISTER</h1>
                <form >
                    <div className="row">
                 <label className="offset-2 col-10 text-info">
                    Name:</label>
                     <input type="text" name="name" onChange={handleFieldChange}   className="offset-2 col-8 offset-2 pt-1 pb-1"/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valname}</p>
                     </div>


                     <div className="row">
                     <label className="offset-2 col-10 text-info" > 
                    Email:</label> 
                     <input type="text" name="email" onChange={handleFieldChange} className="offset-2 col-8 offset-2 pt-1 pb-1"/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valemail}</p>
                     </div> 
                    
                     <div className="row">
                     <label className="offset-2 col-10 text-info "> Phone:</label>
                     <input type="text" name="phone" onChange={handleFieldChange} className="offset-2 col-8 offset-2 pt-1 pb-1"/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valphone}</p>
                     </div>


                     <div className="row">
                        <label className="offset-2 col-10 text-info"> Address:</label>
                     <input type="text-area" name="address" onChange={handleFieldChange} className="offset-2 col-8 offset-2 pt-1 pb-1"/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valaddress}</p>
                     </div>


                     <div className="row">
                        <label className="offset-2 col-10 text-info"> Password:</label>
                     <input type="password" name="password" onChange={handleFieldChange} className="offset-2 col-8 offset-2 pt-1 pb-1"/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valpassword}</p>
                     </div>



                     <div className="row">
                        <label className="offset-2 col-10 text-info">Confirm Password:</label>
                     <input type="password" name="confirm" onChange={handleFieldChange} className="offset-2 col-8 offset-2 mb-4 pt-1 pb-1 "/>
                     <p className="offset-2 col-8 offset-2 pt-1 pb-1 text-danger" >{validation.valconfirm}</p>
                     </div>
                     <div className="row">
                     <div className="intro-text text-center text-center col-12">
                        <p>
                          <button onClick={register} className="btn btn-sm btn-primary ">Register Now</button>
                        </p>
                      </div>
                        </div>
                     </form>
                </div>

                </div>         
            </div>
     );
}

export default Registration;