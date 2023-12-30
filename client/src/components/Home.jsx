import Category from "../features/Category"
import EducationPost from "../features/EducationPost"
import FoodPost from "../features/FoodPost"
import HomeFeed from "../features/HomeFeed"
import MusicPost from "../features/MusicPost"
import TravelPost from "../features/TravelPost"
// import Posts from "../features/Posts"

const Home = () => {
  return (
    <section className="px-10 space-y-10 mt-10">
        <Category/>
        <HomeFeed/>
        <MusicPost/>
        <EducationPost/>
        <FoodPost/>
        <TravelPost/>

    </section>
  )
}

export default Home