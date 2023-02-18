import React, { useEffect, useState } from "react";
import {AiFillTwitterCircle} from 'react-icons/ai';
import useToken from "../../useToken";
import Login from "../Authentication/Login";
import {motion, AnimatePresence} from 'framer-motion'

export const Jobs = () => {
  const {token, setToken} = useToken();
  const [jobData, setJobData] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    "name",

  ]


  useEffect(() => {
 fetch(`http://localhost:8080/user/jobs`, {method:'GET'})
   .then((response)=>response.json())
   .then((data)=>setJobData(data))
   console.log("this is token data", token)
  }, [])

  if(!token){
    return <Login setToken={setToken} />
  }
  
  console.log("listJob:", jobData)
  return (
    <>
    
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans font-bold p-10 pt-2 text-2xl">
      <div className="mb-5"><a href="https://www.applyremotelyjobs.co/" className="text-base leading-9">Apply Remotely Jobs</a>
      </div>
      List of all Remote Jobs</div>
    <div >
      {jobData.map(job=>
        <div key={job.id} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 my-5 p-3">
        <div className="flex flex-row gap-24">
         <div className="basis-1/2">
          <div  key={job.id} className="font-bold font-sans text-2xl leading-10">{job.position}</div>
          <div key={job.id} className="font-semibold text-xl leadin-16 font-sans">{job.companyName}</div>
          </div>
          <div className="basis-1/2 align-middle flex flex-col gap-5">
          <div key={job.id} className="font-sans font-normal text-xl leading-16">{job.jobtype.value}</div>
          <div key={job.id}>{job.primaryField.value}</div>
          </div>
          </div>
          <div className="flex flex-row gap-28 mt-5">
            <div className="flex flex-row">
          <div key={job.id}>{job.minSalary.value}</div>
          <span>-</span>
          <div key={job.id}>{job.maxSalary.value}</div>
          </div>
          <div className="bg-white px-6 py-2 font-semibold rounded-full" key={job.id}>
            <a href={job.applyUrl}>Apply</a>
            
          </div>
          <div>
            <a href={`https://www.twitter.com/${job.twitterUsername}`}>
              <AiFillTwitterCircle className="text-white text-2xl"/>
            </a>
            </div>
</div>
        </div>
        )}
    </div>
    
    </>
  )
}


