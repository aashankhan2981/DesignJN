import Hero from "../components/Landing/Hero";
import Steps from "../components/Landing/Steps";

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
    <div className="2xl:mt-[290px] relative px-6 md:px-8 xl:px-14 pb-[120px] rounded-xl  max-w-[900px] lg:max-w-[1000px] xl:max-w-[1420px] w-full xl:mt-[230px] lg:mt-[150px] mt-[100px]">
      <img src="/assets/images/landing/circle.svg"  className="absolute bottom-0 pr-4 right-0" alt="" />
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
    <div className="mt-7 flex flex-col px-4 md:px-6  items-center">
      <p className="font-bold text-4xl leading-[50px] md:text-[55px] text-center md:leading-[70px] text-white max-w-[1027px]">Getting Best Discount is Supper Easy</p>
       <p className="text-base leading-[25px] mt-[37px] text-light_text max-w-[757px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas aenean diam varius euismod amet, donec eget cursus. </p>
       <img src="/assets/images/landing/sketch.svg" alt="" />
    </div>
    </div>
  )
}
