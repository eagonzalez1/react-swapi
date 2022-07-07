import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const AllStarships = () => {
  const [AllStarships, setAllStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const monsterData = await getAllStarships()
      setAllStarships(monsterData.results)
    }
    fetchAllStarships()
  }, [])
  
  return (
    <>
      <h3>Monster List (OMG SCARY)</h3>
      {AllStarships.length ? 
      <>
        {AllStarships.map(monster => 
          <div key={monster.index}>
            <Link
              to="/monster"
              state={{ monster }}
            >
              {monster.name}
            </Link><br/>
          </div>
        )}
      </>
      :
      <>
        <h2>Loading scary monsters...</h2>
      </>
      }
    </>
  );
}

export default AllStarships;