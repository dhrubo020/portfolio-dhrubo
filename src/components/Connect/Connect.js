import React, { useState } from 'react';
import './Connect.css';
import emailjs from 'emailjs-com';


const Connect = () => {

    const [info , setInfo] = useState({
        name:'',email:'', message:''
    })
    const handleChange=(e)=>{
        const newInfo = {...info}
        console.log(e.target.value)
        if(e.target.name === 'user_name'){
            newInfo.name = e.target.value;
        }else if(e.target.name === 'user_email'){
            newInfo.email = e.target.value;
        }else if(e.target.name === 'message'){
            newInfo.message = e.target.value;
        }
        setInfo(newInfo);
    }
    
    const sendEmail =(e)=> {
        e.preventDefault();
        console.log(info);

        emailjs.sendForm('service_rcqd94u', 'template_3qk1qxw', e.target, 'user_pOE3dA6V19K2fwmaJBOAp')
          .then((result) => {
              console.log(result.text);
              window.alert("Your message is send successfully")
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="center">
            <div className ="col-md-6 col-sm-12 bg-form px-3 py-5">
                <h4>Say Something</h4>
                <form className="p-4" onSubmit={sendEmail}>
                    <div className="form-group">
                        <input name="user_name" onChange={handleChange} type="text" className="form-control"   placeholder="Your Name" required/>
                    </div>
                    <div className="form-group">
                        <input name="user_email" onChange={handleChange} type="text" className="form-control"   placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" onChange={handleChange} type="text" className="form-control py-3"   placeholder="Your Message" required/>
                    </div>
                    <input type="submit" className="btn-brand" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Connect;