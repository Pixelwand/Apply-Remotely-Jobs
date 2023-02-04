import React, { useEffect, useState } from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button
} from '@chakra-ui/react'
export const Jobs = () => {
  const [jobData, setJobData] = useState([])


  useEffect(() => {
 fetch(`https://apply-remotely-jobs.onrender.com/user/jobs`, {method:'GET'})
   .then((response)=>response.json())
   .then((data)=>setJobData(data))
  }, [])
  
  console.log("listJob:", jobData)
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans font-bold p-10 text-2xl">List of all Remote Jobs</div>
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
          <Popover>
  <PopoverTrigger>
    <Button>View</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?

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
          <a href={job.applyUrl}>Click Here</a>
    </PopoverBody>
  </PopoverContent>
</Popover>
</div>
        </div>
        
        )}
    </div>
    </>
  )
}


