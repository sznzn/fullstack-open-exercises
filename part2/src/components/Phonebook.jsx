import { useState, useEffect } from 'react'

function Phonebook() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    useEffect(() => {
        console.log('persons after useEffect', persons)
    }, [persons])

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already in the phonebook`)
            return
        }
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
    const newPersons = persons.concat(personObject)
    console.log('persons', persons)
    console.log('newPersons', newPersons)

    setNewName('')
    setPersons(newPersons)
    
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container">
            <h2>Phonebook</h2>
            <div className = "bg-light p-3 rounded">
                <label htmlFor="search">Search</label>
                <input className="form-control" value={search} onChange={handleSearchChange} placeholder='search by name'/>
            </div>
            <form className="form-group bg-secondary p-3 rounded text-white" onSubmit={addPerson}>
                <div>
                    name: <input className="form-control" value={newName} onChange={handleNameChange} />
                    number: <input className="form-control" value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button className="btn btn-primary mt-3" type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div className="border border-dark rounded p-3">{persons.map(person => <div key={person.id}>{person.name} : {person.number}</div>)}</div>
            <div className="mt-3 text-danger">debug here : {newName}</div>

            <hr />
            <h2>Search</h2>
            <div className="border border-dark rounded p-3">{filteredPersons.map(person => <div key={person.id}>{person.name} : {person.number}</div>)}</div>
        </div>
    )
}

export default Phonebook;