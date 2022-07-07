import { useState, useEffect } from 'react';
import { getDetails } from '../../services/sw-api'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const StarshipPage = () => {
  const [starship, setStarshipPage] = useState([])
  const location = useLocation()

	useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipPage(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      {starship.name ?
      <> 
        <h3>NAME: {starship.name}</h3>
        <h3>MODEL: {starship.model}</h3>
        <Link to="/">RETURN</Link>
      </>
      :
      <>
        <h3>Loading Starship</h3>
      </>
    }
    </>
  );
}

export default StarshipPage;