import React, {useState, useEffect} from 'react';
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
// import useToken from '../../useToken';



 

 

export default function Login({setToken}){
    const {register, handleSubmit, formState:{errors}} = useForm();
    // const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") || false);
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const credentials = {email, password}

    async function loginUser(credentials) {
      console.log(credentials)
      return fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
     }
    // const [user, setUser] = useState();

    // useEffect(() => {
    //   const loggedInUser = localStorage.getItem("user");
    //   if (loggedInUser) {
    //     const foundUser = JSON.parse(loggedInUser);
    //     setUser(foundUser);
    //   }
    // }, []);
    // const [value, setValue] = useState("");

    // const changeHandler = ()=>{
    //     setValue(value)
    // }
    
    // const navigate = useNavigate();

  //   const formSubmit = async (data) => {
  //     const {email, password} = data
  //     console.log(email, password)
  //   await fetch("http://localhost:8080/user/login", {
  //     method:'POST',
  //     headers:{
  //       'content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data),

  //   } ).then(res=>res.json())
  //     // localStorage.setItem("user", data)
  //     setToken(data)
  // }

  const formSubmit = async e => {

    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    console.log(token)
    setToken(token);
  }
//     // const token = await loginUser({
//     //   email,
//     //   password
//     // });
//     // setToken(token);
//     }
// async function loginUser(credentials) {
//   return fetch('http://localhost:8080/user/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }


//     const formSubmit = async() => {

//       const token = await loginUser({
//         email,
//         password
//       });
//       setToken(token);
//       console.log(token)
//     }
     
    

    // const [ user, setUser] = useState({
    //     email:"",
    //     password:""
    // })

    // const changeHandler = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const formSubmit = async() => {
    //    await axios.post("http://localhost:8080/user/login", user)
    //     .then(res => {
    //         // alert(res.data.message)
    //         // setLoginUser(res.data.user)
    //          navigate.push("/dashboard")
    //     })
    // }

  return (
    <>
    <div class="p-2 pb-2">
    <form onSubmit={formSubmit}>
      <fieldset  class="text-center font-semibold text-base mb-8">Login with email</fieldset>
      <div class="mb-8">
              <label>
                <input onChange={(e)=>setEmail(e.target.value)} name='email' class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans"  type={"email"} placeholder='Email'
                // {...register("email",{required:true})}
                />
              </label>
              {/* {errors.email && <p>Please user correct email</p>} */}
              </div>
              <div class="mb-8">
              <label>
                <input onChange={(e)=>setPassword(e.target.value)} name='password'  class="outline outline-2 outline-offset-1 outline-blue-400 focus:outline-4 placeholder:text-black rounded-lg w-72 h-10 pl-5 placeholder:font-sans" type={"password"} placeholder='Enter Your Password'
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


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}