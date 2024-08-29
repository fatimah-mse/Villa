import React from 'react'
import './ViewSection.css'
import Title from '../Title/Title'

export default function ViewSection({url , h6 , h2}) {
    return (
        <section className='FM-sec-2'>
            <img src={url} />
            <Title Class={'FM-padding'} h6={h6} h2={h2} />
            
        </section>
    )
}
