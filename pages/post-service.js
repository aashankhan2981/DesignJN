import { useState,useEffect } from "react";
import DragAndDrop from "../components/DragAndDrop";
import DropDown from "../components/DropDown";
import Deal from "../components/Landing/Deal";
import ReqData from '../data/requirements.json'
const Index = () => {
  const [count,setCount] = useState(0)
  const [Active,setActive] = useState(true)
  const [slider,setSlider] = useState(100)
  const [toggle,setToggle] = useState([])
  const [toggle2,setToggle2] = useState(false)
  useEffect(()=>{
      let temp = []
      ReqData.map(()=>{
          temp.push(false)

      })
      setToggle(temp)
 
  },[ReqData])
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
  const [requirement,handleRequirement] = useState(false)
    const categories = [
        { value: "0", content: "Select Category" },
        { value: "1", content: "Category1" },
        { value: "2", content: "Category2" },
        { value: "3", content: "Category3" },
        
      ];
      const Questions = [
        { value: "0", content: "Other" },
        { value: "1", content: "Is it Secure" },
        { value: "2", content: "Any problem?" },
        { value: "3", content: "Issue?" },
        
      ];

  
  return (
    <div className="max-w-[1291px] mb-[200px]  mt-[70px] md:mt-[86px] lg:px-10 md:px-6 px-4 w-full ">
      <p className="font-bold xl:text-[55px]  text-center md:text-3xl text-xl  sm:text-2xl  lg:text-4xl xl:leading-[65px]  text-white">
        Post Requirement
      </p>
      <div className="flex md:justify-start justify-center items-center mt-[70px] gap-4 md:gap-6">
        <div className="rounded-xl shadow-stepShadow">
          <button
            className={` px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${
              false ? "border border-[#745FEA] text-[#745FEA]" : "text-white"
            } rounded-xl `}
          >
            Product
          </button>
        </div>

        <div className="rounded-xl shadow-stepShadow">
          <button
            className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${
              true ? "border border-[#745FEA] text-[#745FEA]" : "text-white"
            } rounded-xl `}
          >
            Service
          </button>
        </div>
      </div>
      <form className="mt-10" action="#">
        <div className="w-full md:flex-row flex-col flex justify-center items-center gap-10">
          <div className="w-full">
            <p className="text-base text-white   md:leading-5 md:text-xl w-full">
              Category
            </p>
          
             <DropDown categories={categories} />

          </div>
          <div className="w-full">
            <p className="text-base text-white  md:leading-5 md:text-xl w-full">
            Subcategory
            </p>
          
             <DropDown categories={categories} />

          </div>
        </div>
        <div className="w-full mt-[30px] mb-[74px]  md:flex-row flex-col flex justify-center items-end gap-10">
          <div className="w-full">
            <p className="text-base text-white  md:leading-5 md:text-xl w-full">
            Parameter
            </p>
          
             <DropDown categories={categories} />

          </div>
          <div className="w-full">
          <input type="text" placeholder="Full Name" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
           
          

          </div>
        </div>
        <DragAndDrop/>
        <p className="mt-[30px] text-base text-white  md:leading-5 md:text-xl w-full">
        Description
            </p>
        <div className="relative w-full mt-[15px] rounded-xl  shadow-stepShadow" >

        <textarea placeholder="Enter Details Here, Which is Required to avail This Service " className="relative w-full px-[30px] py-[20px] placeholder:text-light_text  shadow-Shadow2 z-20 outline-none   rounded-xl resize-none bg-transparent  text-[15px] leading-[18px] text-light_text" name="" id=""  rows="6">
        </textarea>
        
        </div>

        <div className="flex md:flex-row flex-col items-center  justify-start gap-[30px]">
       <div className="w-full max-w-[540px]">

        <p className="mt-[30px] mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
        Original value
            </p>
            <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
           <svg xmlns="http://www.w3.org/2000/svg" width={12} height={25} viewBox="0 0 12 25">
  <text id="_" data-name="₹" transform="translate(0 19)" fill="#fff" fontSize={18} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>₹</tspan></text>
</svg>


            <input type="text" placeholder="" className=" border-r pr-3 border-r-[#808080] outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full max-w-[140px]" />
            
           <div className="flex gap-[10px] items-center">
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 34 34">
  <g id="edit-2">
    <rect id="Rectangle_167" data-name="Rectangle 167" width={34} height={34} fill="#ffa31a" opacity={0} />
    <path id="Path_5405" data-name="Path 5405" d="M25.252,27.476H5.418a1.417,1.417,0,0,0,0,2.833H25.252a1.417,1.417,0,0,0,0-2.833ZM5.418,24.643h.128l5.907-.538a2.833,2.833,0,0,0,1.714-.808l12.75-12.75a2.72,2.72,0,0,0-.1-3.839L21.937,2.826a2.833,2.833,0,0,0-3.768-.1L5.418,15.477a2.833,2.833,0,0,0-.807,1.714L4,23.1a1.413,1.413,0,0,0,1.417,1.544ZM19.968,4.809l3.868,3.867L21,11.439l-3.8-3.8Z" transform="translate(2.004 0.857)" fill="#ffa31a" />
  </g>
</svg>
<p className="text-[15px] leading-[18px] text-site_yellow ">Add Details</p>



           </div>
            </div>


       </div>
       <div className="md:flex hidden self-end">
       <p className="text-xl leading-[25px] pb-[15px] text-white">X</p>

       </div>
       <div className="md:max-w-[204px] w-full">
       <p className="mt-[30px] mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
       Quantity
            </p>
          <div  className="flex justify-between md:max-w-max max-w-[204px] items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[18px]  shadow-input rounded-[10px] w-full " >
            <button  type='button' onClick={()=>{setCount(count-1)}}>

            <img src="/assets/images/requirements/minus.svg" alt="" />
            </button>
            <p>{count}</p>
            <button type='button' onClick={()=>{setCount(count+1)}}>
            <img src="/assets/images/requirements/plus.svg" alt="" />

            </button>
            </div>
            
        


       </div>
        </div>
        <div className="flex justify-end max-w-[830px] mt-[30px] w-full">

        <div className="max-w-[266px] w-full shadow-stepShadow  rounded-xl">
          <button className="text-lg rounded-xl font-medium leading-[27px] text-center p-2 md:p-4 max-w-[266px] w-full text-site_yellow shadow-Shadow2">
          + Add Another
          </button>
        </div>
        </div>
        <div className="w-full max-w-[540px]">

<p className="mt-[20px] mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
Total amount 
    </p>
    <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
   <svg xmlns="http://www.w3.org/2000/svg" width={12} height={25} viewBox="0 0 12 25">
<text id="_" data-name="₹" transform="translate(0 19)" fill="#fff" fontSize={18} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>₹</tspan></text>
</svg>


    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
    
   
    </div>
    <div className="mt-[70px] sm:flex-row gap-4 flex-col flex justify-between items-center">
      <div onClick={()=>{setActive(true)}} className="shadow-stepShadow rounded-xl w-full  max-w-[200px]">
      <div className={`shadow-Shadow2 ${Active&& "border border-site_yellow"} flex flex-col justify-center items-center h-[150px] text-xl text-white leading-[25px] gap-[10px] rounded-xl w-full max-w-[200px]`}>
        <p>Buying</p>
        <div className="flex justify-between items-center ">
          <p>@Fix</p>
          <p>% / ₹ </p>

        </div>
      </div>
      </div>
        <p className="text-xl leading-[25px] text-light_text">OR</p>
        <div onClick={()=>{setActive(false)}} className={`shadow-stepShadow   rounded-xl w-full  max-w-[200px]`}>
      <div className={`shadow-Shadow2  ${!Active&& "border border-site_yellow"} flex h-[150px] flex-col justify-center items-center  text-xl text-white leading-[25px] gap-[10px] rounded-xl w-full max-w-[200px]`}>
        <p>Attract Bids</p>
        
      </div>
      </div>
        </div>


</div>
<div className="max-w-[1110px] gap-5 md:flex-row flex-col   mt-[70px] w-full flex justify-between items-center md:items-end">
  <div className="w-full">
  <p className=" mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
Total amount 
    </p>
    <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
   <svg xmlns="http://www.w3.org/2000/svg" width={12} height={25} viewBox="0 0 12 25">
<text id="_" data-name="₹" transform="translate(0 19)" fill="#fff" fontSize={18} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>₹</tspan></text>
</svg>


    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
    
   
    </div>
  </div>
  <p className="text-xl leadig-[25px] py-[10px] text-light_text">Or</p>
  <div className="w-full">
  <p className=" mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
  Enter desired Discount in %/ ₹ here 
    </p>
    <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
  <svg xmlns="http://www.w3.org/2000/svg" width={37} height={18} viewBox="0 0 37 18">
  <g id="Group_777" data-name="Group 777" transform="translate(-49 -144)">
    <rect id="Rectangle_176" data-name="Rectangle 176" width={31} height={14} rx={7} transform="translate(49 146)" fill="#ffa31a" />
    <circle id="Ellipse_400" data-name="Ellipse 400" cx={9} cy={9} r={9} transform="translate(68 144)" fill="#292929" />
    <path id="Path_14043" data-name="Path 14043" d="M12.036,7.75H8.821V4.536a.536.536,0,1,0-1.071,0V7.75H4.536a.536.536,0,1,0,0,1.071H7.75v3.214a.536.536,0,0,0,1.071,0V8.821h3.214a.536.536,0,0,0,0-1.071Z" transform="translate(68.715 144.714)" fill="gray" />
  </g>
</svg>




    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[120px]  w-full " />
    <div className="flex gap-5 items-center">
    <p className="text-lg leading-[18px]">%</p>
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
  <g id="swap">
    <rect id="Rectangle_175" data-name="Rectangle 175" width={28} height={28} transform="translate(0 28) rotate(-90)" fill="#ffa31a" opacity={0} />
    <path id="Path_5449" data-name="Path 5449" d="M4.222,10.177H20.111l-1.956,1.482a1.244,1.244,0,0,0-.244,1.729,1.213,1.213,0,0,0,1.711.247L24.511,9.93a1.243,1.243,0,0,0,0-1.964L19.793,4.26a1.215,1.215,0,0,0-1.717.216,1.246,1.246,0,0,0,.214,1.736l1.919,1.495H4.222a1.235,1.235,0,0,0,0,2.471Zm19.556,8.647H7.889l1.956-1.482a1.244,1.244,0,0,0,.244-1.729,1.214,1.214,0,0,0-1.711-.247L3.489,19.071a1.243,1.243,0,0,0,0,1.964l4.718,3.706a1.205,1.205,0,0,0,1.711-.222,1.244,1.244,0,0,0-.208-1.729L7.791,21.294H23.778a1.235,1.235,0,0,0,0-2.471Z" transform="translate(0)" fill="#ffa31a" />
  </g>
</svg>
<input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[120px]  w-full " />
<p className="text-lg leading-[18px]">₹</p>


    </div>
   
    </div>
  </div>
</div>

<div className="max-w-[1110px] gap-5 md:flex-row flex-col mt-[70px] w-full flex justify-between items-end">
  <div className="w-full">
  <p className=" mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
  Ask Question?
    </p>
    <DropDown categories={Questions} />

  </div>
  <div className="w-full">
 
  <input type="text" placeholder="Enter your Question" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />

  </div>
</div>
<div className="flex mt-24 gap-6 items-center">

{/* <input className="range" type="range" name ="" value={slider} min="0" max="1000" onChange={(e)=>{setSlider(e.target.value)}} onmousemove="rangeSlide(this.value)"/> */}
<div className="relative  child max-w-[100px]">
	<input type="range" max="100" min="0"   id="range" onChange={(e)=>{setSlider(e.target.value)}} value={slider}/>
	</div>
  <p className="text-white text-xl leading-[25px]">GSTIN</p>
</div>
<div className="max-w-[1110px] md:flex-row flex-col gap-5  mt-[40px] w-full flex justify-between items-center">
 
 
<input type="text" placeholder="GSTIN No" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
  <input type="text" placeholder="Business Name" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />

</div>
<div className="mt-[68px] max-w-[1135px] w-full ">
  <div className="flex items-center gap-[30px] ">
    <p className="text-[22px] leading-[25px] text-white">Upgrade requirement</p>
    <div className='w-[30px]  h-[30px] rounded-full shadow-stepShadow'><button type="button" onClick={()=>{handleRequirement(!requirement)}} className='w-[30px] flex justify-center items-center shadow-Shadow2 h-[30px] rounded-full'>
                      <svg className={`${requirement ?'rotate-180':"rotate-0"} transition-all duration-1000 ease-in-out `} width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5036 6.50031L5.8353 1.83704L1.16704 6.50031" stroke="#FFA31A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
</svg>
                           

                           </button></div>

  </div>
   <div className="flex flex-col gap-[30px] mt-[30px] justify-center w-full">
     {
       ReqData?.map((item,index)=>{
         return <div key={index+Math.random()} className="flex gap-5 items-end flex-col justify-center">

           <div className="flex gap-[30px] items-center w-full">
           <div className='w-[30px] h-[30px] rounded-md shadow-stepShadow'>
        <button onClick={()=>{handleToggle(index)}} className='w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-Shadow2'>
        <svg className={`${toggle&&toggle[index]?'block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="19.219" height="12.611" viewBox="0 0 19.219 12.611">
  <path id="Path_5358" data-name="Path 5358" d="M2026.454,558.5l4,5,11-9" transform="translate(-2024.346 -552.389)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
</svg>



        </button>

    </div>
    <img src={`/assets/images/requirements/${item.heading}.svg`} alt="" />
    <p className="text-xl text-white leading-[25px]">{item.money}</p>
           </div>
         <p className="text-lg max-w-[1075px] leading-[25px] text-light_text">{item.content}</p>

         </div>
       })
     }

   </div>
