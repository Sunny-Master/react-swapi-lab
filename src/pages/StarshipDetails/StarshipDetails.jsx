// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarshipDetails } from "../../services/api-calls"

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
      </div>
    </div>
  )
}

export default StarshipDetails