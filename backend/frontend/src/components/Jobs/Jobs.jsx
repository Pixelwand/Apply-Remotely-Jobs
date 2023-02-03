import React, { useEffect, useState } from "react"

export const Jobs = () => {
  const [jobData, setJobData] = useState([])


  useEffect(() => {
 fetch(`http://localhost:8080/user/jobs`, {method:'GET'})
   .then((response)=>response.json())
   .then((data)=>setJobData(data))
  }, [])
  
  console.log("listJob:", jobData)
  // const {companyName, companyEmail} = jobData
  // const {companyName, companyEmail, applyUrl, howtoapply, jobDescription, jobtype,  minSalary, maxSalary, position, primaryField, secondEmail, twitterUsername}=jobs;
  // console.log("Company Name", companyName);
  return (
    <>
    <div>List of all Remote Jobs</div>
    {/* <div>{`${companyName}`}</div> */}
    <div>
      {jobData.map(job=>
        <li key={job.id}>{job.companyName}</li>
        )}
    </div>
    {/* <div>{companyEmail}</div> */}
    {/* <div>{companyName}</div> */}
    {/* <div className="text-blue-600">{companyName}</div> */}
    {/* <div>{companyEmail}</div> */}
    {/* <div>{applyUrl}</div> */}
    
        <div>
        {/* <ul>
          {jobData((job) => (
            <li key={job.id}>{job.companyName}</li>
          ))}
        </ul> */}
    </div>
    </>
  )
}


