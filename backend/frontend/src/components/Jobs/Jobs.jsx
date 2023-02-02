import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [jobs, setJobs] = useState({})


  useEffect(() => {
   fetch(`http://localhost:8080/user/jobs`, {method:'GET'})
   .then(response=>response.json())
   .then(data=>{
    console.log(data)
    setJobs(data.listJobs)
   })
  }, [])
  
  const {companyName, companyEmail} = jobs;
  return (
    <>
    <div>List of all Remote Jobs</div>
    <div>{companyName}</div>
    <div>{companyEmail}</div>
    </>
  )
}


