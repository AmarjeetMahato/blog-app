import { FaInstagram,  FaFacebook,FaYoutube, FaTwitter    } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-10 py-5">
           <div className="lg:flex lg:justify-between">
                     {/* Logo */}
                     <div className="py-4">
                           <h1>Logo</h1>
                           
                           {/*Social Link */}
                           <div className="flex items-center gap-4">
                            <Link to="/" className="hover:text-red-500"><FaInstagram  size={25}/></Link>
                           <Link to={"/"} className="hover:text-blue-500"><FaFacebook size={25}/></Link>
                           <Link to={"/"} className="hover:text-red-500"><FaYoutube size={25}/></Link>
                           <Link to={"/"} className="hover:text-blue-500"><FaTwitter  size={25}/></Link>
                           <Link to={"/"} className="hover:text-gray-800"><BsFillThreadsFill  size={25}/></Link>
                         
                           </div>

                     </div>
                    
                    {/* Links */}
                     <div className="md:flex flex-row space-y-2 md:space-y-0 md:space-x-10">
                                   {/* Category */}
                                   <div className="flex space-y-2 flex-col">
                                   <p className="text-[22px] font-semibold">Category</p>
                                   <Link to={"/food"} className="hover:text-red-500">Food</Link>
                                   <Link to={"/travel"} className="hover:text-red-500">Travel</Link>
                                   <Link to={"/education"} className="hover:text-red-500">Education</Link>
                                   <Link to={"/music"} className="hover:text-red-500">Music</Link>
                                   </div>

                                   <div className="flex flex-col space-y-2">
                                        <p className="text-[22px] font-semibold">Get Help</p>
                                        <Link to="/about" className="hover:text-red-500">About Me</Link>
                                        <Link to="/contact" className="hover:text-red-500" >Contact</Link>
                                   </div>
                                  
                     </div>

                     {/* Copy Rights Section */}

           </div>

           
                         <div className="flex py-4 mt-2 items-center justify-center">
                               <div>
                                     <h1 className="flex items-center gap-1"><IoLocation /> India © 2023 Nike, Inc. All Rights Reserved</h1>   
                               </div>

                     </div>
    </div>
  )
}

export default Footer