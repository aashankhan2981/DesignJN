import React, { useState ,useRef,useEffect} from "react";


const DropDown = ({categories}) => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState( { });
    useEffect(()=>{
      setActive(categories[0])
    },[categories])
    const handleDropDown = (v)=>{
        setToggle(false)
        let selected =  categories.find((item)=>item.value==v)
        setActive(selected)
  
    }
  return (
    <div className={`relative overflow- z-0 mt-[15px] shadow-stepShadow ${toggle?'':'rounded-b-xl'} rounded-t-xl max-w-[535px]`}>
    <div
      onClick={(e) => {
          e.stopPropagation()
         
        setToggle(!toggle);
      }}
      className={` shadow-Shadow2 cursor-pointer flex justify-between items-center  ${toggle?'':'rounded-b-xl'} rounded-t-xl w-full py-5 px-7`}
    >
    <p className="text-[15px] leading-[18px] text-light_text">{active.content}</p>

      <button type="button" className="">
        <svg
          className={`${
            !toggle ? "rotate-180" : "rotate-0"
          } transition-all duration-300 ease-in-out `}
          width={12}
          height={8}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5036 6.50031L5.8353 1.83704L1.16704 6.50031"
            stroke="#FFA31A"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  
    <div
        className={` w-full z-30   absolute flex flex-col gap-4 ${toggle?'h-auto  py-3 ':'py-0 h-0 '} overflow-hidden  transition-all duration-500 ease-in-out left-0 px-7 rounded-b-xl bg-[#272727]  `}
      > 
        {categories.map((item) => {
          return (
            <div onClick={()=>{handleDropDown(item.value)}} className={`cursor-pointer  w-full  text-light_text h-full text-[15px] leading-[18px] `}

              key={item.value}
            >
              {item?.content}
            </div>
          );
        })}
      </div>
  </div>
  )
}

export default DropDown