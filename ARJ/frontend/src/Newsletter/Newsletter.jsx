import { json } from 'body-parser';
import React, {useEffect} from 'react';

export const Newsletter = () => {
const handleSubmit = async() =>{
    const response = await fetch("", {
        method:'POST',
        headers:{
            'content-Type':"application/json"
        },
        body:JSON.stringify()
    }).then((res)=>{
        console.log("User subscribed successfully")
    })
    
}
  return (
   <>
   <div>
    <form onSubmit={handleSubmit}>
        <input type="email" onChange={(e)=>e.target.value} />
        <input type="submit" />
    </form>
   </div>
   </>
  )
}
