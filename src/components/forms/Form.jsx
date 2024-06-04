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
        <div className='flex flex-row h-screen'>
            <div className="grid-item1 ">
               {/* basis-1/2 bg-[url('../../assets/image13.png')] bg-no-repeat bg-center bg-cover h-screen */}
              <p className='text-white text-6xl font-bold font-roboto absolute bottom-[10vh] left-20  break-all '>Discover new things on  <br />Superapp</p>
            </div>
            <div className='basis-1/2 flex flex-col bg-black  items-center pt-[8vh] ' >
                <div className=' '>
                    <h1 className=' font-single text-[#72DB73] text-6xl '>Super app</h1>
                    <p className='text-white my-5 '> Create your new account</p>
                </div>
                <form 
                   onSubmit={handleSubmit}
                   className='flex flex-col gap-4 max-w-[50vw] mt-4 '
                  > 
                    <div>
                        <input 
                            type="text" 
                            name='name' 
                            id='name' 
                            onChange={handleChange} 
                            placeholder='Name'
                            style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                            className='border-2 rounded w-[25vw] h-[5.5vh] font-DmSans text-[#7C7C7C] bg-[#292929] text-lg pl-2 '
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
                            style={{border:`1px solid ${errors.name.length > 0 ? "red" :"green"}`}} 
                            className='border-2 rounded w-[25vw] h-[5.5vh] font-DmSans text-[#7C7C7C] bg-[#292929] text-lg pl-2 '
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
                            style={{border:`1px solid ${errors.name.length > 0 ? "red" :"green"}`}} 
                            className='border-2 rounded w-[25vw] h-[5.5vh] font-DmSans text-[#7C7C7C] bg-[#292929] text-lg pl-2 '
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
                            style={{border:`1px solid ${errors.name.length > 0 ? "red" :"green"}`}} 
                            className='border-2 rounded w-[25vw] h-[5.5vh] font-DmSans text-[#7C7C7C] bg-[#292929] text-lg pl-2 '  
                        />
                        <p style={{color:"red"}}>{errors.mobile}</p>
                    </div>
                    <div>
                      <input 
                          type="checkbox" 
                          name='checkbox' 
                          id='checkbox' 
                          onChange={handleCheckbox} 
                          style={{border:`1px solid ${errors.checkbox.length > 0 ? "red" :"green"}`}} 
                          className='border-2 rounded bg-[#D9D9D9] '
                      />
                      <label htmlFor="checkbox" className='text-[#7C7C7C] font-DmSans font-normal text-5 ml-2 '>Share my registration data with Superapp</label>
                      <p style={{color:"red"}}>{errors.checkbox}</p>
                    </div>
                    
                  <button type='submit' className=' rounded-full text-white bg-[#72DB73] py-2 ' >SIGN UP</button>
                </form>
                <div className='w-[25vw] text-left '>
                   <p className='text-[#7C7C7C] font-roboto font-medium text-xs leading-6 2xl:text-sm '>By clicking on Sign up. you agree to Superapp <span className='text-[#72DB73]'>Terms and Conditions of Use</span> </p>
                   <p className='text-[#7C7C7C] font-roboto font-medium text-xs leading-6 2xl:text-sm  '>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='text-[#72DB73]'>Privacy Policy</span> </p>
                </div>
            
            </div>
        </div>
  )
}

 