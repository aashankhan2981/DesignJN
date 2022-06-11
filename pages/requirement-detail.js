import React,{useState} from 'react'
import Card from '../components/Requirement/Card'
import ServiceFoot from '../components/Requirement/ServiceFoot'
import Steps from '../data/ReqDetailSteps.json'
const Index = () => {
    const [ActiveStep,setActive] = useState(1)
  const [slider,setSlider] = useState(100)

   return (
    <div className='flex flex-col items-center w-full'>
    <div className="max-w-[1291px] mb-[200px] overflow-x-hidden  mt-[70px] md:mt-[86px] lg:px-10 md:px-6 px-4 w-full ">
  <p className="font-bold xl:text-[55px]  text-center md:text-3xl text-xl  sm:text-2xl  lg:text-4xl xl:leading-[65px]  text-white">
  Requirement Details
      </p>
      <div className='flex mt-9 md:mt-12 lg:mt-14 sm:flex-row flex-col gap-5  w-full justify-between items-center'>
          <div className='flex sm:w-1/2 items-center   gap-5 md:gap-6 xl:gap-10  '>
              <button className='border border-[#15D807] w-full max-w-[140px] py-[9px] sm:py-3 md:py-[14px] flex items-center justify-center rounded-full text-base text-[#15D807] md:leading-7 md:text-lg'>Open</button>
              <p className=' text-lg md:text-xl md:leading-[26px] text-white font-medium md:font-semibold  md:max-w-[374px]'>Need Airtel Mobile Recharge of ₹299</p>
          </div>
          <button className='bg-[#FFA31A] md:py-4 2xl:py-5 py-3 text-base md:text-lg md:leading-7 text-white rounded-md px-5 md:px-7 xl:px-8 flex items-center gap-1 '>
              <img src="/assets/images/requirements/diamond.svg" alt="diamond" />
              Promote
          </button>
          <div>

          </div>

      </div>
      <div className='flex mt-9 md:mt-12 lg:mt-14  md:flex-nowrap flex-wrap gap-5  w-full justify-between items-center'>
          {Steps?.map((item)=>{
              return <div  key={item.step + " step "}>
              <img onClick={()=>{setActive(item?.step)}} src={`/assets/images/requirements/step${item.step}${ActiveStep==item.step?'fill':''}.svg`} className="cursor-pointer xl:max-w-[250px] 2xl:max-w-min  lg:max-w-[200px] md:max-w-[165px] max-w-[137px]" alt={`steps`+item.step} />
              <p className={`text-lg md:text-xl text-center xl:text-2xl ${item.step==ActiveStep?'text-white':'text-light_text'}`}>{item?.heading1}</p>
              <p className={`${item.step==ActiveStep?'text-white':'text-light_text'} text-center ${item.step==1?'text-lg md:text-xl text-center xl:text-2xl':'text-lg leading-7'}`}>{item?.heading2}</p>
          </div>
        })}
          
    </div>
    {ActiveStep==1?
    <>
    <div className='flex mt-9 md:mt-12 lg:mt-14 sm:flex-nowrap flex-wrap  gap-5  w-full justify-between items-start text-base sm:text-lg md:text-xl xl:text-2xl text-white xl:leading-6'>
        <div className='flex sm:w-1/2 items-start   gap-5 md:gap-6 xl:gap-10 '>
            <p>ID#123</p>
            <p>Recharge & Bill / Mobile Recharge</p>
        </div>
        <p>Posted 22 July 2022, 09:44 PM</p>
    </div>
    {/* third seciton */}
    <div className='flex mt-9 sm:flex-row flex-col md:mt-12 lg:mt-14  gap-5  w-full justify-between items-center text-lg md:text-xl xl:text-2xl text-white xl:leading-6'>
        <div className='flex sm:w-1/2 items-center   gap-5 md:gap-6 xl:gap-10 '>
        <button className='border border-light_text w-full max-w-[140px] py-[14px] flex items-center justify-center rounded-full px-6 text-base text-light_text md:leading-7 md:text-lg'>Public</button>

        <button className='border border-site_yellow w-full max-w-[140px] py-[14px] flex items-center justify-center rounded-full px-6 text-base text-site_yellow md:leading-7 md:text-lg'>Urgent</button>

        </div>
        <p><span className='text-[#FF0000]'>Expires</span>  in 00:00:30 </p>
    </div>
    {/* fourth section */}
    <div className=' mt-9 md:mt-12 lg:mt-14 flex justify-center    w-full '>
        <img src="/assets/images/requirements/reqbackground.svg" className='w-full object-contain object-center' alt="req background" />
</div>
{/* fifth section */}
<div className='mt-[30px] max-w-[906px] w-full '>
    <p className='text-lg md:text-xl md:leading-[25px] text-light_text'>Description</p>
    <p className='text-sm leading-4 text-white mt-5 sm:mt-6 md:mt-8 ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium dolor etiam elementum. Lorem ipsum dolor sit amet,
consectetur adipiscing elit. Sed pretium dolor etiam elementum. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Se pretium dolor etiam elementum. </p>

</div>
{/* sixth section */}
<div className='mt-[60px] md:mt-20 xl:mt-24 max-w-[337px] w-full flex items-end justify-between gap-4'>
    <div>
        <p className='text-lg mb-7 md:text-xl md:leading-6 text-light_text'>Value</p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>₹ 200</p>


    </div>

     <div>
    <p className='text-xl md:text-2xl md:leading-5 text-white'>X</p>
         
     </div>
     <div>
        <p className='text-lg mb-7 md:text-xl md:leading-6 text-light_text'>Quantity</p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>2</p>


    </div>
</div>
<div className=''>
        <p className='text-lg mt-10 xl:mt-12 mb-7 md:text-xl md:leading-6 text-light_text'>Total amount </p>
        <p className='text-xl md:text-2xl md:leading-5 text-white'>₹ 400</p>


    </div>
{/* Attract bids */}
<div className='flex max-w-[739px] sm:flex-row flex-col w-full gap-4 justify-between mt-9 md:mt-12 items-center'>
    <img src="/assets/images/requirements/attractbid.svg" alt="attract bid" />
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>7</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Bids</p>
    </div>
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>₹ 150</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Highest</p>
    </div>
    <div className='flex flex-col gap-1 '>
        <p className='text-white text-xl sm:text-2xl lg:text-[28px] '>₹ 120</p>
        <p className='text-light_text text-lg md:text-xl md:leading-7 '>Lowest</p>
    </div>

</div>

<div className='max-w-[496px] mt-10 md:mt-14 lg:mt-16 gap-5 sm:text-lg md:text-xl md:leading-6  w-full flex flex-col '>
    <div className='flex justify-between w-full gap-2 items-center'>
     <p className='text-light_text'>Asked question:</p>
     <p className='text-white'>What is source of recharge?</p>
    </div>
    <div className='flex justify-between w-full items-center'>
    <p className='text-light_text'>GST information:</p>
     <p className='text-white'>7RIndia   ABCD1234567890</p>

</div>

</div>
{/* Second last section */}
<div className='flex mt-10 max-w-[1050px] md:mt-14 sm:flex-row flex-col  justify-between gap-5 items-center w-full'>
    <div className='max-w-[439px] w-full shadow-stepShadow rounded-xl'>
        <button className='rounded-xl flex items-center justify-center w-full text-site_yellow shadow-Shadow2 py-3 md:py-4'>
        Edit Requirement


        </button>
    </div>
    <div className='max-w-[439px] w-full shadow-stepShadow rounded-xl'>
        <button className='rounded-xl flex items-center justify-center w-full text-site_yellow shadow-Shadow2 py-3 md:py-4'>
        Delete Requirement


        </button>
    </div>
    <button className='text-lg md:text-xl md:leading-6 text-[#745FEA] flex justify-center items-center gap-4'>
        <img src="/assets/images/requirements/share.svg" alt="share icon" />
        Share
    </button>

</div>
</>
: ActiveStep==2?
<>
<div className='max-w-[532px] mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex justify-between items-center gap-4 w-full text-base sm:text-lg md:text-xl lg:text-2xl  md:leading-6 text-white'>
    <button className='text-site_yellow' >Search</button>
    <button>Invited (3)</button>
    <button>Dealed with (6)</button>


</div>
<div className='flex items-center max-w-[1068px] w-full mx-6 md:mx-7 justify-center 2xl:justify-between sm:flex-row flex-col gap-4 mt-8 md:mt-10 lg:mt-14'>

<div className='2xl:max-w-[948px]  gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-6 md:px-7   md:w-2/3 2xl:w-full flex items-center py-5 product-shadow rounded-xl'>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
  <g id="search">
    <rect id="Rectangle_10" data-name="Rectangle 10" width={27} height={27} fill="#f7971e" opacity={0} />
    <path id="Path_1" data-name="Path 1" d="M23.41,21.773l-3.918-3.907a9.127,9.127,0,0,0,1.948-5.647,9.22,9.22,0,1,0-9.22,9.22,9.127,9.127,0,0,0,5.647-1.948l3.907,3.918a1.157,1.157,0,1,0,1.636-1.636ZM5.3,12.22a6.915,6.915,0,1,1,6.915,6.915A6.915,6.915,0,0,1,5.3,12.22Z" transform="translate(0.457 0.457)" fill="#f7971e" />
  </g>
</svg>
 <input type="text" className='text-base bg-transparent md:text-lg outline-none md:leading-[18px] text-light_text w-full' placeholder='Search by Username' />




</div>
<div>
    <p className='text-sm  text-light_text '> <span className='mr-1 text-lg md:text-xl lg:text-2xl lg:leading-6 text-site_yellow'>3</span> Invite left</p>
</div>
</div>

<div className='mt-8 w-full px-4 md:mt-10 lg:mt-14 flex sm:flex-row flex-col  items-center gap-4 max-w-[1068px] justify-between '>

<div className='max-w-[196px] sm:justify-start justify-center  gap-4   w-full flex items-center  '>
<div className="relative  child max-w-[100px]">
	<input type="range" className="bg-transparent relative z-10" max="100" min="0"   id="range" onChange={(e)=>{setSlider(e.target.value)}} value={slider}/>
  <div className="flex ">
  <div style={{width: `${slider==0?slider+4:slider-5}px`}} className="absolute top-2  bg-[#745FEA] left-0 w-full border border-[#745FEA]  h-[9px] rounded-[10px]"></div>
  <div style={{width: `${slider==0?94 - slider:100 - slider}px`}} className="absolute top-2 right-1  bg-white w-full   h-[9px] rounded-[10px]">

  </div>

  </div>
	</div>
    <p className='text-lg md:text-xl md:leading-6 text-white'>Online</p>
</div>
<div className='flex gap-4 sm:w-auto w-full justify-between sm:justify-start md:gap-6 lg:gap-7 items-center'>
    <div className='rounded-xl shadow-stepShadow text-base md:leading-7 font-medium text-white md:text-lg '>

    <button className='px-4 md:px-5 lg:px-7 flex items-center gap-2 md:gap-3 py-3 md:py-4 lg:py-5 rounded-xl shadow-Shadow2'>Filter 
   <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25">
  <path id="Path_5426" data-name="Path 5426" d="M18.347,4.806H17.29a2.709,2.709,0,0,0-5.108,0H3.9a.9.9,0,1,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806ZM14.736,6.611a.9.9,0,1,0-.9-.9A.9.9,0,0,0,14.736,6.611ZM3,11.125a.9.9,0,0,1,.9-.9H4.96a2.709,2.709,0,0,1,5.108,0h8.279a.9.9,0,1,1,0,1.806H10.068a2.709,2.709,0,0,1-5.108,0H3.9A.9.9,0,0,1,3,11.125Zm4.514.9a.9.9,0,1,0-.9-.9A.9.9,0,0,0,7.514,12.028ZM3.9,15.639a.9.9,0,0,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806H17.29a2.709,2.709,0,0,0-5.108,0Zm11.736.9a.9.9,0,1,1-.9-.9A.9.9,0,0,1,15.639,16.542Z" transform="translate(-3 -3)" fill="#fff" fillRule="evenodd" />
</svg>


    </button>
    </div>
    <div className='rounded-xl shadow-stepShadow text-base md:leading-7 font-medium text-white md:text-lg '>

    <button className='px-4 md:px-5 lg:px-7 flex items-center gap-2 md:gap-3 py-3 md:py-4 lg:py-5 rounded-xl shadow-Shadow2'>Sort By 
   <svg xmlns="http://www.w3.org/2000/svg" width="14.829" height="8.414" viewBox="0 0 14.829 8.414">
  <path id="Path_4188" data-name="Path 4188" d="M12,6,6,0,0,6" transform="translate(13.414 7.414) rotate(180)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
</svg>




    </button>
    </div>
</div>
</div>

{/* Cards */}
<div className='flex w-full items-center lg:justify-between lg:flex-row flex-col gap-8 lg:gap-4 md:gap-6 md:mt-10 lg:mt-14 mt-8 '>

<Card lastImage={"threeboys"} available = {'2 in Queue'} hoverd={false}/>
<Card lastImage={'flash'}  available = {'Available Now'} hoverd={true} />
</div>
{/* Cards */}

</>:ActiveStep==3?<>
<div className='max-w-[532px] mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex justify-between items-center gap-4 w-full text-base sm:text-lg md:text-xl lg:text-2xl  md:leading-6 text-white'>
    <button className='text-site_yellow' >All Bids (10)</button>
    <button>Liked (2)</button>
    <button>Archived (2)</button>


</div>
<div className='flex items-center  w-full mx-6 md:mx-7 justify-center 2xl:justify-between sm:flex-row flex-col gap-4 mt-8 md:mt-10 lg:mt-14'>

<div className='2xl:max-w-[948px]   gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-6 md:px-7   md:w-2/3  flex items-center py-5 product-shadow rounded-xl'>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
  <g id="search">
    <rect id="Rectangle_10" data-name="Rectangle 10" width={27} height={27} fill="#f7971e" opacity={0} />
    <path id="Path_1" data-name="Path 1" d="M23.41,21.773l-3.918-3.907a9.127,9.127,0,0,0,1.948-5.647,9.22,9.22,0,1,0-9.22,9.22,9.127,9.127,0,0,0,5.647-1.948l3.907,3.918a1.157,1.157,0,1,0,1.636-1.636ZM5.3,12.22a6.915,6.915,0,1,1,6.915,6.915A6.915,6.915,0,0,1,5.3,12.22Z" transform="translate(0.457 0.457)" fill="#f7971e" />
  </g>
</svg>
 <input type="text" className='text-base bg-transparent md:text-lg outline-none md:leading-[18px] text-light_text w-full' placeholder='Search by Username' />




</div>
<div className='flex gap-4 sm:w-auto w-full justify-center sm:justify-start md:gap-6 lg:gap-7 items-center'>
    <div className='rounded-xl shadow-stepShadow text-base md:leading-7 font-medium text-white md:text-lg '>

    <button className='px-4 md:px-5 lg:px-7 flex items-center gap-2 md:gap-3 py-3 md:py-4 lg:py-5 rounded-xl shadow-Shadow2'>Filter 
   <svg xmlns="http://www.w3.org/2000/svg" width="16.25" height="16.25" viewBox="0 0 16.25 16.25">
  <path id="Path_5426" data-name="Path 5426" d="M18.347,4.806H17.29a2.709,2.709,0,0,0-5.108,0H3.9a.9.9,0,1,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806ZM14.736,6.611a.9.9,0,1,0-.9-.9A.9.9,0,0,0,14.736,6.611ZM3,11.125a.9.9,0,0,1,.9-.9H4.96a2.709,2.709,0,0,1,5.108,0h8.279a.9.9,0,1,1,0,1.806H10.068a2.709,2.709,0,0,1-5.108,0H3.9A.9.9,0,0,1,3,11.125Zm4.514.9a.9.9,0,1,0-.9-.9A.9.9,0,0,0,7.514,12.028ZM3.9,15.639a.9.9,0,0,0,0,1.806h8.279a2.709,2.709,0,0,0,5.108,0h1.057a.9.9,0,1,0,0-1.806H17.29a2.709,2.709,0,0,0-5.108,0Zm11.736.9a.9.9,0,1,1-.9-.9A.9.9,0,0,1,15.639,16.542Z" transform="translate(-3 -3)" fill="#fff" fillRule="evenodd" />
</svg>


    </button>
    </div>
    <div className='rounded-xl shadow-stepShadow text-base md:leading-7 font-medium text-white md:text-lg '>

    <button className='px-4 md:px-5 lg:px-7 flex items-center gap-2 md:gap-3 py-3 md:py-4 lg:py-5 rounded-xl shadow-Shadow2'>Sort By 
   <svg xmlns="http://www.w3.org/2000/svg" width="14.829" height="8.414" viewBox="0 0 14.829 8.414">
  <path id="Path_4188" data-name="Path 4188" d="M12,6,6,0,0,6" transform="translate(13.414 7.414) rotate(180)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={2} />
</svg>




    </button>
    </div>
</div>
</div>

<div className='mt-8 w-full px-4 md:mt-10 lg:mt-14 flex sm:flex-row flex-col  items-center gap-4 max-w-[1068px] justify-between '>



</div>

{/* Cards */}
<div className='w-full flex justify-center '>
<div className='grid  w-full  lg:grid-cols-2 grid-cols-1 gap-8 gap-y-14 xl:gap-y-14  md:gap-6 md:mt-10 lg:mt-14 mt-8 '>

<Card step3={true} tag={'sponserd'}  available = {'2 in Queue'} hoverd={false}/>
<Card  step3={true} tag={'highlighted'} available = {'Available Now'} hoverd={true} />
<Card  step3={true} tag={'sponserd'} available = {'Available Now'} hoverd={true} />
<Card  step3={true} tag={'none'} available = {'Available Now'} hoverd={true} />
</div>
</div>

{/* Cards */}

</>
:ActiveStep==4?
<>
<div className='flex mt-9 md:mt-12 lg:mt-14 sm:flex-nowrap flex-wrap  gap-5  w-full justify-between items-start text-base sm:text-lg md:text-xl xl:text-2xl text-white xl:leading-6'>
        <div className='flex sm:w-1/2 items-start   gap-5 md:gap-6 xl:gap-10 '>
            <p>ID#123</p>
            <p>Category/ Subcategory</p>
        </div>
        <p>Posted 22 July 2022, 09:44 PM</p>
    </div>
    <div className='mt-14 md:mt-16 lg:mt-20 '>
        <div className=' max-w-[234px] text-lg md:text-xl lg:text-2xl lg:leading-6 text-white w-full flex justify-between items-center gap-5'>
            <p className='text-site_yellow'>Seller 1</p>
            <p>Seller 2</p>
        </div>
        <div className='mt-6  border-t pt-6 border-t-[#808080]'>
            <div className='flex justify-between w-full items-start'>
                <div className='max-w-[303px] flex justify-between items-center gap-4 w-full'>
                <div>
                    <p className="text-sm md:text-base md:leading-5 text-light_text">Order No</p>
                    <p className='text-white text-lg md:text-lg md:leading-6'>#123</p>
                </div>
                <div>
                    <p className="text-sm md:text-base md:leading-5 text-light_text">Order Date</p>
                    <p className='text-white text-lg md:text-lg md:leading-6'>22 July, 11:00 PM</p>
                </div>
                </div>
                <p className='text-lg md:text-xl md:leading-6 text-[#F10000]'>Raise a dispute</p>

            </div>
            <div className='mt-20  md:mt-24 flex justify-between w-full5 lg:mt-28'>
                <div className='flex gap-4 md:gap-5 items-center'>
                    <div className='relative w-20 flex items-center justify-center  h-20 rounded-full border border-site_yellow'>
                   <svg className='absolute bottom-0 right-0' xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
  <circle id="Ellipse_389" data-name="Ellipse 389" cx={9} cy={9} r={9} fill="#15d807" />
</svg>
<img src="/assets/images/requirements/seller.svg" className='w-[68px] h-[68px] rounded-full' alt="" />

                    </div>
                    <div className='flex gap-3 items-start'>
                        <div>
                            <p className='text-xl md:text-2xl lg:text-[28px] text-white lg:leading-6 font-semibold'>Seller's  Name</p>
<p className='text-site_yellow md:text-lg text-base md:leading-6'>@username</p>
                        </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.473" height="28.5" viewBox="0 0 24.473 28.5">
  <g id="Group_616" data-name="Group 616" transform="translate(-747 -2064)">
    <path id="Union_75" data-name="Union 75" d="M11.994,28.447C4.483,25.05,0,19.316,0,13.111V4.544A.6.6,0,0,1,.4,3.98L12.047.031a.6.6,0,0,1,.379,0L24.07,3.98a.6.6,0,0,1,.4.564v8.567c0,6.2-4.483,11.939-11.993,15.336a.587.587,0,0,1-.487,0Z" transform="translate(747 2064)" fill="#ffa31a" />
    <text id="_50_" data-name="50%" transform="translate(751 2080)" fill="#fff" fontSize={9} fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight={600}><tspan x={0} y={0}>50%</tspan></text>
  </g>
</svg>


                    </div>

                </div>
                <div >
                <div className="flex mb-[10px] mt-[5px] gap-2">
                <img src="/assets/images/landing/stars.svg" alt="profile" />
                <p className="text-[11px] md:leading-5 text-light_text">
                  (55 Reviews)
                </p>
              </div>
              <div className='flex  items-center sm:w-auto w-full justify-between gap-4'>
                 <div className='flex   gap-[6px] items-center'>

       <svg xmlns="http://www.w3.org/2000/svg" width="16.607" height="16.607" viewBox="0 0 16.607 16.607">
  <path id="Path_5422" data-name="Path 5422" d="M40.3,23.992A8.313,8.313,0,0,0,32,32.3v7a1.3,1.3,0,0,0,1.3,1.3h7a8.3,8.3,0,0,0,0-16.607Zm-3.986,9.632a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z" transform="translate(-32 -23.992)" fill="gray" />
</svg>

<p className='text-xs text-light_text'>60%</p>
                 </div>
                 <div className='flex gap-[6px] items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="13.412" height="17.619" viewBox="0 0 13.412 17.619">
  <path id="Path_5424" data-name="Path 5424" d="M9.684.625A.854.854,0,0,0,8.456,1.688c.995,2.336.733,3.45.489,3.9a1.216,1.216,0,0,1-.853.631c-.46.085-.807-.824-.813-.83a.848.848,0,0,0-.733-.568.858.858,0,0,0-.818.438c-1.506,2.745-1.9,5.32-1.177,7.662a9.255,9.255,0,0,0,4.3,5.1.834.834,0,0,0,.381.091A.844.844,0,0,0,9.8,17.9a.859.859,0,0,0,.239-.932c-.261-.71-.722-2.768.233-3.774a8.831,8.831,0,0,0,1.273-1.66c2.285,3.592,1.063,4.717,1.04,4.746-.006,0-.006.006-.011.006a.855.855,0,0,0,.966,1.41c0-.006.006-.006.011-.011C16.323,15.75,17.687,13.5,17.607,11,17.437,5.428,10,.819,9.684.625Z" transform="translate(-4.198 -0.501)" fill="gray" />
</svg>



<p className='text-xs text-light_text'>6</p>
     </div>
     <div className='flex gap-[6px] items-center'>

<svg xmlns="http://www.w3.org/2000/svg" width="16.607" height="16.607" viewBox="0 0 16.607 16.607">
<path id="Path_5422" data-name="Path 5422" d="M40.3,23.992A8.313,8.313,0,0,0,32,32.3v7a1.3,1.3,0,0,0,1.3,1.3h7a8.3,8.3,0,0,0,0-16.607Zm-3.986,9.632a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Zm3.986,0a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z" transform="translate(-32 -23.992)" fill="gray" />
</svg>
<p className='text-xs text-light_text'>55</p>
     </div>


             </div>
                </div>
            </div>

        </div>
        <div className='mt-10 justify-between gap-5  md:mt-14 lg:mt-16 xl:mt-[70px]  flex items-center '>
        <div className='2xl:max-w-[948px]  gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-6 md:px-7   md:w-2/3 2xl:w-full flex items-center py-5 product-shadow rounded-xl'>

 <input type="text" className='text-base bg-transparent md:text-lg outline-none md:leading-[18px] text-light_text w-full' placeholder='Type to break the ice' />
<div className='pl-4 border-l border-l-[#808080] md:pl-6 lg:pl-8'>

<svg id="Group_529" data-name="Group 529" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
  <path id="Path_5431" data-name="Path 5431" d="M0,0H24V24H0Z" fill="none" />
  <path id="Path_5432" data-name="Path 5432" d="M3.4,20.4l17.45-7.48a1,1,0,0,0,0-1.84L3.4,3.6a.993.993,0,0,0-1.39.91L2,9.12a.994.994,0,0,0,.87.99L17,12,2.87,13.88a1.012,1.012,0,0,0-.87,1l.01,4.61A.993.993,0,0,0,3.4,20.4Z" fill="#ffa31a" />
</svg>
</div>




</div>

<div className='max-w-[190px] w-full shadow-stepShadow rounded-xl'>
        <button className='rounded-xl flex items-center justify-center w-full text-white shadow-Shadow2 py-3 md:py-4'>
        Open in Chat

        </button>
    </div>
        </div>
        <div className='mt-10 justify-between max-w-[503px] gap-5  md:mt-14 lg:mt-16 xl:mt-[70px]  flex items-end '>
            <div>
                <p className='text-base md:text-lg md:leaidng-6 text-light_text'>Original value</p>
                <p className='text-xl md:text-2xl lg:text-[28px] text-white leading-7'>₹ 800</p>
            </div>
            <div>
                <p className='text-base md:text-lg md:leaidng-6 text-light_text'>Seller’s bid</p>
                <p className='text-xl md:text-2xl lg:text-[28px] text-white leading-7'>₹ 600</p>
            </div>
            <p className='text-base md:text-lg md:leaidng-6 text-light_text'>In <span className='text-xl md:text-2xl lg:text-[28px] text-white leading-7'>4</span> milestones</p>
            </div>
            <div className='mt-10 justify-between max-w-[840px] gap-5  md:mt-14 lg:mt-16 xl:mt-[70px]  flex items-end '>
              <div>
                <p className='text-base mb-[5px] md:text-lg md:leaidng-6 text-light_text'>Delivery time</p>
                <p className='max-w-[166px] inline-flex gap-3 text-base mb-[5px] md:text-lg md:leaidng-6 text-white'>
                <span>DD</span>   <span>:</span>    <span>HH</span>   <span>:</span> <span>MM</span>

                </p>

                
              </div>
              <div>
                <p className='text-base mb-[5px] md:text-lg md:leaidng-6 text-light_text'>Extras</p>
                <p className='max-w-[260px] inline-flex gap-3 text-base mb-[5px] md:text-lg md:leaidng-6 text-white'>
                Free invoice,  Urgent delivery 

                </p>

                
              </div>
            
               
            </div>
            <div className='mt-10 md:mt-12 lg:mt-14 rounded-md w-full shadow-stepShadow'>
                <div className='flex px-6 lg:px-8 xl:px-10 flex-col items-center shadow-Shadow2 pt-10 md:pt-12 lg:pt-14  rounded-md'>
                       <div className='flex text-center text-xl md:text-2xl lg:text-[28px] text-white leading-7 justify-between items-center max-w-[815px] w-full'>

                         <div className='flex flex-col items-center'>
                            <p className='text-light_text'>Budget</p>
                            <p>₹ 600</p>
                         </div>
                         <div className='flex flex-col items-center'>
                            <p className='text-light_text'>Paid milestone</p>
                            <p>₹ 150</p>
                         </div>
                         <div className='flex flex-col items-center'>
                            <p className='text-light_text'>Remaining milestone</p>
                            <p>₹ 450</p>
                         </div>
                       </div>
                       <div className='w-full mt-10 md:mt-14 lg:mt-16 xl:mt-[70px]  flex justify-between items-center'>
                        <p className='text-white text-lg md:text-xl md:leading-6 '>Milestone(s) : 4</p>
                        <div className='shadow-stepShadow max-w-[451px] w-full'>
                            <button className='shadow-Shadow2 w-full flex items-center justify-center px-4 py-[9px] md:py-3 lg:py-4 xl:py-5 text-white text-base md:text-lg md:leading-6'>+Add or Edit milestone

                            </button>
                        </div>
                       </div>
                       <div className='w-full mt-10 text-lg md:text-xl md:leading-5 md:mt-14 lg:mt-16 xl:mt-[70px]  flex gap-5 md:gap-6 items-start'>
                         
                        <p className='text-site_yellow  '>1.</p>
                        <div className='flex flex-col  gap-8 w-full'>

                        <p  className='max-w-[736px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium dolor etiam elementum. <span className='text-site_yellow'>More</span></p>
                        <div className='flex justify-between items-center w-full'>
                            <p className='text-white text-2xl md:text-3xl lg:text-[40px] font-semibold md:font-bold'>₹ 150</p>
                            <p className='text-[#15D807] text-lg md:text-xl lg:text-2xl lg:leading-[35px] font-medium'>Completed</p>
                            <button className='bg-[#FFA31A] md:py-4 2xl:py-5 py-3 text-base md:text-lg md:leading-7 text-white rounded-md px-5 md:px-7 xl:px-8 flex items-center gap-1 '>
                            Verify & Pay
          </button>
                        </div>
                        <div className='shadow-stepShadow h-5 w-full rounded-xl max-w-[992px]'>
                        <div className='h-5 rounded-xl shadow-Shadow2 w-full '>
                            <img src="/assets/images/requirements/progressBar.svg" className='h-5' alt="Progress" />

</div>
                        </div>
                    

                        </div>
                        </div>


                        <div className='w-full mt-10 text-lg md:text-xl md:leading-5 md:mt-14 lg:mt-16 xl:mt-[70px]  flex gap-5 md:gap-6 items-start'>
                         
                         <p className='text-site_yellow  '>1.</p>
                         <div className='flex flex-col  gap-8 w-full'>
 
                         <p  className='max-w-[736px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium dolor etiam elementum. <span className='text-site_yellow'>More</span></p>
                         <div className='flex justify-between items-center w-full'>
                             <p className='text-white text-2xl md:text-3xl lg:text-[40px] font-semibold md:font-bold'>₹ 150</p>
                             <p className='text-[#2DB4F8] text-lg md:text-xl lg:text-2xl lg:leading-[35px] font-medium'>InProcess</p>
                             <button className='bg-[#FFA31A] md:py-4 2xl:py-5 py-3 text-base md:text-lg md:leading-7 text-white rounded-md px-5 md:px-7 xl:px-8 flex items-center gap-1 '>
                             Action
           </button>
                         </div>
                         <div className='shadow-stepShadow h-5 w-full rounded-xl max-w-[992px]'>
                         <div className='h-5 rounded-xl shadow-Shadow2 w-full '>
                             <img src="/assets/images/requirements/progressBar2.svg" className='h-5' alt="Progress" />
 
 </div>
                         </div>
                     
 
                         </div>
                         </div>

                </div>

              </div>

    </div>

</>
:<>
</>
}
<ServiceFoot/>
    </div></div>
  )
}

export default Index