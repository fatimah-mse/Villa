import React from 'react'
import './CardBtn.css'

export default function CardBtn({txt , Class}) {
  return (
    <button className={`FM-card-button ${Class}`}>{txt}</button>
  )
}
