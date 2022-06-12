import React, { useState } from "react";

const Deal = ({gig}) => {
    const [dropDown,setDropDown] = useState(false)
  return (
    <div className="rounded-[30px]   relative h-full max-w-[630px] w-full shadow-stepShadow">
      <div className="rounded-[30px] h-full p-4 sm:p-5 xl:p-[25px] shadow-Shadow2 ">
        <div className="relative flex items-center justify-between gap-3">
        <div className="flex gap-4 justify-between items-center max-w-[200px] sm:max-w-[267px] w-full">
        <p className=" md:text-xl text-lg lg:text-2xl   leading-[30px] font-bold text-white">
            {gig?.heading}
          </p>
       <svg xmlns="http://www.w3.org/2000/svg" width="26.262" height={26} viewBox="0 0 26.262 26">
  <g id="Group_633" data-name="Group 633" transform="translate(-1592.632 -46.204)">
    <path id="Path_5384" data-name="Path 5384" d="M582.654,293.48a2.019,2.019,0,0,1-.9-1.194l-.958-3.3a36.6,36.6,0,0,1-.811-3.78,8.352,8.352,0,0,0-5.233-6.409,3.032,3.032,0,1,0-6.064,0,8.354,8.354,0,0,0-5.233,6.409,36.55,36.55,0,0,1-.809,3.767l-.957,3.289h0a2.014,2.014,0,0,1-.921,1.21,2.478,2.478,0,0,0-.553.414,2.579,2.579,0,0,0-.753,2.02,2.621,2.621,0,0,0,2.627,2.4h5.382a4.335,4.335,0,0,0,8.493,0H581.4a2.571,2.571,0,0,0,1.26-4.823ZM571.72,277.537a1.29,1.29,0,0,1,1.187.789,8.409,8.409,0,0,0-2.375,0A1.291,1.291,0,0,1,571.72,277.537Zm0,22.484a2.593,2.593,0,0,1-2.438-1.717h4.876A2.593,2.593,0,0,1,571.72,300.021Zm10.273-3.711a.84.84,0,0,1-.6.249H562.091a.872.872,0,0,1-.888-.775.827.827,0,0,1,.246-.657.745.745,0,0,1,.166-.122,3.716,3.716,0,0,0,1.75-2.252h0l.956-3.3a38.3,38.3,0,0,0,.852-3.952,6.642,6.642,0,0,1,13.094,0,38.486,38.486,0,0,0,.854,3.961l.96,3.307a3.712,3.712,0,0,0,1.71,2.222.85.85,0,0,1,.449.721A.841.841,0,0,1,581.993,296.31Z" transform="translate(1033.176 -229.566)" fill="#fff" />
    <circle id="Ellipse_394" data-name="Ellipse 394" cx="5.621" cy="5.621" r="5.621" transform="translate(1607.652 49.487)" fill="#ffa31a" />
  </g>
</svg>


            </div>
        
          <div className="flex top-[50px] absolute md:hidden gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.2"
              height="16.2"
              viewBox="0 0 16.2 16.2"
            >
              <path
                id="Subtraction_1"
                data-name="Subtraction 1"
                d="M5.542,16.1A2.028,2.028,0,0,1,4,15L3,13,1,12a1.685,1.685,0,0,1-1-2L1,8,0,6c-.35-.77.273-1.576,1-2L3,3,4,1A1.7,1.7,0,0,1,6,0L8,1l2-1a1.1,1.1,0,0,1,.457-.1A2.023,2.023,0,0,1,12,1l1,2,2,1a1.684,1.684,0,0,1,1,2L15,8l1,2c.349.77-.274,1.577-1,2l-2,1-1,2a1.7,1.7,0,0,1-2,1L8,15,6,16A1.1,1.1,0,0,1,5.542,16.1ZM11.015,4.94a.608.608,0,0,0-.434.18L4.506,11.194a.616.616,0,0,0,0,.869.616.616,0,0,0,.868,0l6.074-6.075a.614.614,0,0,0-.434-1.048Zm-.868,4.594a1.226,1.226,0,1,0,.868.359A1.219,1.219,0,0,0,10.147,9.534ZM5.808,5.195a1.226,1.226,0,1,0,.868.359A1.219,1.219,0,0,0,5.808,5.195Z"
                transform="translate(0.101 0.103)"
                fill="#00e800"
              />
            </svg>
            {gig?.off && <p className="text-[11px] md:leading-5 text-[#00E800]">{gig?.off}</p>}
          </div>
          <div className="relative flex gap-[25px] items-center">
            <div className=" rounded-xl shadow-stepShadow">
              <div className="px-[17px] text-white text-xs md:text-[15px] font-medium leading-[23px] shadow-Shadow2 py-[10px] rounded-xl ">
                { gig?.id}
              </div>
            </div>
            
            <button className="relative ">
              <svg className="cursor-pointer" onClick={()=>{setDropDown(!dropDown)}}
                id="Component_16_39"
                data-name="Component 16  39"
                xmlns="http://www.w3.org/2000/svg"
                width={6}
                height={26}
                viewBox="0 0 6 26"
              >
                <path
                  id="Path_4176"
                  data-name="Path 4176"
                  d="M12.889,8.778A2.889,2.889,0,1,0,10,5.889,2.889,2.889,0,0,0,12.889,8.778Zm0,14.444a2.889,2.889,0,1,0,2.889,2.889A2.889,2.889,0,0,0,12.889,23.222Zm0-10.111A2.889,2.889,0,1,0,15.778,16,2.889,2.889,0,0,0,12.889,13.111Z"
                  transform="translate(-9.889 -3)"
                  fill="#fff"
                />
                <circle
                  id="Ellipse_729"
                  data-name="Ellipse 729"
                  cx={3}
                  cy={3}
                  r={3}
                  transform="translate(0 10.111)"
                  fill="#ffa31a"
                />
              </svg>
              {dropDown && <div className="shadow-stepShadow z-10 rounded-xl text-sm md:text-base md:leading-5  absolute h-[216px] w-[177px] right-[-20px] object-cover object-center top-6 bg-site_black">
                <img src="/assets/images/requirements/polygon.svg" className="absolute pointer-events-none right-2 -top-8 z-0" alt="" />
            <div className="shadow-Shadow2 bg-site_black text-light_text z-20 relative h-full items-center gap-4 justify-center flex flex-col rounded-xl w-full">
            <p className="max-w-[121px] w-full text-left pb-[10px] border-b border-light_text">Share</p>
<p className="max-w-[121px] w-full text-left pb-[10px] border-b border-light_text">Report</p>
<p className="max-w-[121px] w-full text-left pb-[10px] border-b border-light_text">Invite</p>
            </div>
              
            </div> }
            </button>
       
          </div>

        </div>
      <div className="flex mt-[33px] sm:flex-row lg:flex-row md:flex-col flex-col items-center gap-[30px]">
          <div className="rounded-xl w-full max-w-[180px] object-cover object-center xl:max-w-[221px]">
          <img
              src={gig?.img}
              className=" lg:max-h-[150px]   sm:max-h-max w-auto"
              alt=""
            />
          
          </div>
          <div className="flex items-center sm:items-start w-full sm:w-auto flex-col">

         
       
            <p className="text-base lg:text-left text-center md:text-lg md:leading-[25px] max-w-[281px] text-white">
              {
          
        gig?.title}
            </p>

<div className="flex mt-5 justify-between w-full items-center gap-4">
                <div>
                    <p className="text-sm md:text-[15px] text-white">Value</p>
                <p className="mt-[10px] text-2xl md:text-[30px] md:leading-5 text-site_yellow font-bold">
                  {gig?.price?gig?.price:'₹ 0'}
                </p>
                </div>
          
                <div className="flex flex-col items-end">
                    <p className="hidden md:flex text-light_text text-[11px]">Asking</p>
                <div className="hidden md:flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.2"
                      height="16.2"
                      viewBox="0 0 16.2 16.2"
                    >
                      <path
                        id="Subtraction_1"
                        data-name="Subtraction 1"
                        d="M5.542,16.1A2.028,2.028,0,0,1,4,15L3,13,1,12a1.685,1.685,0,0,1-1-2L1,8,0,6c-.35-.77.273-1.576,1-2L3,3,4,1A1.7,1.7,0,0,1,6,0L8,1l2-1a1.1,1.1,0,0,1,.457-.1A2.023,2.023,0,0,1,12,1l1,2,2,1a1.684,1.684,0,0,1,1,2L15,8l1,2c.349.77-.274,1.577-1,2l-2,1-1,2a1.7,1.7,0,0,1-2,1L8,15,6,16A1.1,1.1,0,0,1,5.542,16.1ZM11.015,4.94a.608.608,0,0,0-.434.18L4.506,11.194a.616.616,0,0,0,0,.869.616.616,0,0,0,.868,0l6.074-6.075a.614.614,0,0,0-.434-1.048Zm-.868,4.594a1.226,1.226,0,1,0,.868.359A1.219,1.219,0,0,0,10.147,9.534ZM5.808,5.195a1.226,1.226,0,1,0,.868.359A1.219,1.219,0,0,0,5.808,5.195Z"
                        transform="translate(0.101 0.103)"
                        fill="#00e800"
                      />
                    </svg>
                    <p className="text-[11px] md:leading-5 text-[#00E800]">
                      {gig?.off}
                    </p>
                  </div>
                </div>
               
</div>
{!gig?.BelowImage &&<div className="w-full mt-5 flex justify-between items-center gap-4">
<div className="flex  gap-5 xl:gap-0 xl:justify-between items-center justify-between sm:justify-start  xl:max-w-[116px] xl:w-full">
                  <p className="text-xs md:text-[15px] md:leading-5 text-light_text">
                    Urgent
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                  >
                    <g
                      id="Group_351"
                      data-name="Group 351"
                      transform="translate(-599 -5667.998)"
                    >
                      <circle
                        id="Ellipse_15"
                        data-name="Ellipse 15"
                        cx="8.5"
                        cy="8.5"
                        r="8.5"
                        transform="translate(599 5667.998)"
                        fill="#745fea"
                      />
                      <path
                        id="Path_4187"
                        data-name="Path 4187"
                        d="M484,2001.4s2.071,4,3,4,6-6,6-6"
                        transform="translate(118.5 3674.1)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex leading-5 text-site_yellow text-[11px]  gap-4 items-center">
                    <p>Invite only</p>
   <svg xmlns="http://www.w3.org/2000/svg" width="8.85" height="11.063" viewBox="0 0 8.85 11.063">
  <path id="Path_5408" data-name="Path 5408" d="M8.425,8.084a.824.824,0,0,0-.553,1.444V10.3a.553.553,0,0,0,1.106,0V9.528a.824.824,0,0,0-.553-1.444Zm2.766-2.213V4.766a2.766,2.766,0,1,0-5.531,0V5.872A1.659,1.659,0,0,0,4,7.531V11.4a1.659,1.659,0,0,0,1.659,1.659h5.531A1.659,1.659,0,0,0,12.85,11.4V7.531A1.659,1.659,0,0,0,11.191,5.872ZM6.766,4.766a1.659,1.659,0,1,1,3.319,0V5.872H6.766ZM11.744,11.4a.553.553,0,0,1-.553.553H5.659a.553.553,0,0,1-.553-.553V7.531a.553.553,0,0,1,.553-.553h5.531a.553.553,0,0,1,.553.553Z" transform="translate(-4 -2)" fill="#ffa31a" />
</svg>




                </div>
</div>}

               
           
      
          </div>
          
        </div>
{gig?.BelowImage && <p className="text-sm md:text-base md:leading-5 text-white mt-5 inline-flex gap-3">{gig?.BelowImage?.split(':')[0]} :<span>{gig?.BelowImage?.split(':')[1]}</span></p>}
        <div className="mt-7 md:mt-8 w-full justify-between flex xl:flex-row sm:flex-row flex-col lg:flex-col xl:items-center gap-4">
<div className='flex gap-4 md:gap-5 items-center'>
    <div className="shadow-stepShadow rounded-full">
        <button className=" shadow-Shadow2 text-sm rounded-full px-4 md:px-5 py-2 md:py-[10px] text-light_text">
            Open
        </button>
    </div>
    
{gig?.bid?.heading &&<p className="text-sm sm:text-[15px] inline-flex gap-2 items-center leading-5 text-light_text">{gig?.bid?.heading}  <span className="text-base md:text-lg text-white">{gig?.bid.quantity}</span></p> }
</div>
<div className="flex gap-4 md:gap-5 w-full items-center  xl:justify-end max-w-[300px] ">
{gig?.bid?.heading2 ?<p className="text-sm sm:text-[15px] inline-flex gap-2 items-center leading-5 text-light_text">{gig?.bid?.heading2}   <span className="text-base md:text-lg text-white">{gig?.bid?.quantity2}</span></p>: <p className="text-base md:text-lg md:leading-5 w-full  text-white text-center">{gig?.bid}</p>}

<button className='rounded-full px-4  bg-site_yellow flex items-center justify-center w-full text-white shadow-Shadow2 max-w-[120px] py-[10px]'>
        {gig?.action}

        </button>
</div>
</div>
 

        <div
          className={`flex sm:flex-row flex-col-reverse mt-[31px]
           justify-between gap-3 sm:items-end w-full`}
        >
          <div className="flex gap-4 items-center">
            <div className="h-[52px] w-[52px] rounded-full">
              <img src="/assets/images/landing/profile.svg" alt="profile" />
            </div>
            <div>
              <p className="font-medium text-base md:text-lg md:leading-5 text-white">
                thatveganman
              </p>
              <div className="flex mt-[5px] gap-2">
                <img src="/assets/images/landing/stars.svg" alt="profile" />
                <p className="text-[11px] md:leading-5 text-light_text">
                  (55 Reviews)
                </p>
              </div>
            </div>
          </div>

{gig?.time ? <p className="text-light_text text-[12px]">{gig?.time}</p>:
    <p className="text-[12px] text-light_text "> <span className="text-[#FB0000]">EXPIRES IN</span>  00:30</p>
}
        </div>
      </div>
    </div>
  );
};

export default Deal;
