import React from "react";

const Deal = ({gig}) => {
  return (
    <div className="rounded-[30px] h-full max-w-[630px] w-full shadow-stepShadow">
      <div className="rounded-[30px] h-full p-5 sm:p-[30px] shadow-Shadow2 ">
        <div className="relative flex items-center justify-between">
          <p className=" md:text-xl text-lg lg:text-2xl   leading-[30px] font-bold text-white">
            {gig?.heading}
          </p>
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
          <div className="flex gap-[25px] items-center">
            <div className=" rounded-xl shadow-stepShadow">
              <div className="px-[17px] text-white text-xs md:text-[15px] font-medium leading-[23px] shadow-Shadow2 py-[10px] rounded-xl ">
                { gig?.id}
              </div>
            </div>
            <button>
              <svg
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
            </button>
          </div>
        </div>
        <div className="flex mt-[33px] sm:flex-row flex-col items-center gap-[30px]">
          <div className="rounded-xl w-full sm:max-w-[180px] object-cover object-center xl:max-w-[221px]">
          <img
              src={`/assets/images/user/cart.svg`}
              className="w-full sm:w-auto"
              alt=""
            />
          
          </div>
          <div className="flex w-full sm:w-auto flex-col">

         
       
            <p className="text-base md:text-lg md:leading-[25px] max-w-[281px] text-white">
              {
          
        "Doing Domestic Flights Booking at 500₹ off"}
            </p>


                <p className="mt-[10px] text-2xl md:text-[30px] md:leading-5 text-site_yellow font-bold">
                  {gig?.price?gig?.price:'₹ 0'}
                </p>
                <div className="flex mt-[15px] gap-5 xl:gap-0 xl:justify-between items-center justify-between sm:justify-start  xl:max-w-[116px] xl:w-full">
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
                <div className="flex mt-[10px] w-full sm:w-auto justify-between items-center">
                  <div className="flex  gap-5 xl:gap-0 w-full sm:w-auto justify-between sm:justify-start xl:justify-between items-center  xl:max-w-[116px] xl:w-full">
                    <p className="text-xs md:text-[15px] md:leading-5 text-light_text">
                      Available
                    </p>
                    <p className="text-xs md:text-[15px] md:leading-5 text-white">
                      {gig?.available}
                    </p>
                  </div>
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
                      5% OFF
                    </p>
                  </div>
                </div>
      
          </div>
        </div>

    
 

        <div
          className={`flex mt-[31px]
           justify-between items-center w-full`}
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

<div className="h-[30px] w-[30px] rounded-full shadow-stepShadow">
       
          
          
         <button className="rounded-full w-full h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.081"
                height="12.162"
                viewBox="0 0 7.081 12.162"
              >
                <path
                  id="Path_4188"
                  data-name="Path 4188"
                  d="M17.833,11.5l-4.667,4.667L8.5,11.5"
                  transform="translate(-10.086 19.248) rotate(-90)"
                  fill="none"
                  stroke="#ffa31a"
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokemiterlimit="{10}"
                  strokewidth="{2}"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
