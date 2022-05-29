import React from 'react'

const SwiperCard = () => {
  return (
      <div className='pt-[66px]'>

    <div className="rounded-[30px] shadow-stepShadow w-full max-w-[340px]">

    <div className="card rounded-[30px] pb-[35px] max-w-[340px] w-full shadow-Shadow2 flex flex-col items-center">
      <div className="w-[122px] mt-[-66px] h-[122px] flex justify-center items-center rounded-full bg-site_yellow">
        <img src="/assets/images/landing/femalesilder.svg" className="w-[114px] h-[114px] rounded-full" alt="female" />
       

      </div>
      <div className="max-w-[246px] mt-6 mb-8">
        <p className="text-lg font-bold text-white leading-7">Sarah Sonia</p>
        <p className="text-[13px] leaidng-[17px] text-[#745FEA] Segoe UI ">CEO . Pippa Industries</p>
        </div>
        <div className="w-full max-w-[246px] ">
          <img src="/assets/images/landing/commastart.svg" alt="" />
          <p className="text-base text-light_text leading-[25px] text-center">Lorem ipsum sit , cons
ecte tur adipiscing elisit amet
anteac nu nc mattis ulquis sed
turpis. Phasellus vitatus erat
Namvitae porta . Donec
at tellus est</p>
<div className="w-full flex justify-end">

<img src="/assets/images/landing/commaend.svg" alt="" />
</div>
       

        </div>

    </div>
    </div>
    </div>

  )
}

export default SwiperCard