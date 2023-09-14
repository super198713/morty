import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFech from './hooks/useFech'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {
  const [inputValue, setInputValue] = useState( getRandomNumber(126))
  

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [location, getLocation, hasError ] = useFech(url)

  useEffect(() => { 
    getLocation()
  }, [inputValue])

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }

  return (
    <div>
      <div className="banner">
        <img src="/banner.png" alt="" />
      </div>
      <div className="form">
        <form  onSubmit={handleSubmit}>
          <input ref={inputSearch} type="text" />
          <button>Search</button>
        </form>
      </div>
      {
        hasError
          ? <h2>Hey! you must provide and id from 1 to 126</h2>
          : (
            <>
              <LocationInfo
                  location={location}
                /> 
                
                  <div>
                    {
                      location?.residents.map(url => (
                        <ResidentCard
                          key={url}
                          url={url}
                        />  
                        
                        ))
    
                    }
                  </div>
            </> 
          )
      
        }  
    </div>
  )
}

export default App
