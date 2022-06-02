import React,{useRef} from 'react'

const DragAndDrop = () => {
    const drop = useRef(null) 
    const inputRef = useRef(null) 
    const [Dropfile,setFileData] = React.useState()
  React.useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);

    return () => {
      // drop && drop.current.removeEventListener('dragover', handleDragOver);
      // drop && drop.current.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    console.log('file',files)
    if (files && files.length) {
      const file = files[0]
    console.log('file',files)

      const tempFileData = {
        name: files[0].name, size: files[0].size, type: files[0].type
      }
      setFileData(tempFileData)
    }
  };
  return (
    <div ref={drop} className=" shadow-stepShadow rounded-[10px] w-full  ">
    <div onClick={()=>{inputRef.current.click()}} className="shadow-Shadow2 flex items-center justify-center rounded-[10px] w-full py-[25px]">
        <div className='flex flex-col items-center justify-center'>
       <svg xmlns="http://www.w3.org/2000/svg" width="90.333" height="63.233" viewBox="0 0 90.333 63.233">
  <path id="Path_5404" data-name="Path 5404" d="M74.266,32.1a18.067,18.067,0,0,1,0,36.133H51.683V47.539L56.748,52.6a4.517,4.517,0,0,0,6.388-6.387L50.593,33.674a4.517,4.517,0,0,0-6.854,0L31.2,46.216A4.517,4.517,0,1,0,37.585,52.6l5.065-5.065V68.233H24.583A22.585,22.585,0,0,1,21.538,23.27,27.1,27.1,0,0,1,74.266,32.1Z" transform="translate(-2 -5)" fill="gray" opacity="0.26" />
</svg> 
<p className='text-[15px] leading-[18px] text-light_text mt-2 mb-3 '>Drag & drop your file here</p>
<p className='text-white text-xs leading-[18px]'>Or</p>

<p   className='cursor-pointer text-[15px] leading-[18px] text-site_yellow mt-3  '>Browse File</p>
 <input ref={inputRef} type="file" className='opacity-0 pointer-events-none ' />

        </div>
    </div>
    </div>
  )
}

export default DragAndDrop