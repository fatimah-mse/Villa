import React from 'react'
import './Title.css'

export default function Title({Class , h6 , h2}) {
    return (
        <div className={Class}>
            <h6 className='FM-h6'>| {h6}</h6>
            <h2 className='FM-h2'>{h2}</h2>
        </div>
    )
}
