import { useState } from 'react' 

const Button = ({text, onClick, className}) => {
  return (
    <button className={className} onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = total > 0 ? (good - bad) / total : 0
  const positive = total > 0 ? (good / total) * 100 : 0

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h3>statistics</h3>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>statistics</h3>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive}%`} />
    </div>
  )
}

const Unicafe = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <h2>Unicafe</h2>
      <div className="d-flex flex-column align-items-center">
        <h3>give feedback</h3>
        <div className="d-flex flex-row align-items-center">
          <Button className="btn btn-success m-2" text="good" onClick={handleGood} />
          <Button className="btn btn-secondary m-2" text="neutral" onClick={handleNeutral} />
          <Button className="btn btn-danger m-2" text="bad" onClick={handleBad} />
        </div>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default Unicafe