import React from 'react';

export const Newsletter = () => {
const handleSubmit = async() =>{
    const response = await fetch("http://localhost:8080/user/subscribe", {
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
        <input type="email" onChange={(e)=>e.target.email} className="bg-blue-600 text-white"/>
        <input type="submit" />
    </form>
   </div>
   </>
  )
}
