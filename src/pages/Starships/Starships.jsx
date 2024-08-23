// npm modules
import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

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

  return (  
    <div className="starship-container"> 
      {starships.map(starship => 
        <div className="starship-card" key={starship.url.slice(32)}>
          <h2>{starship.name}</h2>
        </div>
      )}
    </div>
  )
}

export default StarShips