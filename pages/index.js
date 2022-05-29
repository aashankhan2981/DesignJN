import Hero from "../components/Landing/Hero";
import Process from "../components/Landing/Process";
import Steps from "../components/Landing/Steps";
import Why from "../components/Landing/Why";
import whyData from '../data/Why.json'

export default function Home() {
  return (
    <div className="bg-site_black max-w-[1920px] pt-8 flex flex-col items-center  w-full" >
    <Hero/>
    <div className="flex  gap-14 px-6 sm:flex-row flex-col max-w-[700px] lg:max-w-[1050px] xl:max-w-[1200px] 2xl:max-w-[1383px]  flex-wrap justify-center xl:justify-between  w-full">
    <img  src="/assets/images/landing/forbes.svg" alt="logos" />
    <img  src="/assets/images/landing/shopify.svg" alt="logos" />
    <img  src="/assets/images/landing/geek.svg" alt="logos" />
    <img  src="/assets/images/landing/tech.svg" alt="logos" />
    <img  src="/assets/images/landing/betakit.svg" alt="logos" />
    </div>
    <Steps/>
    <div className="2xl:mt-[290px] relative px-6 md:px-8 xl:px-14 pb-[60px] xl:pb-[120px] rounded-xl  max-w-[900px] lg:max-w-[1000px] xl:max-w-[1420px] w-full xl:mt-[230px] lg:mt-[150px] mt-[100px]">
             <div className="bg-[#292929] xl:flex-row flex-col-reverse relative flex justify-between px-[40px] lg:px-[100px] rounded-[30px] py-[50px] lg:py-[95px]">
               <img src="/assets/images/landing/surag.svg" className="absolute top-[-5%] md:top-[-7%] left-[-2%]" alt="" />
             <div className="">
             

               <h2 className="md:max-w-[535px] font-bold md:text-left text-center md:w-auto w-full lg:text-[60px] text-4xl leading-[50px]  lg:leading-[70px] text-white">Find Best Deals in Your Way</h2>
               <div className="mt-[59px] flex md:flex-row flex-col gap-10 items-center">
                  <div className="shadow-stepShadow rounded-[30px]">

                 <div className="p-8 rounded-[30px] shadow-Shadow2">
                   <p className="text-xl md:text-2xl leading-8 text-white">Need Anything?</p>
                   <p className="text-base leading-[22px]  text-light_text max-w-[313px] mt-8 mb-14">Want any deal? Just Post Requirement & Get it done in lowest price OR Buy gig quickly to save bucks on all deals.</p>
                   <div className="flex items-center text-sm leading-[18px] text-site_yellow gap-5">
                     <p >Discover</p>
                  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.4995 1.00005L16.1628 5.66831L11.4995 10.3366" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M1 5.6665H16" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" />
</svg>



                   </div>
                 </div>
                 </div>
                 <div className="shadow-stepShadow rounded-[30px]">
                 <div  className="p-8 rounded-[30px] shadow-Shadow2 ">
                   <p className=" text-xl md:text-2xl leading-8 text-white">Have Something</p>
                   <p className="text-base leading-[22px]  text-light_text max-w-[313px] mt-8 mb-14">Want any deal? Just Post Requirement & Get it done in lowest price OR Buy gig quickly to save bucks on all deals.</p>
                   <div className="flex items-center text-sm leading-[18px] text-site_yellow gap-5">
                     <p >Create gig</p>
                  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.4995 1.00005L16.1628 5.66831L11.4995 10.3366" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  <path d="M1 5.6665H16" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" />
</svg>



                   </div>
                 </div>
                </div>

               </div>
             </div>
             <div className="hidden xl:flex justify-center">
               <img className="xl:absolute top-[-12%] right-10 2xl:right-20" src="/assets/images/landing/lady.svg" alt="" />
             </div>

             </div>
            
             
      <div>

      </div>

    </div>
    {/* getting super discount */}
     <Process/>
     <div className="relative mt-[100px] w-full px-4 md:px-6 lg:px-8 xl:px-12 xl:mt-[199px] ">

       <div>
         <h3 className="font-bold flex text-3xl text-center xl:text-[55px] items-end justify-center xl:leading-[50px]  text-white">Why Deals Jn <span><svg className="md:w-4 w-3 h-3 md:h-4 " xmlns="http://www.w3.org/2000/svg" width={224} height={224} viewBox="0 0 224 224">
  <g id="Ellipse_732" data-name="Ellipse 732" fill="#ffa31a" stroke="#ffa31a" strokeWidth={1}>
    <circle cx={112} cy={112} r={112} stroke="none" />
    <circle cx={112} cy={112} r="111.5" fill="none" />
  </g>
</svg>



</span></h3>
<div className="relative flex justify-center">


<img src="/assets/images/landing/circle.svg"  className="absolute md:flex hidden top-[-4%] left-0 xl:left-[2%] 2xl:left-[8%] 3xl:left-[10%]" alt="" />
         <div className="mt-[70px] w-full place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1260px] gap-[44px]">
{
  whyData.map(({heading,icon,content})=>{

  return  <Why key={content+Math.random()} heading={heading} content={content} icon={icon} />

  })
}
         </div>
</div>

       </div>
     </div>
    </div>
  )
}
