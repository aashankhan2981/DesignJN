import React from 'react'
import { useEffect,useState } from 'react'
import Faq from '../../data/Faqs.json'
const FAQs = () => {
    const [toggle,setToggle] = useState([])
    const [toggle2,setToggle2] = useState(true)
    useEffect(()=>{
        let temp = []
        Faq.map(()=>{
            temp.push(false)

        })
        setToggle(temp)
   
    },[Faq])
    const handleToggle = (index) =>{
        let temp = toggle
        
       temp = temp.map((item,i)=>{
            if(index==i){
                return !item
            }
            else{
                return  false
            }
            

        })
        console.log(temp)
        setToggle(temp)
        setToggle2(!toggle2)
    }
  return (
    <div className='mt-[150px] lg:px-10 md:px-6 px-4 w-full flex flex-col items-center'>
          <p className="max-w-[793px] text-center   sm:text-3xl text-2xl  lg:text-4xl xl:text-[55px] xl:leading-[65px] font-bold text-white">Frequently Asked Questions</p>
          <p className='mt-2 w-full text-center font-bold text-[20px] text-white'>(We’re Tired of Answering)</p>
          <p className='text-lg leading-[25px]  text-light_text max-w-[644px] text-center mt-3 '>We may or may not be from the future. Here are the questions you were just about to asked us.</p>
          <div className='flex flex-col gap-[30px] w-full items-center mt-[70px] '>

       {Faq.map(({heading,content},index)=>{
           return <div key={index+Math.random()} className='max-w-[1228px]  w-full rounded-[30px] shadow-stepShadow'>
               <div className='max-w-[1228px] pl-[37px] pt-[33px] pb-10 pr-[30px] transition-all ease-in-out duration-700   w-full rounded-[30px] shadow-Shadow2'>
                   <div className='justify-between gap-3 items-center flex '>
                       <p className='text-white text-xl leading-5'>{heading}</p>
                       <div className='w-[30px]  h-[30px] rounded-full shadow-stepShadow'><button onClick={()=>{handleToggle(index)}} className='w-[30px] flex justify-center items-center shadow-Shadow2 h-[30px] rounded-full'>
                      <svg className={`${toggle && (!toggle[index]?'rotate-180':"rotate-0")} transition-all duration-1000 ease-in-out `} width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5036 6.50031L5.8353 1.83704L1.16704 6.50031" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>
                           

                           </button></div>

                   </div>
                           <p className={`text-light_text text-lg leading-[25px] mt-7 ${!toggle[index]?'hidden':'block'}   `}>{content}</p>

               </div>

           </div>

       })}
          </div>
          <button className='w-full max-w-[180px] bg-gradient-to-l from-[#FFA31A] to-[#FEB12E] flex items-center justify-center py-[9px]  md:py-4 font-medium text-base sm:text-lg sm:leading-[27px] text-white rounded-xl  mt-[40px] lg:mt-[60px]'>See More</button>

    </div>
  )
}

export default FAQs