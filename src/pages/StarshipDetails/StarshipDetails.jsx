// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// services
import { getStarshipDetails } from "../../services/api-calls"

// components
import StarshipPilots from "../../components/StarshipPilots/StarshipPilots"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return (  
    <div className="starship-details-container">
      <div className="starship-details-card" >
          <div className="line-detail">
            <label>NAME: </label>
            <p>{starshipDetails.name}</p>
          </div>
          <div className="line-detail">
            <label>MODEL: </label>
            <p>{starshipDetails.model}</p>
          </div>
          <div className="line-detail">
            <label>PILOTS: </label>
            {starshipDetails.pilots.length ? 
              <StarshipPilots pilotUrls={starshipDetails.pilots}/>
              :
              <p>No Pilots</p>
            }
          </div>
          <div className="line-detail back-button">
            <Link to="/">RETURN</Link>
          </div>
      </div>
    </div>
  )
}

export default StarshipDetails