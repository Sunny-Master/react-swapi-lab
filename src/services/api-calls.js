const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarshipDetails(starShipId) {
  const res = await fetch(`${baseUrl}/starships/${starShipId}`)
  return res.json()
}

export async function getPilots(pilotUrls) {
  const promises = pilotUrls.map(async (pilotUrl) => {
    const res = await fetch(pilotUrl)
    return res.json()
  }) 
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}
