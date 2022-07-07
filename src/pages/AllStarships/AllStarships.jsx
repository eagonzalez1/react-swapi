import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const AllStarships = () => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])
  
  return (
    <>
      {allStarships.length ? 
      <>
        {allStarships.map(starship => 
          <div 
            key={starship.name}
            className="starship-card">
            <Link
              to="/starships"
              state={{ starship }}
            >
              {starship.name}
            </Link><br/>
          </div>
        )}
      </>
      :
      <>
        <h2>Loading starships...</h2>
      </>
      }
    </>
  );
}

export default AllStarships;