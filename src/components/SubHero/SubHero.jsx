import React from 'react'
import './SubHero.css'

export default function SubHero({url}) {
    return (
        <section className='FM-padding FM-sub-hero'>
            <button>Home / {url}</button>
            <h2>{url}</h2>
        </section>
    )
}
