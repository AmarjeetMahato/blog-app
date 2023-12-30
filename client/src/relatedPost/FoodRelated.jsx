import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const FoodRelated = ({currentPostId}) => {
    const [filter, setFilter] = useState();

    
 useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/auth/post`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      const filter = data.filter((item) => item.category === "food");
      setFilter(filter);
      console.log(filter);
    };
    fetchData();
  }, [currentPostId]);
  

  return (
    <div>
            {filter && filter.length > 0 &&  filter.map(item => (
                    <>
                    <div className="mt-2 py-2" key={item.id}>{
                        item.id !== currentPostId && (
                            <>
                            <img src={item.image} alt=""  className="object-cover h-[120px] w-full"/>
                            <p className="text-[14px] font-semibold">{item.title.substring(0,40)}..</p>
                            <Link to={`/food/${item.id}`} className=" py-1 border-b text-[13px] border-red-500 w-max">Read More...</Link>
                            </>
                        )
                           }
                     </div>

                    </>
                   )) 
}
    </div>
  )
}

FoodRelated.propTypes = {
    currentPostId: PropTypes.string.isRequired,
  };
  

export default FoodRelated