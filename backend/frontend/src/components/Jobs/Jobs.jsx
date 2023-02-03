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
        <li key={job.id}>{job.companyName}</li>
        )}
    </div>
    </>
  )
}


