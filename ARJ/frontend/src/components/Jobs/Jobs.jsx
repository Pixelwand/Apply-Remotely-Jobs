import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Button from '@chakra-ui/react'
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverAnchor,
//   Button,
//   Link
// } from '@chakra-ui/react'
export const Jobs = () => {
  const [jobData, setJobData] = useState([])


  useEffect(() => {
 fetch(`https://apply-remote-jobs.onrender.com/user/jobs`, {method:'GET'})
   .then((response)=>response.json())
   .then((data)=>setJobData(data))
  }, [])

  
  
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
            {/* <div ur>A</div> */}
            {/* <button component={Link} to={job.applyUrl}>Apply</button> */}
            {/* <Link to={job.applyUrl} relative="path">{job.applyUrl}</Link> */}
          {/* <Link to={`job.applyUrl`}>Apply Now</Link> */}
          {/* <Link to={job => `${job.applyUrl}`} >Apply</Link> */}
          {/* <span itemType={job.applyUrl}>AAAA</span> */}
          </div>
          {/* <Popover>
  <PopoverTrigger>
    <Button>View</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Details!</PopoverHeader>
    <PopoverBody>

    <div key={job.id}>Company Name: {job.companyName}</div>
          <div key={job.id}>Company Email: {job.companyEmail}</div>
          <div  key={job.id}>Position: {job.position}</div>
          <div key={job.id}>Type Of Jobs: {job.jobtype.value}</div>
          <div key={job.id}>Primary Field: {job.primaryField.value}</div>
          <div key={job.id}>
            
            {job.minSalary.label}</div>
          <div key={job.id}>{job.maxSalary.label}</div>
          <div key={job.id}>
          <div>Description:</div>
            {job.jobDescription}</div>
          <div key={job.id}>
          <div>How To Apply?</div>
            {job.howtoapply}</div>
          <div key={job.id}>
            <div>Twitter Username</div>
            {job.twitterUsername}
          </div>
          <a href={job.applyUrl}>Click Here</a>
    </PopoverBody>
  </PopoverContent>
</Popover> */}
</div>
        </div>
        
        )}
        {/* <a href="https://www.kriyax.com">appp</a> */}
    </div>
    </>
  )
}


