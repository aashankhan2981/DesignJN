import DragAndDrop from "../components/DragAndDrop";
import DropDown from "../components/DropDown";

const Index = () => {
    const categories = [
        { value: "0", content: "Select Category" },
        { value: "1", content: "Category1" },
        { value: "2", content: "Category2" },
        { value: "3", content: "Category3" },
        
      ];
  return (
    <div className="max-w-[1291px]  mt-[70px] md:mt-[86px] lg:px-10 md:px-6 px-4 w-full ">
      <p className="font-bold xl:text-[55px]  text-center md:text-3xl text-xl  sm:text-2xl  lg:text-4xl xl:leading-[65px]  text-white">
        Post Requirement
      </p>
      <div className="flex items-center mt-[70px] gap-4 md:gap-6">
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
        <div className="w-full flex justify-center items-center gap-10">
          <div className="w-full">
            <p className="text-base text-white md:leading-5 md:text-xl w-full">
              Category
            </p>
          
             <DropDown categories={categories} />

          </div>
          <div className="w-full">
            <p className="text-base text-white md:leading-5 md:text-xl w-full">
            Subcategory
            </p>
          
             <DropDown categories={categories} />

          </div>
        </div>
        <div className="w-full mt-[30px] mb-[74px]  flex justify-center items-end gap-10">
          <div className="w-full">
            <p className="text-base text-white md:leading-5 md:text-xl w-full">
            Parameter
            </p>
          
             <DropDown categories={categories} />

          </div>
          <div className="w-full">
          <input type="text" placeholder="Full Name" className=" px-[30px] text-[15px] leading-[18px] text-light_text bg-site_black py-[22px] outline-none shadow-input rounded-[10px] w-full max-w-[540px]" />
           
          

          </div>
        </div>
        <DragAndDrop/>
        <p className="mt-[30px] text-base text-white md:leading-5 md:text-xl w-full">
        Description
            </p>
        <div className="relative w-full mt-[15px] rounded-xl  shadow-stepShadow" >

        <textarea placeholder="Enter Details Here, Which is Required to avail This Service " className="relative w-full px-[30px] py-[20px] placeholder:text-light_text  shadow-Shadow2 z-20 outline-none   rounded-xl resize-none bg-transparent  text-[15px] leading-[18px] text-light_text" name="" id=""  rows="6">
        </textarea>
        
        </div>

        <div className="flex items-center  justify-start gap-[30px]">
       <div className="w-full max-w-[540px]">

        <p className="mt-[30px] mb-[15px] text-base text-white md:leading-5 md:text-xl w-full">
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
       <div className="flex self-end">
       <p className="text-xl leading-[25px] pb-[15px] text-white">X</p>

       </div>
        </div>

      </form>
    </div>
  );
};

export default Index;
