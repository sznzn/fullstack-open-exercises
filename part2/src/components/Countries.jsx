import { useState, useEffect } from 'react'
import axios from 'axios'

function Countries() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    

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

    const filteredCountries = search === "" ? [] : countries.filter(country => 
        country.name.common.toLowerCase().includes(search.toLowerCase())
    )
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
                    <div className="card" style={{maxWidth: '500px'}}>
                        <div className="card-body">
                            <h3 className="mb-3">{filteredCountries[0].name.common}</h3>
                            <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].flags.alt} width="100" className="m-auto" />
                            <p><strong>Capital:</strong> {filteredCountries[0].capital ? filteredCountries[0].capital[0] : 'N/A'}</p>
                            <p><strong>Population:</strong> {filteredCountries[0].population.toLocaleString()}</p>
                            <p><strong>Area:</strong> {filteredCountries[0].area ? `${filteredCountries[0].area.toLocaleString()} km²` : 'N/A'}</p>
                            <p><strong>Languages:</strong> {filteredCountries[0].languages ? Object.values(filteredCountries[0].languages).join(', ') : 'N/A'}</p>
                            <p><strong>Currencies:</strong> {filteredCountries[0].currencies ? Object.values(filteredCountries[0].currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>
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
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Countries 