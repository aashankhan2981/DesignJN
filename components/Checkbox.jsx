import React from 'react'

const Checkbox = ({item,handleToggle,single,state}) => {
  return (
    <div className='w-[30px] h-[30px] rounded-md shadow-stepShadow'>
    <button type='button' onClick={()=>{single?handleToggle(!state) :handleToggle(item?.key,item)}} className='w-[30px] h-[30px] flex items-center justify-center rounded-md shadow-Shadow2'>
    <svg className={`${single?state?'block':'hidden' :item?.toggle?'block':'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="19.219" height="12.611" viewBox="0 0 19.219 12.611">
<path id="Path_5358" data-name="Path 5358" d="M2026.454,558.5l4,5,11-9" transform="translate(-2024.346 -552.389)" fill="none" stroke="#ffa31a" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
</svg>



    </button>

</div>
  )
}

export default Checkbox