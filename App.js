import './App.css'
import React, { useState } from 'react'
const API = 'e09c1bbf0ebfef12df6e2b8b95ba545a'
export default function App () {
  document.bgColor = '#87ceeb'
  const [city, setCity] = useState('')
  const [result, setResult] = useState({})
  const getWeather = async e => {
    e.preventDefault()
    if (!city) {
      return
    }
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    )
    const { main } = await res.json()
    setResult(main)
  }
  return (
    <div>
      <form onSubmit={getWeather}>
        <div>
          <label>都市名を記入</label>
          <input value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <button type='submit'>検索</button>
      </form>
      {result && (
        <>
	  <p>今日の気温</p>
          <p>湿度: {result.humidity}</p>
          <p>気圧: {result.pressure}</p>
          <p>気温: {Math.trunc(result.temp - 273.15)}</p>
          <p>最高気温: {Math.trunc(result.temp_max - 273.15)}</p>
          <p>最低気温: {Math.trunc(result.temp_min - 273.15)}</p>
        </>
      )}
    </div>
  )
}


