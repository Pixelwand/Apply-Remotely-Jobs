import { options } from 'joi';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Select from 'react-select'
import {WithContext as ReactTags} from 'react-tag-input';

const jobtype = [
  {value:"jobtypes", label:"Full Time"},
  {value:"jobtypes", label:"Part Time"},
  // {value:"Contractor", label:"Contractor"},
  // {value:"Temporary", label:"Temporary"},
  // {value:"Internship", label:"Internship"},
  // {value:"Volunteer", label:"Volunteer"},
]

// const jobbenefits = [
  // {value:"Distributed Team", label:"Distributed Team"},
  // {value:"Async", label:"Async"}
// ]

const primaryfield = [
  {value:"Software Development", label:"Software Development"},
  {value:"Customer Support", label:"Customer Support"},
  {value:"Sales", label:"Sales"},
  {value:"Marketing", label:"Marketing"},
  {value:"Design", label:"Design"},
  {value:"Frontend", label:"Frontend"},
  {value:"Backend", label:"Backend"},
  {value:"Legal", label:"Legal"},
  {value:"Testing", label:"Testing"},
  {value:"Quality Assurance", label:"Quality Assurance"}
]

const salary = [
  {value:"100,00$", label:"USD 100,00$ PER YEAR"},
  {value:"200,00$", label:"USD 200,00$ PER YEAR"},
  {value:"300,00$", label:"USD 300,00$ PER YEAR"},
  {value:"400,00$", label:"USD 400,00$ PER YEAR"},
  {value:"500,00$", label:"USD 500,00$ PER YEAR"},
  {value:"600,00$", label:"USD 600,00$ PER YEAR"},
  {value:"700,00$", label:"USD 700,00$ PER YEAR"},
  {value:"800,00$", label:"USD 800,00$ PER YEAR"},
  {value:"900,00$", label:"USD 900,00$ PER YEAR"},
  {value:"1000,00$", label:"USD 1000,00$ PER YEAR"},
  {value:"1100,00$", label:"USD 1100,00$ PER YEAR"},
  {value:"1200,00$", label:"USD 1200,00$ PER YEAR"},
  {value:"130,00$", label:"USD 1300,00$ PER YEAR"},
  {value:"1400,00$", label:"USD 1400,00$ PER YEAR"},
  {value:"1500,00$", label:"USD 1500,00$ PER YEAR"},
  {value:"1600,00$", label:"USD 1600,00$ PER YEAR"},
  {value:"1700,00$", label:"USD 1700,00$ PER YEAR"},
  {value:"1800,00$", label:"USD 1800,00$ PER YEAR"},
  {value:"1900,00$", label:"USD 1900,00$ PER YEAR"},
  {value:"2000,00$", label:"USD 2000,00$ PER YEAR"},
  {value:"2200,00$", label:"USD 2200,00$ PER YEAR"},
  {value:"2400,00$", label:"USD 2400,00$ PER YEAR"},
  {value:"2600,00$", label:"USD 2600,00$ PER YEAR"},
  {value:"2800,00$", label:"USD 2800,00$ PER YEAR"},
  {value:"3000,00$", label:"USD 3000,00$ PER YEAR"},
  {value:"3200,00$", label:"USD 3200,00$ PER YEAR"},
  {value:"3400,00$", label:"USD 3400,00$ PER YEAR"},
  {value:"3600,00$", label:"USD 3600,00$ PER YEAR"},
  {value:"3800,00$", label:"USD 3800,00$ PER YEAR"},
  {value:"4000,00$", label:"USD 4000,00$ PER YEAR"},
  {value:"4400,00$", label:"USD 4400,00$ PER YEAR"},
  {value:"4800,00$", label:"USD 4800,00$ PER YEAR"},
  {value:"5000,00$", label:"USD 5000,00$ PER YEAR"},
  {value:"5250,00$", label:"USD 5250,00$ PER YEAR"},
  {value:"5500,00$", label:"USD 5500,00$ PER YEAR"},
  {value:"6000,00$", label:"USD 6000,00$ PER YEAR"},
  {value:"6500,00$", label:"USD 650,00$ PER YEAR"}
]

const Benefits = [
"Distributed work",
"Async",
"401(k)",
"Vision Insurance",
"Dental Insurance",
"Medical Insurance",
"Unlimited Vacation",
"Paid Time Off",
"4 day workweek",
"401k matching",
"company retreats",
"Coworkig budget",
"Learning budget",
"Free gym membership",
"Mental Wellness budget",
"Home Office budget",
"Pay in crypto",
"Psedonymous",
"Profit sharing",
"Equity Compensation",
"No Whiteboard Interview",
"No monitoring system",
"No politics at work"

]

