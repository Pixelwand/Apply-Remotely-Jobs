import React, {useEffect} from 'react';
import {ImArrowUpLeft2} from 'react-icons/im';
import {RiRocketFill} from 'react-icons/ri';
import {motion, useMotionValue, useTransform, animate} from 'framer-motion';

export default function Details() {
  
  const count = useMotionValue(0);
  const percentCount = useMotionValue(0);
  const hiringCount = useMotionValue(0);
  const positionCount = useMotionValue(100);

  const percentRounded = useTransform(percentCount, Math.round);
  const hiringRounded = useTransform(hiringCount, Math.round);
  const rounded  = useTransform(count, Math.round);
  const positionRounded = useTransform(positionCount, Math.round);

  useEffect(() => {
    const percentAnimation = animate(percentCount, 99, {duration:10})
  
    return percentAnimation.stop
  }, [])
  
  useEffect(() => {
    const hiringAnimation = animate(hiringCount, 70, {duration:10})
  
    return hiringAnimation.stop;
  }, [])
  

  useEffect(() => {
    const animation = animate(count, 1000, {duration:10});
  
    return animation.stop
  }, [])
  
  useEffect(()=>{
    const positionAnimation = animate(positionCount, 1, {duration:10})
    
    return positionAnimation.stop;
  }, [])

  return (
    <>
    <div className="mt-10">
    <div className="font-bold text-3xl text-center px-10">Trusted and loved by world's best team</div>
    <div className="flex text-center font-bold text-slate-700 flex-col xl:flex-row xl:gap-20 justify-center mt-24 gap-12">
    <motion.div 
    whileHover={{scale:1.2}}
    whileTap={{scale:1.1}}
    >
      <div className="text-3xl">Applicants</div>
    <div className="basis-1/2">
    <motion.span className="my-2 font-bold text-3xl">{percentRounded}</motion.span>
    <motion.span className="my-2 font-bold text-3xl">%</motion.span>
    <div className="my-2 font-semibold text-xl">Accuracy Rate</div>
    <div className="text-slate-600 font-sans">In getting qualified applicants</div>
    </div>
    </motion.div>
    <motion.div 
    whileHover={{scale:1.2}}
    whileTap={{scale:1.1}}
    >
      <div className='text-3xl'>Candidates</div>
      <div className="basis-1/2">
    <motion.span className="my-2 font-bold text-3xl">{rounded}</motion.span>
    <motion.span className="my-2 font-bold text-3xl">+</motion.span>
    <div className="my-2 font-semibold text-xl">Qualified candidates</div>
    <div className="text-slate-600 font-sans">choose best candidates</div>
    </div>
    </motion.div>
    <motion.div
    whileHover={{scale:1.2}}
    whileTap={{scale:1.1}}
    >
      <div className='text-3xl'>Hiring Rate</div>
      <div class="basis-1/2">
    <motion.span class="my-2 font-bold text-3xl">{hiringRounded}
    
    </motion.span>
    <motion.span class="my-2 font-bold text-3xl">%</motion.span>
    <div class="my-2 font-semibold text-xl">Of hiring rate on time</div>
    <div class="text-slate-600 font-sans">within three weeks</div>
    </div>
    </motion.div>
    <motion.div
    whileHover={{scale:1.2}}
    whileTap={{scale:1.1}}
    >
      <div className='text-3xl'>Remote Jobs</div>
      <div class="basis-1/2">
    <motion.span class="my-2 font-bold text-3xl">#</motion.span>
    <motion.span class="my-2 font-bold text-3xl">{positionRounded}</motion.span>
    <div class="my-2 font-semibold text-xl">for finding Remote Jobs</div>
    <div class="font-sans text-slate-600 ">around the world</div>
    
    </div>
    </motion.div>
    
    
    
    
    </div>
    <div class="text-center">
    <div class="text-3xl font-semibold text-center px-6 mb-10 font-sans mt-12 xl:mt-28">Are Remote Jobs secure? By Kunal Kushwaha</div>
    <div className='xl:flex-row xl:flex xl:mt-20'>
    <div className='xl:basis-1/2'>
<iframe className='w-5/6 h-60 mx-auto sm:h-96' src="https://www.youtube.com/embed/asg9lBbxLHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="w-full px-5 xl:basis-1/2">
      <p className='px-6 sm:text-2xl  font-medium leading-5 mt-12 xl:w-2/3 xl:ml-20'>Are remote jobs secure? Should you be worried about layoffs if you are working remotely from India? Is FAANG India safer? How to prepare? Let's answer these questions!</p>
    </div>
    </div>
    </div>
    <div className="flex justify-center flex-col  w-full mx-auto gap-32 mt-20 pb-10">
      <div className="xl:flex-row xl:flex">
        <div className='basis-2/3'>
        <div class="text-3xl sm:text-4xl mb-8 font-sans font-bold w-full px-4 text-center">Make your career better with Remote Jobs</div>
        <div class="text-center w-full sm:text-xl sm:font-medium px-8 text-black font-sans font-normal mb-20">Working remotely can offer many benefits for your career, such as increased flexibility and the ability to work from anywhere. It can also open up job opportunities that may not have been available otherwise.
</div>
</div>
        <div className=" basis-1/3 text-center text-white xl:mt-10">
          <a href="http://localhost:3000/about" class="bg-blue-600 py-3 px-6 font-medium hover:bg-blue-800 sm:py-6 sm:text-xl sm:px-10">Learn More </a>
        </div>
      </div>
      <div class="text-center font-bold text-2xl font-sans sm:text-3xl xl:flex-row xl:flex">
      <div class="mb-12 w-5/6 text-center mx-auto "> <ImArrowUpLeft2 class="text-blue-600 font-bold mx-auto" /> Find or Apply for Remote Jobs in Seconds
</div>
      <div class="w-5/6 mx-auto text-center"> <RiRocketFill class="text-blue-600 font-bold mx-auto" />Our search section is made for creativity.
</div>
      </div>
    </div>
    </div>
    </>
  )
}
