import './App.css'

function App() {
  const getWeather = (event: React.FormEvent) => {
    event.preventDefault()
    const city = (event.target as HTMLFormElement).elements.namedItem('city') as HTMLInputElement
    console.log(`Fetching weather for ${city.value}`)
    fetchApi(city.value)
  }

  const fetchApi = async (city: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={getWeather}>
          <input type="text" name="city" placeholder="Enter city name" />
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </>
  )
}

export default App
