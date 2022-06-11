import { useState,useEffect,useRef } from "react";
import DragAndDrop from "../components/DragAndDrop";
import DropDown from "../components/DropDown";
import Deal from "../components/Landing/Deal";
import ServiceFoot from "../components/Requirement/ServiceFoot";
import Upgrade from "../components/Requirement/Upgrade";
import ReqData from '../data/requirements.json'
import { useRouter } from "next/router";
import Calender from "../components/Calender";
import Counter from "../components/Requirement/Counter";
import Checkbox from "../components/Checkbox";

const Index = () => {
  const [count,setCount] = useState(0)
  const [quantity,setQuantity] = useState(1)
  const [Active,setActive] = useState(true)
  const [Accept,setAccept] = useState(false)
  const [SwitchDiscount,setSwitchDiscount] = useState(false)
  const [slider,setSlider] = useState(20)
  const [toggle,setToggle] = useState([])
  const [toggleCheckBox,setToggleCheckBox] = useState([{key:'discount',value:'Discount',toggle:false},{key:'cashback',value:'Cashback',toggle:false},{key:'coupon',value:'Coupon',toggle:false}])
  const [toggle2,setToggle2] = useState(false)
  

  const [Discount, setDiscount] = useState(typeof Number);
  const [DiscountPrice, setDiscountPrice] = useState(typeof Number);

  const handleMax = (event,min,max,setState) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setState(value);
  };
  const router  =useRouter()
  useEffect(()=>{
      let temp = []
      ReqData.map(()=>{
          temp.push(false)

      })
      setToggle(temp)
 
  },[ReqData])
  const handleToggle = (index,checkbox) =>{
    let temp
      if(checkbox){
         temp = toggleCheckBox
         temp = temp.map((item,i)=>{
          if(index==item.key){
            return  {...item,toggle:!item.toggle}

          }
          else{
              return  {...item,toggle:false}
          }
          

      })
      setToggleCheckBox(temp)


      }
      else{
        temp = toggle

        temp = temp.map((item,i)=>{
          if(index==i){
              return !item
          }
          else{
              return  false
          }
          

      })
      setToggle(temp)
      }
      
    
    
      setToggle2(!toggle2)
  }
  const [requirement,handleRequirement] = useState(false)
    const categories = [
        { value: "0", content: "Select Category" },
        { value: "1", content: "Category1" },
        { value: "2", content: "Category2" },
        { value: "3", content: "Category3" },
        
      ];
      const Stores = [
        { value: "0", content: "Multi Select" },
        { value: "1", content: "Category1" },
        { value: "2", content: "Category2" },
        { value: "3", content: "Category3" },
        
        
      ];
      const Questions = [
        { value: "0", content: "--select--" },
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
          <button onClick={()=>{router.push('/post-product')}}
            className={` px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${
              true ? "border border-[#745FEA] text-[#745FEA]" : "text-white"
            } rounded-xl `}
          >
            Product
          </button>
        </div>

        <div className="rounded-xl shadow-stepShadow">
          <button onClick={()=>{router.push('/post-service')}}
            className={`px-4 md:px-7 text-base md:text-lg  md:leading-7 font-medium shadow-Shadow2 py-[9px] md:py-4 ${
              false ? "border border-[#745FEA] text-[#745FEA]" : "text-white"
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
            Store
            </p>
          
             <DropDown categories={Stores} />

          </div>
        </div>
        <div className="w-full mt-[30px]">
            <p className=" text-base text-white mb-5  md:leading-5 md:text-xl w-full">
            Availability
            </p>
          
            <div className="flex justify-between gap-6 md:flex-nowrap flex-wrap items-center ">

                <div className="flex items-center gap-3 md:gap-5">

                    <input name="availability" type="radio" className="radio appearance-none  text-[#FFA31A] " />
                    <p className= "text-lg md:leading-[25px] text-white md:text-xl">Now</p>

                </div>

                <div className="flex items-center gap-3 md:gap-5">

<input name="availability" type="radio" className="radio appearance-none  text-[#FFA31A] " />
<p className= "text-lg md:leading-[25px] text-white md:text-xl">Hide & Seek </p>

</div>

<div className="flex items-center gap-3 md:gap-5">

<input name="availability" type="radio" className="radio appearance-none  text-[#FFA31A] " />
<p className= "text-lg md:leading-[25px] text-white md:text-xl">Later</p>

</div>

<div className="flex items-center gap-3  2xl:gap-5">

<Calender/>

<p className= "text-lg md:leading-[25px] text-white md:text-xl">Date & time</p>

</div>



            </div>

          </div>
          <div className="w-full mb-5 mt-[30px] xl:mt-[50px]">
            <p className=" text-base text-white mb-5  md:leading-5 md:text-xl w-full">
            Will you provide login credentials (ID & Password)?
            </p>
          
            <div className="flex justify-between max-w-[198px] gap-4 items-center ">

                <div className="flex items-center gap-4">

                    <input  name='choice' type="radio" className="radio appearance-none  text-[#FFA31A] " />
                    <p className= "text-lg md:leading-[25px] text-white md:text-xl">Yes</p>

                </div>

                <div className="flex items-center gap-4">

<input name='choice' type="radio" className="radio appearance-none  text-[#FFA31A] " />
<p className= "text-lg md:leading-[25px] text-white md:text-xl">No </p>

</div>


            </div>

          </div>
          <div className="rounded-md shadow-stepShadow">
          <div className="px-3 py-5 rounded-md shadow-Shadow2 md:py-6 xl:py-10 md:px-5 xl:px-[30px] ">
   <p className="lg:text-3xl mb-[40px] xl:mb-[50px] 2xl:mb-[70px] text-center w-full text-2xl  xl:text-4xl font-bold text-white xl:leading-[50px]">Main Product Details</p>
   <div >
   <p className="mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
   Product Name
            </p>
   <div className="flex gap-3 items-center pr-2 pl-[20px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px]  product-shadow rounded-[10px] w-full ">
      


      <input type="text"  placeholder={`Enter Product's Name with Information     (Color/ Variant/ Size Etc)`}  className=" text-[15px] leading-6 placeholder:text-light_text  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="28.5" height="32.571" viewBox="0 0 28.5 32.571">
<path id="Icons" d="M28.5,6.107V30.536a2.036,2.036,0,0,1-2.036,2.036H2.036A2.036,2.036,0,0,1,0,30.536V6.107A2.036,2.036,0,0,1,2.036,4.071H4.071V2.036a2.036,2.036,0,1,1,4.071,0V4.071h4.071V2.036a2.036,2.036,0,1,1,4.071,0V4.071h4.071V2.036a2.036,2.036,0,0,1,4.071,0V4.071h2.036A2.036,2.036,0,0,1,28.5,6.107Zm-4.071,6.107H4.071V14.25H24.429Zm0,6.107H4.071v2.036H24.429Zm0,6.107H4.071v2.036H24.429Z" fill="gray" />
</svg>


       
      </div>
   </div>
   <div className="flex md:flex-row flex-col xl:gap-10 lg:gap-6 gap-5 mt-[40px] xl:mt-[50px] 2xl:mt-[70px] md:items-end">
        <div className="max-w-[504px] flex flex-col gap-[30px] w-full">
        <div  >
   <p className="mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
   Product Link
            </p>
   <div className="flex gap-3 items-center pr-2 pl-[20px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px]  product-shadow rounded-[10px] w-full ">
      
  <svg xmlns="http://www.w3.org/2000/svg" width="33.611" height="33.611" viewBox="0 0 33.611 33.611">
  <g id="Layer_2" data-name="Layer 2" transform="matrix(0.799, -0.602, 0.602, 0.799, 0, 14.444)">
    <g id="link">
      <rect id="Rectangle_174" data-name="Rectangle 174" width={24} height={24} fill="gray" opacity={0} />
      <path id="Path_5447" data-name="Path 5447" d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Z" fill="gray" />
      <path id="Path_5448" data-name="Path 5448" d="M9,16H7.21A4.13,4.13,0,0,1,3,12.37,4,4,0,0,1,7,8H9A1,1,0,0,0,9,6H7.21a6.15,6.15,0,0,0-6.16,5.21A6,6,0,0,0,7,18H9a1,1,0,0,0,0-2Zm14-4.76A6.16,6.16,0,0,0,16.76,6H15.25C14.44,6,14,6.45,14,7a1,1,0,0,0,1,1h1.79A4.13,4.13,0,0,1,21,11.63,4,4,0,0,1,17,16H15a1,1,0,0,0,0,2h2a6,6,0,0,0,6-6.76Z" fill="gray" />
    </g>
  </g>
</svg>



      <input type="text"    className=" text-[15px] leading-6 placeholder:text-light_text  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
      


       
      </div>
   </div>
   <div >
   <p className="mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
   Product Price
            </p>
   <div className="flex gap-3 items-center px-[20px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px]  product-shadow rounded-[10px] w-full ">
      
  <p className="text-lg text-white" >₹</p>



      <input type="number"    className="appearance-none text-[15px] leading-6 placeholder:text-light_text  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
      


       
      </div>
   </div>
   
        </div>
        <div className="w-full">
        <DragAndDrop/>
        <div className=" flex mt-[30px] items-end gap-4 justify-between">
        <div className="" >
   <p className="mb-[15px] text-base text-white  md:leading-5 md:text-xl w-full">
   Units/Cart 
            </p>
            <Counter width={'w-[30%]'} setCount={setCount} count={count} />
  
   </div>
   <div className="text-base sm:text-lg flex gap-3 pb-4 md:text-xl xl:text-2xl text-white">
       <p>Subtotal:</p>
       <p className="text-light_text">₹500</p>
   </div>

        </div>
       

        </div>
   </div>
  
          </div>
          </div>
         
          {/* New section */}
        
     

   
        <div className="flex gap-8 sm:gap-4 sm:flex-row flex-col justify-end sm:justify-between  mt-[30px] w-full">
        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white flex items-center sm:max-w-[286px] justify-between gap-4 xl:leading-[30px]">
            <p>Cart Amount:</p>
                <p className="text-[#15D807]">₹16000</p>
        </div>
        <div className="sm:max-w-[266px] w-full shadow-stepShadow  rounded-xl">
          <button className="text-base sm:text-lg rounded-xl font-medium leading-[27px] text-center p-2 md:p-4 sm:max-w-[266px] w-full text-white shadow-Shadow2">
          +Add sub product
          </button>
        </div>
        </div>
        {/* delivery address */}
        <div className="mt-[40px] xl:mt-[50px] 2xl:mt-[70px] ">
            <p className="text-lg lg:text-xl lg:leading-[25px] text-white">Select address for Delivery</p>
            <div className=" grid gap-8 xl:gap-10 mt-[30px] grid-cols-1 md:grid-cols-2  ">

            <div className="rounded-[30px] shadow-stepShadow">
    <div className="rounded-[30px] px-4 sm:px-5 py-[30px] lg:px-[30px] shadow-Shadow2 ">
      <div className="relative flex items-start justify-between">
      
<div className="flex gap-4 md:gap-5 items-s">
    <div className="leading-[30px] mt-2">
    <input name="address" type="radio" className="radio appearance-none  text-[#FFA31A] " />

    </div>

<div>

        <p className="lg:text-2xl  text-xl lg:leading-[30px] font-bold text-white">Set as default address</p>
        <div className="mt-[30px] ">
         <p className="text-lg md:text-lg text-site_yellow leading-[25px]">Home</p>
         <p className= "text-base md:leading-[25px] text-light_text lg:max-w-[389px] md:text-lg ">Raj Lodhi 9876543210 H no. 26, Vrindavan
Dham Colony, Mayur Vihar, Ashoka Garden,
462001, Bhopal, Madhya Pradesh </p>  
       
     </div>
</div>
        

</div>
 
        <div className="flex gap-[25px] items-center">
      <svg id="Group_592" data-name="Group 592" xmlns="http://www.w3.org/2000/svg" width="20.181" height="20.157" viewBox="0 0 20.181 20.157">
  <path id="Path_5451" data-name="Path 5451" d="M2.949,20.538h12.64a2.958,2.958,0,0,0,2.949-2.96V11.227a.843.843,0,1,0-1.685,0v6.351a1.271,1.271,0,0,1-1.264,1.275H2.949a1.271,1.271,0,0,1-1.264-1.275V4.96A1.271,1.271,0,0,1,2.949,3.685h6.32A.843.843,0,1,0,9.269,2H2.949A2.958,2.958,0,0,0,0,4.96V17.578a2.958,2.958,0,0,0,2.949,2.96Z" transform="translate(0 -0.381)" fill="gray" />
  <path id="Path_5452" data-name="Path 5452" d="M9.327,8.9l-.665,3.045a.843.843,0,0,0,.228.776.875.875,0,0,0,.775.227l3.039-.667a.843.843,0,0,0,.416-.228l7.68-7.68A2.528,2.528,0,0,0,20.8.8a2.587,2.587,0,0,0-3.575,0L9.558,8.483A.843.843,0,0,0,9.327,8.9Zm9.091-6.91a.861.861,0,0,1,1.192,0,.85.85,0,0,1,0,1.191l-.6.6L17.822,2.582ZM10.918,9.5l5.708-5.722,1.18,1.186L12.1,10.686l-1.513.332Z" transform="translate(-1.36 -0.079)" fill="gray" />
</svg>


             <button>
           <svg xmlns="http://www.w3.org/2000/svg" width="16.048" height="20.927" viewBox="0 0 16.048 20.927">
  <path id="Path_5450" data-name="Path 5450" d="M21.411,10.8,21.074,21a3.36,3.36,0,0,1-3.371,3.25H11.3A3.36,3.36,0,0,1,7.929,21L7.592,10.8a.843.843,0,0,1,1.685-.056l.337,10.2a1.685,1.685,0,0,0,1.685,1.62h6.4a1.685,1.685,0,0,0,1.685-1.624l.337-10.2a.843.843,0,1,1,1.685.056Zm1.115-3.4a.843.843,0,0,1-.843.843H7.321a.843.843,0,0,1,0-1.685H9.933a1.075,1.075,0,0,0,1.073-.967,2.52,2.52,0,0,1,2.514-2.27h1.963A2.52,2.52,0,0,1,18,5.592a1.075,1.075,0,0,0,1.073.967h2.612a.843.843,0,0,1,.843.843ZM12.468,6.559h4.068a2.781,2.781,0,0,1-.215-.8.843.843,0,0,0-.838-.758H13.521a.843.843,0,0,0-.838.758,2.781,2.781,0,0,1-.216.8Zm.849,12.767V12.151a.843.843,0,0,0-1.685,0V19.33a.843.843,0,0,0,1.685,0Zm4.057,0V12.151a.843.843,0,0,0-1.685,0V19.33a.843.843,0,0,0,1.685,0Z" transform="translate(-6.478 -3.322)" fill="gray" />
</svg>




             </button>
        </div>

      </div>
   
    </div>

  </div>

  <div className="rounded-[30px] border border-site_yellow border-dashed ">
    <div className="rounded-[30px] h-full items-center justify-center  flex gap-[15px] p-5 sm:p-[30px]  ">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24.05" height={24} viewBox="0 0 24.05 24">
  <g id="Group_779" data-name="Group 779" transform="translate(0.025)">
    <path id="Path_14039" data-name="Path 14039" d="M12,24a11.869,11.869,0,0,1-8.5-3.5,12.011,12.011,0,0,1,0-17A11.869,11.869,0,0,1,12,0a11.869,11.869,0,0,1,8.5,3.5,12.011,12.011,0,0,1,0,17A11.869,11.869,0,0,1,12,24ZM12,2A9.9,9.9,0,0,0,4.9,4.9a10.08,10.08,0,0,0,0,14.2A9.9,9.9,0,0,0,12,22,9.95,9.95,0,0,0,19.1,5,9.6,9.6,0,0,0,12,2Z" fill="#fff" />
    <path id="Path_14040" data-name="Path 14040" d="M12,18a.945.945,0,0,1-1-1V7a1,1,0,0,1,2,0V17A.945.945,0,0,1,12,18Z" fill="#fff" />
    <path id="Path_14041" data-name="Path 14041" d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z" fill="#fff" />
  </g>
</svg>


        </button>
        <p className="text-lg md:text-xl md:leading-[25px] text-white">Add New Address</p>
        
    </div>

  </div>
            </div>

        </div>
  

<div className="first-input max-w-[1110px] gap-5 md:flex-row flex-col mt-[30px] w-full flex justify-between items-end">
  <div className="w-full">
 
  <input type="text" placeholder="Name on order" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />


  </div>
  <div className="w-full">
 
  <input type="text" placeholder="Mobile number" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />

  </div>
</div>
<div className="max-w-[1110px] gap-5 md:flex-row flex-col mt-5 md:mt-[30px] w-full flex justify-between items-end">
  <div className="w-full">
 
  <input type="text" placeholder="Address line 1" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />


  </div>
  <div className="w-full">
 

  </div>
</div>
<div className="max-w-[1110px] gap-5 md:flex-row flex-col mt-5 md:mt-[30px] w-full flex justify-between items-end">
  <div className="w-full">
 
  <input type="text" placeholder="Address line 2" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />


  </div>
  <div className="w-full">
 

  </div>
</div>
<div className="second-last max-w-[1110px] gap-5 md:flex-row flex-col mt-5 md:mt-[30px] w-full flex justify-between items-end">
  <div className="w-full">
 
  <input type="text" placeholder="Pincode" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />


  </div>
  <div className="w-full">
 
  <input type="text" placeholder="City & state" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />

  </div>
</div>
<div className="last-input max-w-[1110px] gap-5 md:flex-row flex-col mt-5 md:mt-[30px] w-full flex justify-between items-center">
  <div className="w-full">
 
  <input type="text" placeholder="Landmark" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />


  </div>
  <div className="w-full">
  <div className="flex md:justify-start justify-center gap-[10px] items-center">
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={34} height={34} viewBox="0 0 34 34">
  <g id="edit-2">
    <rect id="Rectangle_167" data-name="Rectangle 167" width={34} height={34} fill="#ffa31a" opacity={0} />
    <path id="Path_5405" data-name="Path 5405" d="M25.252,27.476H5.418a1.417,1.417,0,0,0,0,2.833H25.252a1.417,1.417,0,0,0,0-2.833ZM5.418,24.643h.128l5.907-.538a2.833,2.833,0,0,0,1.714-.808l12.75-12.75a2.72,2.72,0,0,0-.1-3.839L21.937,2.826a2.833,2.833,0,0,0-3.768-.1L5.418,15.477a2.833,2.833,0,0,0-.807,1.714L4,23.1a1.413,1.413,0,0,0,1.417,1.544ZM19.968,4.809l3.868,3.867L21,11.439l-3.8-3.8Z" transform="translate(2.004 0.857)" fill="#ffa31a" />
  </g>
</svg>
<p className="text-[15px] leading-[18px] text-site_yellow ">Add note</p>



           </div>
 

  </div>
</div>
<div className="mt-[55px] sm:flex-row flex-col  max-w-[542px] w-full flex justify-between gap-4 items-start">
  <div className="max-w-[256px] w-full">
  <p className="mb-5 text-base text-white  md:leading-5 md:text-xl w-full">
  Payment method
    </p>
    <div className="flex justify-between w-full gap-5">
    <div className="flex items-center gap-5">

<input name="method" type="radio" className="radio appearance-none  text-[#FFA31A] " />
<p className= "text-lg md:leading-[25px] text-white md:text-xl">COD</p>

</div> 
 <div className="flex items-center gap-5">

<input name="method" type="radio" className="radio appearance-none  text-[#FFA31A] " />
<p className= "text-lg md:leading-[25px] text-white md:text-xl">Prepaid</p>

</div>
    </div>
  
  </div>
  <div className=" w-full max-w-[204px]">
  <p className="mb-5 text-base text-white  md:leading-5 md:text-xl w-full">
  Quantity
    </p>
 <Counter count={quantity} setCount={setQuantity} />
  
  </div>

</div>

<div className="mt-[70px]  max-w-[589px] w-full ">
<p className="mb-5 text-base text-white  md:leading-5 md:text-xl w-full">
Add offer
    </p>
    <div className="flex sm:flex-nowrap flex-wrap gap-6 items-center justify-between">
    {toggleCheckBox?.map((item)=>{
     return  <div key={item.key} className="max-w-[146px] w-full flex gap-6 justify-between items-center">
<p className= "text-base sm:text-lg md:leading-[25px] text-white md:text-xl">{item.value}</p>


       <Checkbox item={item} handleToggle={handleToggle}  />
      </div>
    })
    }
    </div>

</div>
<div className="mt-8 hidden md:flex items-center gap-1 text-lg md:text-xl md:leading-[25px] text-white">
<div className="w-[32px] relative">

<input onChange={(e)=>{handleMax(e,0,100,setDiscount)}} value={Discount} type="number" className=" appearance-none outline-none bg-transparent w-[37px] " name="" id="" />
<div className="absolute justify-between flex w-full bottom-0">
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>

</div>
</div>
<p>% Upto </p>
<div className="w-[37px] relative">

<input onChange={(e)=>{handleMax(e,0,999,setDiscountPrice)}} value={DiscountPrice} type="number" className=" appearance-none outline-none bg-transparent w-[37px] " name="" id="" />
<div className="absolute justify-between flex w-full bottom-0">
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>

</div>
</div>
<p>₹ Discount on  Select</p>
<img src="/assets/images/requirements/triangle.svg" alt="" />
<p className="ml-4">bank Debit</p>
<img src="/assets/images/requirements/triangle.svg" alt="" />
<p className="ml-4">Card</p>

</div>


<div className="mt-8 flex flex-col md:hidden items-start gap-5 text-base  text-white">
  <div className="flex gap-1">
  <div className="w-[32px] relative">

<input onChange={(e)=>{handleMax(e,0,100,setDiscount)}} value={Discount} type="number" className=" appearance-none outline-none bg-transparent w-[37px] " name="" id="" />
<div className="absolute justify-between flex w-full bottom-0">
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>

</div>
</div>
<p>% Upto </p>
<div className="w-[37px] relative">

<input onChange={(e)=>{handleMax(e,0,999,setDiscountPrice)}} value={DiscountPrice} type="number" className=" appearance-none outline-none bg-transparent w-[37px] " name="" id="" />
<div className="absolute justify-between flex w-full bottom-0">
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>
<div className="bg-white w-[8px] h-[2px]  bottom-0"></div>

</div>
</div>
<p>₹</p>
  </div>
<div className="flex gap-1 flex-wrap">
  <div className="flex gap-1">

<p> Discount on  Select</p>
<img src="/assets/images/requirements/triangle.svg" alt="" />
  </div>
  <div className="flex gap-1">

<p className="ml-4">bank Debit</p>
<img src="/assets/images/requirements/triangle.svg" alt="" />
  </div>
<p className="ml-4">Card</p>
</div>


</div>




<div className="w-full max-w-[540px]">


  
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
  Enter your buying rate
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
  {  SwitchDiscount? 
   <div className="flex gap-3 items-center px-4 xl:px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
       <svg xmlns="http://www.w3.org/2000/svg" width={37} height={18} viewBox="0 0 37 18">
  <g id="Group_777" data-name="Group 777" transform="translate(-49 -144)">
    <rect id="Rectangle_176" data-name="Rectangle 176" width={31} height={14} rx={7} transform="translate(49 146)" fill="#ffa31a" />
    <circle id="Ellipse_400" data-name="Ellipse 400" cx={9} cy={9} r={9} transform="translate(68 144)" fill="#292929" />
    <path id="Path_14043" data-name="Path 14043" d="M12.036,7.75H8.821V4.536a.536.536,0,1,0-1.071,0V7.75H4.536a.536.536,0,1,0,0,1.071H7.75v3.214a.536.536,0,0,0,1.071,0V8.821h3.214a.536.536,0,0,0,0-1.071Z" transform="translate(68.715 144.714)" fill="gray" />
  </g>
</svg>
     <div className="flex w-full gap-4 xl:gap-5 justify-end items-center">
    <p className="text-lg leading-[18px]">%</p>
    <svg className="w-[28px]" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
  <g id="swap">
    <rect id="Rectangle_175" data-name="Rectangle 175" width={28} height={28} transform="translate(0 28) rotate(-90)" fill="#ffa31a" opacity={0} />
    <path id="Path_5449" data-name="Path 5449" d="M4.222,10.177H20.111l-1.956,1.482a1.244,1.244,0,0,0-.244,1.729,1.213,1.213,0,0,0,1.711.247L24.511,9.93a1.243,1.243,0,0,0,0-1.964L19.793,4.26a1.215,1.215,0,0,0-1.717.216,1.246,1.246,0,0,0,.214,1.736l1.919,1.495H4.222a1.235,1.235,0,0,0,0,2.471Zm19.556,8.647H7.889l1.956-1.482a1.244,1.244,0,0,0,.244-1.729,1.214,1.214,0,0,0-1.711-.247L3.489,19.071a1.243,1.243,0,0,0,0,1.964l4.718,3.706a1.205,1.205,0,0,0,1.711-.222,1.244,1.244,0,0,0-.208-1.729L7.791,21.294H23.778a1.235,1.235,0,0,0,0-2.471Z" transform="translate(0)" fill="#ffa31a" />
  </g>
</svg>
<input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[50px] xl:max-w-[120px]  w-full " />
<p className="text-lg leading-[18px]">₹</p>


    </div>
  




    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[50px] xl:max-w-[120px]  w-full " />

   
    </div>:
    <div className="flex gap-3 items-center px-4 xl:px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[540px]">
    <svg xmlns="http://www.w3.org/2000/svg" width={37} height={18} viewBox="0 0 37 18">
    <g id="Group_777" data-name="Group 777" transform="translate(-49 -144)">
      <rect id="Rectangle_176" data-name="Rectangle 176" width={31} height={14} rx={7} transform="translate(49 146)" fill="#ffa31a" />
      <circle id="Ellipse_400" data-name="Ellipse 400" cx={9} cy={9} r={9} transform="translate(68 144)" fill="#292929" />
      <path id="Path_14043" data-name="Path 14043" d="M12.036,7.75H8.821V4.536a.536.536,0,1,0-1.071,0V7.75H4.536a.536.536,0,1,0,0,1.071H7.75v3.214a.536.536,0,0,0,1.071,0V8.821h3.214a.536.536,0,0,0,0-1.071Z" transform="translate(68.715 144.714)" fill="gray" />
    </g>
  </svg>
  
  
  
  
      <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[50px] xl:max-w-[120px]  w-full " />
      <div className="flex w-full gap-4 xl:gap-5 justify-end items-center">
      <p className="text-lg leading-[18px]">%</p>
      <svg className="w-[28px]" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28">
    <g id="swap">
      <rect id="Rectangle_175" data-name="Rectangle 175" width={28} height={28} transform="translate(0 28) rotate(-90)" fill="#ffa31a" opacity={0} />
      <path id="Path_5449" data-name="Path 5449" d="M4.222,10.177H20.111l-1.956,1.482a1.244,1.244,0,0,0-.244,1.729,1.213,1.213,0,0,0,1.711.247L24.511,9.93a1.243,1.243,0,0,0,0-1.964L19.793,4.26a1.215,1.215,0,0,0-1.717.216,1.246,1.246,0,0,0,.214,1.736l1.919,1.495H4.222a1.235,1.235,0,0,0,0,2.471Zm19.556,8.647H7.889l1.956-1.482a1.244,1.244,0,0,0,.244-1.729,1.214,1.214,0,0,0-1.711-.247L3.489,19.071a1.243,1.243,0,0,0,0,1.964l4.718,3.706a1.205,1.205,0,0,0,1.711-.222,1.244,1.244,0,0,0-.208-1.729L7.791,21.294H23.778a1.235,1.235,0,0,0,0-2.471Z" transform="translate(0)" fill="#ffa31a" />
    </g>
  </svg>
  <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px] max-w-[50px] xl:max-w-[120px]  w-full " />
  <p className="text-lg leading-[18px]">₹</p>
  
  
      </div>
     
      </div>}
  </div>
</div>
<div className="max-w-[1110px] gap-5 md:flex-row flex-col mt-[30px] w-full flex justify-between items-cemter">
<p className="text-light_text text-base sm:text-lg md:text-xl md:leading-6">You have to deposit <span className="text-white text-lg sm:text-xl md:text-2xl "> ₹14400</span></p>
<div className="flex justify-between max-w-[239px] w-full items-center gap-4">
<svg xmlns="http://www.w3.org/2000/svg" width="33.552" height={33} viewBox="0 0 33.552 33">
  <path id="Path_14185" data-name="Path 14185" d="M31.358,10.1H5.145V9.051L28.212,7.205V9.051h3.145V5.905a3.542,3.542,0,0,0-4.15-3.6L6.152,5.312A5,5,0,0,0,2,10.1v20.97a4.194,4.194,0,0,0,4.194,4.194H31.358a4.194,4.194,0,0,0,4.194-4.194V14.293A4.194,4.194,0,0,0,31.358,10.1ZM28.212,24.791a3.147,3.147,0,1,1,3.148-3.145,3.147,3.147,0,0,1-3.148,3.145Z" transform="translate(-2 -2.263)" fill="#fff" />
</svg>
<p className="text-white text-base sm:text-lg md:text-xl md:leading-6">Available : ₹20000</p>

</div>
</div>
<div className="max-w-[795px] w-full flex-col md:flex-row flex justify-between gap-4 md:items-center mt-10">
  <div className="flex   md:justify-between gap-5 md:gap-3 lg:gap-4 items-center w-full max-w-[390px]">
    <Checkbox state={Accept} single={true} handleToggle={setAccept} />
    <p className="text-white text-base sm:text-lg md:text-xl md:leading-6">Auto accept bid if value between</p>
  </div>
  <div className="flex justify-between w-full items-center max-w-[320px] lg:max-w-[350px] ">
  <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[130px]">
   <svg xmlns="http://www.w3.org/2000/svg" width={12} height={25} viewBox="0 0 12 25">
<text id="_" data-name="₹" transform="translate(0 19)" fill="#fff" fontSize={18} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>₹</tspan></text>
</svg>


    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
    
   
    </div>
    <div className="h-[2px]  w-[25px] bg-light_text"></div>
    <div className="flex gap-3 items-center px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black  py-[15px] shadow-input rounded-[10px] w-full max-w-[130px]">
   <svg xmlns="http://www.w3.org/2000/svg" width={12} height={25} viewBox="0 0 12 25">
<text id="_" data-name="₹" transform="translate(0 19)" fill="#fff" fontSize={18} fontFamily="Poppins-Regular, Poppins"><tspan x={0} y={0}>₹</tspan></text>
</svg>


    <input type="number" placeholder="" className=" pr-3  outline-none bg-transparent rounded-l-[10px] py-[5px]  w-full " />
    
   
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
 

  </div>
</div>


<div className="flex mt-24 gap-6 items-center">

<div className="relative  child max-w-[100px]">
	<input type="range" className="bg-transparent relative z-10" max="100" min="0"   id="range" onChange={(e)=>{setSlider(e.target.value)}} value={slider}/>
  <div className="flex ">
  <div style={{width: `${slider==0?slider+4:slider-5}px`}} className="absolute top-2  bg-[#745FEA] left-0 w-full border border-[#745FEA]  h-[9px] rounded-[10px]"></div>
  <div style={{width: `${slider==0?94 - slider:100 - slider}px`}} className="absolute top-2 right-1  bg-white w-full   h-[9px] rounded-[10px]">

  </div>

  </div>
	</div>
  <p className="text-white text-xl leading-[25px]">GSTIN</p>
</div>

<Upgrade requirement={requirement} handleRequirement={handleRequirement}  ReqData={ReqData} toggle={toggle} handleToggle={handleToggle} />

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
          <Deal cart={true} />

        </div>

      </div>

      {/* Last Section */}
    <ServiceFoot/>
     
    </div>
  );
};

export default Index;
