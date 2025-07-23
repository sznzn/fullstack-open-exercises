import { useState, useEffect } from 'react'
import axios from 'axios'
import Notification from './Notification'

function Phonebook() {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [notification, setNotification] = useState({message: null, type: 'success'})

    useEffect(() => {
        console.log('fetching data')
        axios.get('http://localhost:3001/persons')
        .then(response => {
            console.log('**fetch reussit**', response.data)
            setPersons(response.data)
        })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            
            const confirm = window.confirm(`${newName} is already in the phonebook, replace the old number?`)
            if (confirm) {
                const existingPerson = persons.find(person => person.name === newName)
                const personObject = {
                    id: existingPerson.id,
                    name: existingPerson.name,
                    number: newNumber,
                }
                axios.put(`http://localhost:3001/persons/${existingPerson.id}`, personObject)
                    .then(response => {
                        console.log('**updated reussit**', response.data)
                        setPersons(persons.map(person => person.id === personObject.id ? response.data : person))
                        setNotification({message: `${newName} updated successfully`, type: 'success'})
                        setTimeout(() => {
                            setNotification({message: null, type: 'success'})
                        }, 5000)
                    })
                    .catch(error => console.log('**updated failed**', error))
            }

        }else{
            const personObject = {
                name: newName,
                number: newNumber
                // let the server generate id
                }
            
                // send to server first
                axios.post('http://localhost:3001/persons', personObject)
                .then(response => {
                    console.log('**added reussit**', response.data)
                    // use the server's return object (contains the correct id)
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                    setNotification({message: `${newName} added successfully`, type: 'success'})
                    setTimeout(() => {
                        setNotification({message: null, type: 'success'})
                    }, 5000)
                })
                .catch(error => {
                    console.log('**added failed**', error)
                    if(error.response.status === 404){
                    setNotification({message: `name ${newName} was already removed from the server`, type: 'danger'})
                    }else{
                        setNotification({message: 'add failed, please try again', type: 'danger'})
                    }
                    setTimeout(() => {
                        setNotification({message: null, type: 'danger'})
                    }, 5000)
                })
            }
    }
        const deletePerson = (id) => {
            const personToDelete = persons.find(person => person.id === id)
            if (confirm(`Are you sure you want to delete this person ${personToDelete.name}, id = ${id}, name = ${personToDelete.name}`)) {
                axios.delete(`http://localhost:3001/persons/${id}`)
                .then(response => {
                    console.log("**deleted reussit**",response.data)
                    
                    setNotification({message: 'delete success', type: 'success'})
                    setPersons(persons.filter(person => person.id !== id))
                    
                    setTimeout(() => {
                        setNotification({message: null, type: 'success'})

                    }, 5000)
                })
                .catch(error => {
                    if(error.response.status === 404){
                        setNotification({message: `name ${personToDelete.name} was already removed from the server`, type: 'danger'})
                    }else{
                        setNotification({message: 'delete failed, please try again', type: 'danger'})
                    }
                    setTimeout(() => {
                        setNotification({message: null, type: 'danger'})
                    }, 5000)
                })
            }
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
            <Notification message={notification.message} type={notification.type} />
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
            <div className="border border-dark rounded p-3">{persons.map(person => <div key={person.id}>{person.name} : {person.number} <button className="my-2 btn btn-sm btn-danger" onClick={() => deletePerson(person.id)}>delete</button></div>)}</div>
            <div className="mt-3 text-danger">debug here : {newName}</div>

            <hr />
            <h2>Search</h2>
            <div className="border border-dark rounded p-3">{filteredPersons.map(person => <div key={person.id}>{person.name} : {person.number}</div>)}</div>
        </div>
    )
}


export default Phonebook;
