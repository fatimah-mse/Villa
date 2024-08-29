import React from 'react'
import './Properties.css'
import { CardData } from '../../Data/CardData'
import Card from '../Card/Card'
import Title from '../Title/Title'

export default function Properties() {
  return (
    <section className='FM-padding FM-properties'>
      <Title h6={'Properties'} h2={'We Provide The Best Property You Like'} />
        <div className='FM-properties-cards'>
            {CardData.slice(0, 6).map((e, index) => {
                return (
                    <Card key={index}
                            image={e.imgURL}
                            category={e.category}
                            price={e.price}
                            h4={e.h4}
                            bedroom={e.bedroom}
                            bathrooms={e.bathroom}
                            area={e.area}
                            floor={e.floor}
                            parking={e.parking}
                    />
                )
            })}
        </div>
        
      
    </section>
  )
}
