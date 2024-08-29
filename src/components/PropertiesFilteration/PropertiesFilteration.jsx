import React, { useState } from 'react'
import './PropertiesFilteration.css'
import FilterBtn from '../FilterBtn/FilterBtn'
import { CardData } from '../../Data/CardData'
import Card from '../Card/Card'
import CardBtn from '../CardBtn/CardBtn'

const btns = [
    {
        filter: 'all',
        txt: 'Show All'
    },
    {
        filter: 'appartment',
        txt: 'Appartment'
    },
    {
        filter: 'house',
        txt: 'Villa House'
    },
    {
        filter: 'penthouse',
        txt: 'Penthouse'
    }
]

const numbers = [
    {
        txt: '1'
    },
    {
        txt: '2'
    },
    {
        txt: '3'
    },
    {
        txt: '>>'
    }
]

export default function PropertiesFilteration() {

    const [activeBTN, setActiveBTN] = useState('all')
    const [activeNum] = useState(1)

    function ActiveBTNs(filter) {
        if (activeBTN === filter) {
            setActiveBTN('all')
        } else {
            setActiveBTN(filter)
        }
    }
    return (
        <section className='FM-padding FM-Properties'>
            <div className='FM-btn'> 
                {btns.map((e,index) => {
                    return (
                        <FilterBtn key={index}
                                    func={() => ActiveBTNs(e.filter)}
                                    activeBTN={activeBTN}
                                    filter={e.filter}
                                    txt={e.txt}
                        />
                    )
                })}
            </div>
            <div className='FM-properties-cards'>
                {CardData.map((e, index) => (
                    e.filter.split(' ').includes(activeBTN) && (
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
                ))}
            </div>
            <div className='FM-numbers'>
                {numbers.map((e,index) => {
                    return (
                        <CardBtn key={index} Class={activeNum === index ? 'FM-active-num' : ''}  txt={e.txt} />
                    )
                })}
            </div>
            
            
        
        </section>
    )
}
