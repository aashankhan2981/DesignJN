import React from 'react'

const Calender = () => {
  return (
    <div className="relative w-[23px] h-[23px]">

    <input  type="datetime-local" tabIndex={0} className="opacity-0 w-[23px] h-[23px] absolute z-20 top-0 left-0   text-[#FFA31A] " />
    <svg  className="absolute z-10 w-[23px] h-[23px] top-0 left-0" id="Group_462" data-name="Group 462" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
      <path id="Path_5409" data-name="Path 5409" d="M24.083,16.208H17.625v6.458h6.458ZM22.792,2V4.583H12.458V2H9.875V4.583H8.583a2.572,2.572,0,0,0-2.57,2.583L6,25.25a2.583,2.583,0,0,0,2.583,2.583H26.667A2.583,2.583,0,0,0,29.25,25.25V7.167a2.583,2.583,0,0,0-2.583-2.583H25.375V2Zm3.875,23.25H8.583V11.042H26.667Z" transform="translate(-2.125 -0.708)" fill="#fff"/>
      <path id="Path_5410" data-name="Path 5410" d="M0,0H31V31H0Z" fill="none"/>
    </svg>
    </div>

  )
}

export default Calender