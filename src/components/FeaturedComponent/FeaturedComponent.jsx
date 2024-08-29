import React from 'react'
import './FeaturedComponent.css'

export default function FeaturedComponent({Class , image , title , href , p  , desc}) {
    return (
        <div className={`${Class} FM-info`}>
            <img src={image} alt="info-image" />
            <div>
                <h4>{title}</h4>
                <a href={href} target="_blank">{p}</a>
                <p>{desc}</p>
            </div>
        </div>
    )
}
