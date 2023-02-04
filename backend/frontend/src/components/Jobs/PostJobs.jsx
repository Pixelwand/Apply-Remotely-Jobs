import React, {useState,useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const customStyles = {
  content:{
    background:"blue"
  }
}

const jobtype = [
  {value:"Full Time", label:"Full Time"},
  {value:"Part Time", label:"Part Time"},
  {value:"Contractor", label:"Contractor"},
  {value:"Temporary", label:"Temporary"},
  {value:"Internship", label:"Internship"},
  {value:"Volunteer", label:"Volunteer"},
]


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

// const locations = Location.map(location => {
//   return{
//     id:location,
//     text:location
//   }
// })



// const stacks = Stack.map(stack => {
//   return {
//     id: stack,
//     text: stack
//   };
// });

const KeyCodes = {
  comma: 188,
  enter: 13
};

// const delimiters = [KeyCodes.comma, KeyCodes.enter];


export const PostJobs = () => {
  const [stack, setStack] = useState([]);
  const [location, setLocation] = useState([])
  // const CLIENT_ID = "AWigkJSRzUKSZxY-oEaPGne4V0hJDVY7PNirDVKVmeky4ZtSQpiuUsD3oEx8o2-jS2CtM8kVtBpkmI34"
  // // const [tags, setTags] = React.useState([
    
  // // ]);
  // const [clientSecret, setClientSecret] = useState("");
  // const [sdkReady, setSdkReady] = useState(false)

  // useEffect(() => {
  //   const addPaypalScript = async()=>{
  //     const{data:clientId} = await axios.get("/api/config/paypal")
  //     const script = document.createElement('script')
  //     script.type = 'text/javascript'
  //     script.src  = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`
  //     script.async = true
  //     script.onload=()=>{
  //       setSdkReady(true)
  //     }
  //     document.body.appendChild(script);
  //   }
  
  //   return () => {
      
  //   }
  // }, [])
  

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  const [value, setValue] = useState('');
  const {register, handleSubmit, control, formState:{errors}} = useForm();
  

   
const formSubmit = async(data) => {
      const response = await fetch("https://apply-remotely-jobs.onrender.com/user/postjob", {
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
    <div className="w-full pb-20">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="text-black pt-3 mb-8 w-full font-sans "><div className='text-2xl font-bold text-center'>Post Remote Jobs <span className='line-through'>399$</span> 0$</div>
              <div className='text-xl text-white bg-red-500 leading-10 mt-2 text-center'>100% Discount</div>
              </div>
              
              <div className="mb-8 font-xl w-full text-center">
              <label>
                <input onChange={changeHandler}  name='companyName' type={"text"} className="outline outline-2 outline-offset-1 outline-blue-500 focus:outline-4 w-5/6 h-12 placeholder:text-black placeholder:text-lg text-lg rounded-lg pl-5 placeholder:font-sans" placeholder='Company Name'
                 {...register("companyName", {required:true})}
                />
              </label>
             
              </div>
              
              <div class="mb-8 text-center" >
              <label>
                <input onChange={changeHandler} name='companyEmail' className="w-5/6 h-12 pl-5 outline outline-2 outline-offset-1  outline-blue-500 focus:outline-4 placeholder:text-black placeholder:text-lg text-lg rounded-lg" type={"text"} placeholder='Company Email Address'
                 {...register("companyEmail", {required:true}, { pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                />
              </label>
              {errors.email && <p class="text-red-600 font-normal">Please check your Email!</p>}
              </div>

              <div class="mb-8 font-xl text-center">
              <label>
                <input onChange={changeHandler}  name='position' type={"text"} className="outline w-5/6 h-12 pl-6 outline-2 outline-offset-1 outline-blue-500 focus:outline-4 placeholder:text-black placeholder:text-lg text-lg rounded-lg placeholder:font-sans" placeholder='Position'
                 {...register("position", {required:true})}
                
                />
              </label>
              { <p class="text-xs mt-2 px-10">Please specify as single job position like "Marketing Manager" or "Node JS Developer"
               {/* not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please. */}
               </p>}
              </div>
              
              <div className='w-2/3 mx-auto mb-5'>
              
              <Controller
              onChange={changeHandler}
        name="jobtype"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={primaryfield} 
        />}
      />
      </div>
      <div className='w-2/3 mx-auto'>
       <Controller
       onChange={changeHandler}
        name="primaryField"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={jobtype}
        />}
      />
      </div>
      <div>
        <div className='text-center mt-7 text-xl font-semibold'>
          Use Tags for Tech Stack
        </div>

       
      <div className='mt-3 mb-7'>
      <TagsInput 
      value={stack}
      onChange={setStack}
      name="techStack"
      className='w-5/6 mx-auto h-12 p-2 rounded-xl outline outline-2 focus:outline-4 outline-blue-600 placeholder:text-black'
      />
      </div>
      </div>
      <div>
        <div className='text-center text-xl font-semibold'>Tags for restricted job locations</div>
      <div className='mb-12 mt-3'>
      <TagsInput 
      name="location"
      value={location}
      onChange={setLocation}
      className="w-5/6 mx-auto h-12 p-2 rounded-xl outline outline-2 focus:outline-4 outline-blue-600 placeholder:text-black"
      />
      </div>
      </div>
      
      <div>
        <div className='font-bold text-2xl text-center bg-red-500 text-white py-4'>
          Job Details
        </div>
        <div className='my-10 flex flex-row px-10 text-base gap-5 xl:text-center xl:gap-1'>
          <div className='basis-1/2 font-bold'>Logo:</div>
          <div className='basis-1/2'>
          <input type={"file"} placeholder="Upload" className='' onChange={changeHandler} 
          name="companyLogo"
           {...register("comapnyLogo", {required:true})}
          />
          </div>
        </div>
        <div className='text-xs text-center px-10'>ANNUAL SALARY OR COMPENSATION IN USD (GROSS, ANNUALIZED, FULL-TIME-EQUIVALENT (FTE) IN USD EQUIVALENT)*</div>
        <div className='flex flex-row gap-8 text-xl justify-center my-10'>
        <Controller
        name="minSalary"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={salary} 
        />}
      />
      <Controller
        name="maxSalary"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={salary} 
        />}
      />
       
        </div>
        <div className='mb-5'>
                <p className='text-xs px-10'>It's illegal to not share salary range on job posts since 2021. Posts without salary will automatically show an estimate of salary based on similar jobs. Remote job postings are legally required to show a salary compensation range in many U.S. states and countries. Google does NOT index jobs without salary data. If it's a short-term gig, use the annual full-time equivalent. For example, if it's a 2-week project for $2,000, the annual equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000. Please use USD equivalent. We don't have currency built-in yet and we'd like to use this salary data to show salary trends in remote work. Remote OK is a supporter of #OpenSalaries.</p>
              </div>
      </div>

      <div class="mb-8 font-2xl font-bold ml-10">Job Description*:</div>
      <div>
              <label>
                <textarea onChange={changeHandler}  name='JobDescription' type={"textarea"} class="outline outline-2 outline-offset-1 outline-blue-500 focus:outline-4 placeholder:text-black rounded-lg block w-5/6 mx-10 pt-3 h-72 mt-5 pl-5 placeholder:font-sans xl:mx-auto" placeholder='Mention All the details about job'
                 {...register("jobDescription", {required:true})}
                />
              </label>
              <div>
                <div className='font-bold text-xl mt-8 mb-1 ml-10'>Benefits:</div>
                <div className='grid grid-rows-12 gap-2 grid-col-2 ml-12 mb-12 xl:grid-rows-6  xl:grid-cols-5'>
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
                <div className='font-bold text-xl bg-red-500 text-white py-3 text-center'>How to Apply?</div>
                <div>
                  <textarea type={"textarea"} onChange={changeHandler} className="outline outline-2 outline-offset-1 outline-blue-500 placeholder:text-black pt-2 mx-auto focus:outline-4 rounded-lg block w-5/6 mb-10 h-72 mt-10 pl-5 placeholder:font-sans" 
                  name='howtoapply'
                   {...register("howtoapply", {required:true})}
                   placeholder="How To Apply?"
                  />
                </div>
                <div>
                  <div className='font-bold text-xl text-center'>Apply URL:</div>
                  <input onChange={changeHandler} type={"text"} placeholder="Enter Link to Application" className="outline outline-2 mb-10 outline-offset-1 outline-blue-500 focus:outline-4 rounded-lg block w-4/6 mx-auto h-10 mt-5 pl-3 placeholder:font-sans"
                  name='applyUrl'
                   {...register("applyUrl", {required:true})}
                  />
                </div>
              </div>
     
              <div className="mb-8">
                <div className='text-center font-bold text-2xl my-10'>Company</div>
              <div className='text-center'>
                <input name='twitterUsername' onChange={changeHandler} class="w-4/6 h-10 pl-5 outline outline-2 outline-offset-1 mx-auto outline-blue-500 focus:outline-4 placeholder:text-black rounded-lg" placeholder='Twitter Username' type={"text"}
                 {...register("twitterUsername", {required:true})}
                />
              </div>
              <p className='text-xs mt-2 px-10 text-center'>Twitter username without @. Not required, but used to tag your company when we tweet out your job post.</p>
              </div>
              <div className="mb-5">
                <div className='text-center'>
                  <input name='secondEmail' onChange={changeHandler} class="w-4/6 h-10 pl-5 outline outline-2 outline-offset-1 mx-auto outline-blue-500 rounded-lg" type={"email"} placeholder="Company Email"
                   {...register("secondEmail", {required:true})}
                  />
                </div >
                <p className='text-xs mt-2 text-center px-10'>Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.</p>
              </div>
              <div class="mb-5 text-center">
                <input type={"checkbox"}
                name="terms"
                 {...register("terms", {required:true})}
                />
                <label class="font-sans text-sm ml-5">I agree to the <a href="#/" class="text-blue-700 font-semibold">Terms of Service</a> and <a href='#/' class="font-semibold font-sans text-blue-700">Privacy Policy</a></label>
              </div>
              <div class="text-center w-full">
              <button class="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl rounded px-6 py-3" type='submit'>Start Hiring at 0$</button>
              </div>
            </form>
          </div>
    </>
  )
}


