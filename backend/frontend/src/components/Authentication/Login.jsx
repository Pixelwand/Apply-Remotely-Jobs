import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {
    const {login, handleSubmit, formState:{errors}} = useForm();

    const [value, setValue] = useState("");

    const changeHandler = ()=>{
        setValue(value)
    }

    const formSubmit = () => {

    }
  return (
    <>
    <div class="px-10 pb-10">
    <form onSubmit={handleSubmit(formSubmit())}>
      <fieldset  class="text-center font-semibold text-base mb-14">Login with email</fieldset>
      <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='email' class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans"  type={"email"} placeholder='Email'
                {...login("email",{required:true})}
                />
              </label>
              {errors.email && <p>Please user correct email</p>}
              </div>
              <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='password'  class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" type={"password"} placeholder='Enter Your Password'
                {...login("password", {required:true})}
                />
              </label>
              {errors.password && <p>Please use correct password!</p>}
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded-xl px-6 py-3" type='submit'>Login</button>
              </div>
    </form>
    </div>
    </>
  )
}
