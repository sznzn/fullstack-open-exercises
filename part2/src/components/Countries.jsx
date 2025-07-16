import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

function Countries() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState('') // 添加当前城市状态

    const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q='

    // 使用useMemo来缓存过滤结果，避免重复计算
    const filteredCountries = useMemo(() => {
        return search === "" ? [] : countries.filter(country => 
            country.name.common.toLowerCase().includes(search.toLowerCase())
        )
    }, [search, countries])

    // 修改useEffect，只在城市改变时获取天气
    useEffect(() => {
        if(filteredCountries.length === 1) {
            const cityName = filteredCountries[0].capital[0]
            if(cityName && cityName !== currentCity) {
                setCurrentCity(cityName)
                // 直接在这里调用API，不使用外部函数
                setLoading(true)
                axios.get(`${api_url}${cityName}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeather(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.error('Error fetching weather:', error)
                    setWeather(null)
                    setLoading(false)
                })
            }
        } else {
            setWeather(null)
            setLoading(false)
            setCurrentCity('')
        }
    }, [filteredCountries, currentCity, api_url, api_key])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,area,languages,currencies')
        .then(response => {
            console.log('response', response.data)
            setCountries(response.data)
        })
        .catch(error => {
            console.error('Error fetching countries:', error)
        })
    }, [])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    

    const handleShowCountry = (country) => {
        setSearch(country)
    }
    

    return (
        <div>
            <h2>Countries</h2>
            <div className="d-flex justify-content-center border border-dark rounded-3 p-3">
                <input type="text" placeholder="Search for a country" className="form-control mb-3 w-25" value={search} onChange={handleSearchChange} />
                <button className="btn btn-primary ms-3" style={{height: '38px', paddingTop: '6px', paddingBottom: '6px'}}>Search</button>
            </div>
            {filteredCountries.length > 10 ? (
                <div className="alert alert-warning text-center mt-3">
                    Too many matches, specify another filter
                </div>
            ) : filteredCountries.length === 1 ? (
                <div className="d-flex justify-content-center mt-3">
                    <div className="card" style={{minWidth: '700px'}}>
                        <div className="card-body">
                            <h3>{filteredCountries[0].name.common}</h3>
                            <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].flags.alt} width="100" className="m-auto mb-3 border border-dark rounded-3" />
                            <p><strong>Capital:</strong> {filteredCountries[0].capital ? filteredCountries[0].capital[0] : 'N/A'}</p>
                            <p><strong>Population:</strong> {filteredCountries[0].population.toLocaleString()}</p>
                            <p><strong>Area:</strong> {filteredCountries[0].area ? `${filteredCountries[0].area.toLocaleString()} km²` : 'N/A'}</p>
                            <p><strong>Languages:</strong> {filteredCountries[0].languages ? Object.values(filteredCountries[0].languages).join(', ') : 'N/A'}</p>
                            <p><strong>Currencies:</strong> {filteredCountries[0].currencies ? Object.values(filteredCountries[0].currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>
                            <h4 className="mt-5">Weather in {filteredCountries[0].capital ? filteredCountries[0].capital[0] : 'N/A'}:</h4>
                            {loading ? (
                                <div className="text-center mt-3">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : weather ? (
                                <div className="mt-3 bg-light rounded p-3">
                                    <div className="d-flex align-items-center justify-content-center mb-3">
                                        <img 
                                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                                            alt={weather.weather[0].description}
                                            width="80"
                                            className="me-3 mt-3"
                                        />
                                        <div>
                                            <h3 className="mb-1">{Math.round(weather.main.temp)}°C</h3>
                                            <p className="mb-0 text-capitalize">{weather.weather[0].description}</p>
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Humidity</strong></p>
                                            <p className="mb-0">{weather.main.humidity}%</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Wind</strong></p>
                                            <p className="mb-0">{weather.wind.speed} m/s</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Pressure</strong></p>
                                            <p className="mb-0">{weather.main.pressure} hPa</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center mt-3">
                                    <p>No weather data available</p>
                                </div>
                            )}  
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <div className="d-flex flex-wrap align-items-center">
                        {filteredCountries.map(country => (
                            <div key={country.name.common} className="border border-dark rounded-3 p-3 me-3 mb-3">
                                <p><strong>{country.name.common}</strong></p>
                                <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
                                <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                                <button className="btn btn-primary" onClick={() => handleShowCountry(country.name.common)}>Show</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Countries 