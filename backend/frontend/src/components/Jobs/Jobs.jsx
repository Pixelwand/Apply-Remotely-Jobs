import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [jobData, setJobData] = useState([])


  useEffect(() => {
 fetch(`http://localhost:8080/user/jobs`, {method:'GET'})
   .then((response)=>response.json())
   .then((data)=>setJobData(data))
  }, [])
  
  console.log("listJob:", jobData)
  return (
    <>
    <div>List of all Remote Jobs</div>
    <div>
      {jobData.map(job=>
        <div key={job.id}>
          <div key={job.id}>{job.companyName}</div>
          <div key={job.id}>{job.companyEmail}</div>
          <div  key={job.id}>{job.position}</div>
          <div key={job.id}>{job.jobtype.value}</div>
          <div key={job.id}>{job.primaryField.value}</div>
          <div key={job.id}>{job.minSalary.label}</div>
          <div key={job.id}>{job.maxSalary.label}</div>
          <div key={job.id}>{job.jobDescription}</div>
          <div key={job.id}>{job.howtoapply}</div>
          <div key={job.id}>{job.applyUrl}</div>
          <div key={job.id}>{job.twitterUsername}</div>
          <div key={job.id}>{job.secondEmail}</div>
          <div key={job.id}></div>
          <div key={job.id}></div>
        </div>
        )}
    </div>
    </>
  )
}


