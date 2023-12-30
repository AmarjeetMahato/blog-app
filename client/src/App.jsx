import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Music from "./features/Music";
import Food from "./features/Food";
import About from "./features/About";
import Contact from "./features/Contact";
import AdminSignin from "./components/AdminSignin";
import CreatePost from "./components/CreatePost";
import SingleFoodPage from "./SinglePostPage/SingleFoodPage";
import SingleMusicPost from "./SinglePostPage/SingleMusicPost";
import Travel from "./pages/Travel";
import SingleTravelPage from "./SinglePostPage/SingleTravelPage";
import Education from "./pages/Education";
import SingleEducationPage from "./SinglePostPage/SingleEducationPage";
import MusicUpdate from "./Update/MusicUpdate";
import FoodUpdate from "./Update/FoodUpdate";
import TravelUpdate from "./Update/TravelUpdate";
import EducationUpdate from "./Update/EducationUpdate";
import SinglePost from "./SinglePostPage/SinglePost";

const Layout = () => {
  return(
    <div className="max-w-screen-xl scroll-y-auto  px-4 h-screen scroll  w-full mx-auto  ">
      <div className="text-white ">
      <Navbar/>
         <Outlet/>
      <Footer/>
      </div>
   
    </div>
  )
}


function App() {
   
  const router = createBrowserRouter([
       {
          element:<Layout/>,
          children:[
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/post/:id',
              element:<SinglePost/>
            },
            {
              path:'/music',
              element:<Music/>
            },
            {
              path:'/music/:id',
              element:<SingleMusicPost/>
            },
            {
              path:'/music/update/:id',
              element:<MusicUpdate/>
            },

            {
              path:"/food",
              element:<Food/>
            },
            {
              path:"/food/:id",
              element:<SingleFoodPage/>
            },
            {
              path:"/food/update/:id",
              element:<FoodUpdate/>
            },
            {
              path:"/travel",
              element:<Travel/>
            },
            {
              path:"/travel/:id",
              element:<SingleTravelPage/>
            },
            {
              path:"/travel/update/:id",
              element:<TravelUpdate/>
            },
            {
              path:"/education",
              element:<Education/>
            },
            {
              path:"/education/:id",
              element:<SingleEducationPage/>
            },
            {
              path:"/education/update/:id",
              element:<EducationUpdate/>
            },

            {
              path:"/about",
              element:<About/>
            },
            {
              path:"/contact",
              element:<Contact/>
            },
            {
              path:'/createpost',
              element:<CreatePost/>
             },
            
           
          ]
       },
       {
        path:'/signin',
        element:<Signin/>
       },
       {
        path:'/adminsignin',
        element:<AdminSignin/>
       },
       {
        path:'/signup',
        element:<Signup/>
       },
      
  ])



  return (
    <RouterProvider router={router} />
  )
}

export default App