</div>
      </form>

      <div className="relative  px-4 md:px-6 lg:px-8 xl:px-12  w-full max-w-[1260px] flex flex-col items-center xl:mt-[200px] mt-[130px] ">
        <div className="flex md:flex-row flex-col justify-between w-full md:gap-0 gap-4 md:items-end">


            <p className="font-bold text-2xl md:text-3xl xl:text-[55px] text-white md:max-w-[636px] xl:leading-[65px]">Your Live Requirement
Preview</p>
        

          <div className="w-full max-w-[193px] flex justify-end items-center">

<button className="py-4  w-full max-w-[193px] px-3  bg-site_yellow text-white font-medium text-base md:text-lg md:leading-7 rounded-xl">Post Requirement</button>
</div>


        </div>
   
        <div className="grid w-full gap-10 mt-10 grid-cols-1 lg:grid-cols-2">
          <Deal />

        </div>

      </div>

      {/* Last Section */}
      <div className="w-full px-4">

      <div className="bg-[#292929] rounded-3xl shadow-Shadow2 md:items-start items-center md:flex-row flex-col-reverse px-4 md:px-6 lg:px-8 xl:px-12  w-full max-w-[1260px] flex  justify-between mt-[83px] ">
        <div className="py-8 sm:py-[63px] sm:pl-10">
          <p className="text-2xl sm:text-[35px] font-bold leading-10 text-white">Help us improve this page</p>
          <p className="text-lg leading-5 text-light_text mt-2">Appreciate what you Liked, Criticise what you didn't.</p>
          <div className="mt-[30px] max-w-[266px] rounded-xl shadow-stepShadow">
            <button className="rounded-xl text-lg max-w-[266px] w-full  flex items-center justify-center font-medium leading-7 text-site_yellow py-3 sm:py-[18px] shadow-Shadow2">
            Give feedback here
            </button>
          </div>
        </div>
        <img src="/assets/images/requirements/chat.svg" className="md:mr-6 md:max-w-max max-w-[260px] md:mt-[-70px]" alt="" />
        


      </div>
        </div>
     
    </div>
  );
};

export default Index;
