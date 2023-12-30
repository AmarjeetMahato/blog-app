import { Link } from "react-router-dom"
import { IoFastFoodSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { MdDirectionsTransit } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
const Category = () => {
  return (
    <div className="space-y-8">
     <div className="flex text-center items-center justify-center">

         <h1 className="text-[30px] font-semibold ">Category</h1>
     </div>

    <div className="flex text-[12px] md:text-[16px] items-center justify-center gap-3">
      <Link to="/music" className="md:px-4 md:py-2 px-2 py-2 bg-green-500 text-white rounded-[5px] flex items-center gap-1"><FaMusic />
Music</Link>
      <Link to="/food" className="md:px-4 md:py-2 px-2 py-2 bg-rose-500 text-white rounded-[5px] flex items-center gap-1"><IoFastFoodSharp />Food</Link>
      <Link to="/travel" className="md:px-4 md:py-2 px-2 py-2 bg-yellow-500 text-white rounded-[5px] flex items-center gap-1"><MdDirectionsTransit />Travel</Link>
      <Link to="/education" className="md:px-4 md:py-2 px-2 py-2 bg-blue-500 text-white rounded-[5px] flex items-center gap-1"><FaBook />Education</Link>
          
    </div>
</div>
  )
}

export default Category