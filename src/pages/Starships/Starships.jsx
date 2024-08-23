// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/api-calls"

const StarShips = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const { results } = await getAllStarships()
      setStarships(results)
    }
    fetchStarships()
  }, [])

  if (!starships.length) return <h1>Loading Starships...</h1>

  return (  
    <div className="starship-container"> 
      {starships.map(starship => 
        <Link to={`/starships/${starship.url.slice(32)}`} key={starship.url.slice(32)}>
          <div className="starship-card" >
            <h2>{starship.name}</h2>
          </div>
        </Link>
      )}
    </div>
  )
}

export default StarShips