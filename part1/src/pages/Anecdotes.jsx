import { useState } from 'react'

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleNext = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected + 1)
    } else {
      setSelected(0)
    }
  }
  const handlePrevious = () => {
    if (selected > 0) {
      setSelected(selected - 1)
    } else {
      setSelected(anecdotes.length - 1)
    }
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const maxVotes = Math.max(...votes) // find the max votes
  const mostVotedIndex = votes.indexOf(maxVotes) // find the index of the max votes

  return (
    <div>
      <h2>Anecdotes</h2>
      
      <div className="border rounded p-3 mb-3" style={{ 
        minHeight: '100px', 
        maxHeight: '150px', 
        overflow: 'auto'
      }}>
        <p className="mb-0">{anecdotes[selected]}</p>
      </div>

      <button className="btn btn-primary m-2" onClick={handlePrevious}>previous</button>
      <button className="btn btn-primary m-2" onClick={handleNext}>next</button>
      <button className="btn btn-primary m-2" onClick={handleVote}>vote</button>
      
      <p style={{ minHeight: '30px', margin: '10px 0' }}>votes: {votes[selected]}</p>
      
      <div className="mt-4" style={{ minHeight: '120px' }}>
        <h3>Anecdote with most votes:</h3>
        {maxVotes > 0 ? (
          <>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>has {maxVotes} votes</p>
          </>
        ) : (
          <p className="text-muted">No votes yet</p>
        )}
      </div>
    </div>
  )
}

export default Anecdotes
