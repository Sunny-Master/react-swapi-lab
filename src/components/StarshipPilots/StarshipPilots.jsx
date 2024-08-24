// npm modules
import { useState, useEffect } from "react"

// services
import { getPilots } from "../../services/api-calls"

const StarshipPilots = ({pilotUrls}) => {
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchPilots = async () => {
      const pilotsData = await getPilots(pilotUrls)
      setPilots(pilotsData)
    }
    fetchPilots()
  }, [pilotUrls])

  if (!pilots.length) return <p>Loading Pilot Details...</p>

  return (  
    <ul>
      {pilots.map( pilot => 
        <li key={pilot.url.slice(29)}>{pilot.name}</li>
      )}
    </ul>
  )
}

export default StarshipPilots