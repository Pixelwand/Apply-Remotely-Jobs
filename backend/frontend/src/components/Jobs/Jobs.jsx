import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [jobs, setJobs] = useState({})


  useEffect(() => {
   fetch(`http://localhost:8080/user/jobs`, {method:'GET'})
   .then(response=>response.json())
   .then(data=>{
    setJobs(data.listJobs)
   })
  }, [])
  
  console.log("jobs:", jobs)
  const {companyName, companyEmail, applyUrl, howtoapply, jobDescription, jobtype,  minSalary, maxSalary, position, primaryField, secondEmail, twitterUsername}=jobs;
  console.log("Company Name", companyName);
  return (
    <>
    <div>List of all Remote Jobs</div>
    <div className="text-blue-600">{companyName}</div>
    <div>{companyEmail}</div>
    <div>{applyUrl}</div>
    </>
  )
}


