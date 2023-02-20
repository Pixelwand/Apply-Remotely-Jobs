import {useForm} from 'react-hook-form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup =  () =>{
     const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const formSubmit = async(data) => {
        const response = await fetch("http://localhost:8080/user/register", {
             method:'POST',
             headers:{
               'content-Type':'application/json'
             },
             body:JSON.stringify(data)
       
           }).then((res)=>{
             console.log("User Created Successfully", data)
           }).then(
            navigate('/dashboard')
           )
         
           return () => {
             response.json()
           }
         }
       
       const [value, setValue] = useState('');

       const changeHandler = ()=>{
        setValue(value)
      }
    
    return(
        <>
        <div class="px-4 pb-2">
            <form onSubmit={handleSubmit(formSubmit)}>
              <fieldset class="text-center font-semibold text-base mb-8 font-sans">Sign up with your email<hr class="mt-3 font-" /></fieldset>
              
              <div class="mb-8 font-xl">
              <label>
                <input onChange={changeHandler}  name='name' type={"text"} class="outline outline-2 outline-offset-1 focus:outline-4 outline-blue-400 placeholder:text-black placeholder:text-base rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Enter Your Name'
                {...register("name", {required:true})}
                
                />
              </label>
              {errors.name && <p class="text-red-600 font-normal">please check your Full Name!</p>}
              </div>
              
              <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='email' class="w-72  h-10 pl-5 outline outline-2 outline-offset-1 focus:outline-4 outline-blue-400 placeholder:text-black rounded-lg" type={"email"} placeholder='Email'
                {...register("email", {required:true, pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
              </label>
              {errors.email && <p class="text-red-600 font-normal">Please check your Email!</p>}
              </div>
              <div class="mb-8 ">
              <label>
                <input name='number' onChange={changeHandler} class="w-72  h-10 pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black focus:outline-4 rounded-lg" placeholder='Phone Number'
                {...register("number", {required:true, minLength:10, maxLength:10})}
                ></input>
              </label>
              {errors.number && <p class="text-red-600 font-normal">Please check your phone number!</p>}
              </div>
              <div class="mb-5">
                <label>
                  <input name='password' onChange={changeHandler} class="w-72 focus:outline-4  h-10 pl-5 outline outline-2 outline-offset-1 outline-blue-400 placeholder:text-black rounded-lg" type={"password"} placeholder="Create New Password"
                  {...register("password", {required:true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}
                  />
                </label>
                {errors.password && <p class="text-red-600 font-normal">Please check your password!</p>}
              </div>
              <div class="mb-5">
                <input type={"checkbox"} 
                {...register("checkbox", {required:true})}
                />
                <label class="font-sans text-sm ml-5">I agree to the <a href="#/" class="text-blue-700 font-semibold">Terms of Service</a> and <a href='#/' class="font-semibold font-sans text-blue-700">Privacy Policy</a></label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-3xl w-5/6 px-6 py-3" type='submit'>Create account</button>
              </div>
            </form>
          </div>

        </>
    )
}