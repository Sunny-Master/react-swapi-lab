// npm modules
import { Route, Routes } from 'react-router-dom'

// pages
import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

// components
import NavBar from './components/NavBar/NavBar'

// css
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />}/>
        <Route path='/starships/:starshipId' element={<StarshipDetails />}/>
      </Routes>
    </>
  )
}

export default App
