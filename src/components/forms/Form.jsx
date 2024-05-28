import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './form.css'



export default function Form() {
  const navigate =useNavigate();
  const[formData,setFormData]= useState({
    name: '',
    username:'',
    email:'',
    mobile:'',
    checkbox:false,
  });
  const[errors,setErrors]= useState({
    name:"",
    username:"",
    email:"",
    mobile:"",
    checkbox:"",
  });

  const handleChange = (e) => {
      console.log(e.target.value)
      setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
      setFormData({...formData, [e.target.name]: e.target.checked });
  };


  const handleSubmit = (e) => {
    
    e.preventDefault();
    let newErrors ={...errors};
    // console.log(newErrors);
    if(formData.name.trim().length === 0 ||
       formData.name === undefined ||
       formData.name === null ){
      newErrors.name = "Name is required";
    }else{
      newErrors.name = "";
    }

    if(formData.username.trim().length === 0 ||
       formData.username === undefined || 
       formData.username === null){
      newErrors.username = "Username is required";
    }else{
      newErrors.username = "";
    }

    if(formData.email.trim().length === 0 ||
       formData.email === undefined || 
       formData.email === null){
      newErrors.email = "Email is required";
    }else{
      newErrors.name = "";
    }

    if(formData.mobile.trim().length === 0 ||
       formData.mobile === undefined || 
       formData.mobile === null){
      newErrors.mobile = "Number is required";
    }else{
      newErrors.mobile = "";
    }

    if(!formData.checkbox){
      newErrors.checkbox = "Check this box if you want to proceed";
    }else{
      newErrors.checkbox = "";
    }

    setErrors({...newErrors});
     
    if(
        newErrors.name === ""  &&
        newErrors.username === "" &&
        newErrors.email === "" &&
        newErrors.mobile === "" &&
        newErrors.checkbox === ""
      ){
        localStorage.setItem("userData",JSON.stringify(formData));
        navigate('/genre')

      }
  };
  return (
        <div className='container'>
            <div className='grid-item1'>
              {/* <img src={image1} alt="error" /> */}
            </div>
            <div className='grid-item2'>
                <div className='heading'>
                    <h1>Super app</h1>
                    <p>Create your new account</p>
                </div>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            onChange={handleChange} 
                            placeholder='Name'
                            style={{
                              border:`1px solid ${errors.name.length > 0 ? "red" :"green"}`,
                              borderRadius:"5px",
                              width:'25vw',
                              height:'6vh'
                            }} 
                        />
                        <p style={{color:"red"}}>{errors.name}</p>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='username' 
                            id='username' 
                            onChange={handleChange} 
                            placeholder='Username'
                            style={{
                              border:`1px solid ${errors.username.length > 0 ? "red" :"green"}`,
                              borderRadius:"5px",
                              width:'25vw',
                              height:'6vh'
                            }} 
                        />
                        <p style={{color:"red"}}>{errors.username}</p>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name='email' 
                            id='email' 
                            onChange={handleChange} 
                            placeholder='Email' 
                            style={{
                              border:`1px solid ${errors.email.length > 0 ? "red" :"green"}`,
                              borderRadius:"5px",
                              width:'25vw',
                              height:'6vh'
                            }} 
                        />
                        <p style={{color:"red"}}>{errors.email}</p>
                    </div>
                    <div>
                        <input 
                            type="tel" 
                            name='mobile' 
                            id='mobile' 
                            onChange={handleChange} 
                            placeholder='Mobile'
                            style={{
                              border:`1px solid ${errors.mobile.length > 0 ? "red" :"green"}`,
                              borderRadius:"5px",
                              width:'25vw',
                              height:'6vh'
                            }}  
                        />
                        <p style={{color:"red"}}>{errors.mobile}</p>
                    </div>
                    <div>
                      <input 
                          type="checkbox" 
                          name='checkbox' 
                          id='checkbox' 
                          onChange={handleCheckbox} 
                          style={{
                            border:`1px solid ${errors.checkbox.length > 0 ? "red" :"green"}`,
                            borderRadius:"5px",
                            
                          }} 
                      />
                      <label htmlFor="checkbox">Share my registration data with Superapp</label>
                      <p style={{color:"red"}}>{errors.checkbox}</p>
                    </div>
                    
                  <button type='submit'>SignUp</button>
                </form>
            </div>
        </div>
  )
}

 