const Stack = [
"Engineers",
"Developers",
'Engineer',
'Executive',
'Senior',
'Developer',
'Finance',
'Sys Admin',
'Javascript',
'Backend',
'Golang', 
'Cloud', 
'Medical',
'Frontend', 
'Full Stack',
'Ops',
'Design',
'React', 
'InfoSec', 
'Markeing', 
'Mobile', 
'Content Writing', 
'SaaS', 
'Recruiter', 
'Full Time', 
'API', 
'Sales', 
'Ruby',
'Education',
'Devops',
'Stats',
'Python',
'Node',
'Non Tech',
'Video',
'Travel',
'Quality Assurance',
'E-commerce',
'Teaching',
'Linux',
'Java',
'Crypt',
'Junior',
'Git',
'Legal',
'Android',
'Accounting',
'Admin',
'Microsoft',
'Excel',
'PHP'
]

const Location = [
  "Worldwide",
  "USA",
  "UK",
  "Europe",
  "Australia",
  "Asia",
  "India"
]

const locations = Location.map(location => {
  return{
    id:location,
    text:location
  }
})



const stacks = Stack.map(stack => {
  return {
    id: stack,
    text: stack
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


export const PostJobs = () => {
  const [tags, setTags] = React.useState([
    
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const {register, handleSubmit, formState:{errors}} = useForm();
  

   
  const formSubmit = async(data) => {
      const response = await fetch("http://localhost:8080/user/postjob", {
           method:'POST',
           headers:{
             'content-Type':'application/json'
           },
           body:JSON.stringify(data)
     
         }).then((res)=>{
           console.log(data)
         })
       
         return () => {
           response.json()
         }
       }
     
    

     const changeHandler = ()=>{
      setValue(value)
    }
    
  return (
    <>
    <div class="px-4 pb-60 mb-auto">
            <form onSubmit={handleSubmit(formSubmit)}>
              <fieldset class="text-center font-semibold text-base mb-8 mt-10">Post Remote Jobs <span className='line-through'>99$</span> 19$<hr class="mt-3 font-" /></fieldset>
              
              {/* <div class="mb-8 font-xl">
              <label>
                <input onChange={changeHandler}  name='companyName' type={"text"} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Company Name'
                 {...register("companyName", {required:true})}
                />
              </label>
             
              </div>
              
              <div class="mb-8">
              <label>
                <input onChange={changeHandler} name='companyEmail' class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" type={"text"} placeholder='Company Email Address'
                 {...register("companyEmail", {required:true, pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
              </label>
              {errors.email && <p class="text-red-600 font-normal">Please check your Email!</p>}
              </div>

              <div class="mb-8 font-xl">
              <label>
                <input onChange={changeHandler}  name='position' type={"text"} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Position'
                 {...register("position", {required:true})}
                
                />
              </label>
              { <p class="text-xs mt-2">Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.</p>}
              </div>
               */}
              <div class="mb-8 font-xl">
              <label>
                <Select onChange={e=>setSelectedOption(e.target.value)}  options={jobtype} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans"
                    // value={setSelectedOption}
                    isClearable={false}
                    value={value}
                    // {...register("jobtypes", {required:true})}
                />
                </label>
           
              </div>

              <div class="mb-8 font-xl">
              <label>
                <Select onChange={setSelectedOption} defaultValue={selectedOption} options={primaryfield}  name='primaryField' type={"text"} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Primary Field'
                // {...register("primaryField", {required:true})}
                />
              </label>
              </div>

              
              <div className='my-10 w-full'>Tags, Keywords or Stack
        <ReactTags
          tags={tags}
           suggestions={stacks}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          placeholder='Type a tag or search by keywords'
          className="w-84"
          name='techStack'
          //  {...register("techStack", {required:true})}
        />
      </div>
      <div className='my-10 w-full'>Restricted Job Locations
        <ReactTags
          tags={tags}
           suggestions={locations}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          placeholder='Type a location to this job is restricted like Worldwide, Asia or USA'
          className="w-84"
          name='location'
            // {...register("location", {required:true})}
        />
      </div>
      <div>
        <div>
          Job Details
        </div>
        <div className='my-10'>
          <div className='my-5'>Company Logo</div>
          <input type={"file"} placeholder="Upload" className='rounder-sm' onChange={changeHandler} 
          name="companyLogo"
           {...register("comapnyLogo", {required:true})}
          />
        </div>
        <div className='text-xs'>ANNUAL SALARY OR COMPENSATION IN USD (GROSS, ANNUALIZED, FULL-TIME-EQUIVALENT (FTE) IN USD EQUIVALENT)*</div>
        <div className='flex flex-row gap-8 justify-center my-10'>
        <label className=''>
                <Select onChange={setSelectedOption} defaultValue={selectedOption} options={salary}  class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Min Salary'
                // {...register("minSalary", {required:true})}
                />
              </label>
              <label className=''>
                <Select onChange={setSelectedOption} defaultValue={selectedOption} options={salary}  class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg w-72 h-10 pl-5 placeholder:font-sans" placeholder='Max Salary'
                // {...register("maxSalary", {required:true})}
                />
              </label>
        </div>
        <div className='mb-5'>
                <p className='text-xs'>It's illegal to not share salary range on job posts since 2021. Posts without salary will automatically show an estimate of salary based on similar jobs. Remote job postings are legally required to show a salary compensation range in many U.S. states and countries. Google does NOT index jobs without salary data. If it's a short-term gig, use the annual full-time equivalent. For example, if it's a 2-week project for $2,000, the annual equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000. Please use USD equivalent. We don't have currency built-in yet and we'd like to use this salary data to show salary trends in remote work. Remote OK is a supporter of #OpenSalaries.</p>
              </div>
      </div>

      <div class="mb-8 font-xl">Job Description*:
              <label>
                <textarea onChange={changeHandler}  name='JobDescription' type={"textarea"} class="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg block w-full h-72 mt-5 pl-5 placeholder:font-sans" placeholder='Mention All the details about job'
                 {...register("jobDescription", {required:true})}
                />
              </label>
              <div>
                <div className='font-bold text-xl mt-8 mb-1'>Benefits</div>
                <div>
                {Benefits.map((item, index) => (
            <div key={index} className="">
              <input value={item} type="checkbox" name='benefits' className='mr-3' 
                 {...register("benefits", {required:true})}
              />
              <span className="">{item}</span>
            </div>
          ))}
                </div>
              </div>
              </div>
              <div>
                <div className='font-bold text-xl'>How to Apply?</div>
                <div>
                  <textarea type={"textarea"} onChange={changeHandler} className="outline outline-2 outline-offset-1 outline-slate-500 rounded-lg block w-full mb-10 h-72 mt-5 pl-5 placeholder:font-sans" 
                  name='howtoapply'
                   {...register("howtoapply", {required:true})}
                  />
                </div>
                <div>
                  <div className='font-bold text-xl'>Apply URL:</div>
                  <input onChange={changeHandler} type={"text"} placeholder="Enter Link to Application" className="outline outline-2 mb-10 outline-offset-1 outline-slate-500 rounded-lg block w-full h-10 mt-5 pl-5 placeholder:font-sans"
                  name='applyUrl'
                   {...register("applyUrl", {required:true})}
                  />
                </div>
              </div>
     
              <div class="mb-8 ">
                <div className='text-center font-bold text-2xl my-10'>Company</div>
              <label>
                <input name='twitterUsername' onChange={changeHandler} class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" placeholder='Twitter Username' type={"text"}
                 {...register("twitterUsername", {required:true})}
                />
              </label>
              <p className='text-xs mt-2'>Twitter username without @. Not required, but used to tag your company when we tweet out your job post.</p>
              </div>
              <div class="mb-5">
                <label>
                  <input name='secondEmail' onChange={changeHandler} class="w-72 h-10 pl-5 outline outline-2 outline-offset-1 outline-slate-500 rounded-lg" type={"email"} placeholder="Company Email"
                   {...register("secondEmail", {required:true})}
                  />
                </label>
                <p className='text-xs mt-2'>Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.</p>
              </div>
              <div class="mb-5">
                <input type={"checkbox"}
                name="terms"
                 {...register("terms", {required:true})}
                />
                <label class="font-sans text-sm ml-5">I agree to the <a href="#/" class="text-blue-700 font-semibold">Terms of Service</a> and <a href='#/' class="font-semibold font-sans text-blue-700">Privacy Policy</a></label>
              </div>
              <div class="text-center">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded px-6 py-3" type='submit'>Start Hiring at 19$</button>
              </div>
            </form>
          </div>
    </>
  )
}
