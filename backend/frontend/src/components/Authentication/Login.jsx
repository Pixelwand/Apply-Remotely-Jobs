import React, {useState} from 'react';
import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import { useForm } from 'react-hook-form';


export const Login = () => {
    // const {register, handleSubmit, formState:{errors}} = useForm();

    // const [value, setValue] = useState("");

    // const changeHandler = ()=>{
    //     setValue(value)
    // }
    

    // const formSubmit = async () => {
      
    // await fetch("http://localhost:8080/user/login", {
    //   method:'POST',
    //   headers:{
    //     'content-Type':'application/json'
    //   },
    //   body:JSON.stringify(),

    // } ).then((result)=>{
    //   console.log("User found Successfully")
    // })
    // }


    // const navigate = useNavigate();
    

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const changeHandler = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const formSubmit = () => {
        axios.post("http://localhost:8080/user/login", user)
        .then(res => {
            // alert(res.data.message)
            // setLoginUser(res.data.user)
            // navigate.push("/dashboard")
        })
    }

  return (
    <>
    <div class="p-2 pb-2">
    <form onSubmit={formSubmit}>
      <fieldset  class="text-center font-semibold text-base mb-8">Login with email</fieldset>
      <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='email' class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans"  type={"email"} placeholder='Email'  value={user.email}
                // {...register("email",{required:true})}
                />
              </label>
              {/* {errors.email && <p>Please user correct email</p>} */}
              </div>
              <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='password'  value={user.password}  class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans" type={"password"} placeholder='Enter Your Password'
                // {...register("password", {required:true})}
                />
              </label>
              {/* {errors.password && <p>Please use correct password!</p>} */}
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl px-6 py-3 w-5/6 rounded-3xl" type='submit'>Login</button>
              </div>
    </form>
    </div>

    </>
  )
}
