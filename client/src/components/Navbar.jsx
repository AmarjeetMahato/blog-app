import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Avatar from 'react-avatar';

const Navbar = () => {
  const [open, setOpen] = useState(false)    
  console.log(open);
  const session = JSON.parse(localStorage.getItem("CurrentUser"));

  console.log(session);

  const logoutUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/auth/logout`);
      localStorage.removeItem("CurrentUser", null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAdmin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/api/auth/adminlogout`);
      localStorage.removeItem("CurrentUser", null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex relative items-center justify-between flex-wrap  py-8 px-4 w-full ">
      <Link to={"/"}>
        <h1>Logo</h1>
      </Link>

      <div className="lg:flex hidden uppercase items-center text-[18px] justify-between gap-10">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {session?.admin && session?.admin?.role === "admin" && (
          <NavLink to="/createpost">Create Post</NavLink>
        )}


      {session ? (
            session?.admin && session.admin?.role === "admin" ? (
          <>
            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="25" round={true} textSizeRatio={0.5} name={session.admin.name} className="text-white uppercase "/>
            <button onClick={logoutAdmin} className="uppercase">
              Logout
            </button>
          </>
        ) : (
          session?.user &&
          session.user?.role === "user" && (
            <>
              <span className="text-white uppercase">{session.user.name}</span>
              <button onClick={logoutUser}>LOGOUT</button>
            </>
          )
        )
      ):(
            <Link to ="/signin">Sign in</Link>
      )}
      </div>

      <div onClick={()=>setOpen(!open)} className=" lg:hidden flex gap-4">
       

        {session ? (
            session?.admin && session.admin?.role === "admin" ? (
          <>
          <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} size="25" round="50px" textSizeRatio={1} name={session.admin.name} className="text-white uppercase "/>
          </>
        ) : (
          session?.user &&
          session.user?.role === "user" && (
            <>
              <span className="text-white uppercase flex items-center justify-center">{session.user.name}</span>
              
            </>
          )
        )
      ):(
            <NavLink className="text-white uppercase flex items-center justify-center" to ="/signin">Sign in</NavLink>
      )}

      <button >
          <CgMenuRight size={25} />
        </button>

      </div>

      {open &&
            <div className="lg:hidden justify-end py-10 space-y-10 top-0  absolute w-full max-h-screen bg-[#0f172a] text-white flex flex-col">
             <p className="text-white absolute top-5 right-12" onClick={()=>setOpen(!open)}><IoIosCloseCircle size={30} /></p>
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center justify-center">HOME </Link>
        <Link to="/about" onClick={() => setOpen(false)} className="flex items-center justify-center">ABOUT</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center">CONTACT</Link>
        {session?.admin && session?.admin?.role === "admin" && (
          <Link onClick={()=>setOpen(!open)} to="/createpost" className="text-white uppercase flex items-center justify-center">Create Post</Link>
        )}

        {session ? (
            session?.admin && session.admin?.role === "admin" ? (
          <>
           
            <button onClick={logoutAdmin} className="uppercase">
              Logout
            </button>
          </>
        ) : (
          session?.user &&
          session.user?.role === "user" && (
            <>
            
              <button onClick={logoutUser}>LOGOUT</button>
            </>
          )
        )
      ):(
            <NavLink className="text-white uppercase flex items-center justify-center" to ="/signin">Sign in</NavLink>
      )}


            </div>}
    </nav>
  );
};

export default Navbar;