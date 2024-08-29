import React, { useState } from 'react'
import './BestDeal.css'
import { FilterationData } from '../../Data/FilterationData'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import FilterBtn from '../FilterBtn/FilterBtn'
import Title from '../Title/Title'

const btns = [
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

export default function BestDeal() {

    const [activeBTN, setActiveBTN] = useState('appartment')

    function ActiveBTNs(filter) {
        if (activeBTN === filter) {
            setActiveBTN('appartment')
        } else {
            setActiveBTN(filter)
        }
    }
    
    return (
        <section className='FM-best-deal FM-padding'>
            <div className='FM-deal-btns'>
                <Title Class={'FM-deal'} h6={'Best Deal'} h2={'Find Your Best Deal Right Now!'} />
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
            </div>
            
            {FilterationData.map((data, index) => {
                if (activeBTN === data.filter) {
                    return (
                        <div key={index} className='FM-deal-filteration'>
                            <div className='FM-deal-filteration-div1'>
                                {data.div1.map((e, i) => (
                                    <div key={i} className={e.borderClass}>
                                        <h4>{e.title}</h4>
                                        <h3>{e.desc}</h3>
                                    </div>
                                ))}
                            </div>
                            <img className='FM-deal-filteration-img' src={data.imgURL} alt="img-deal" />
                            {data.div2.map((e, i) => (
                                <div key={i} className='FM-deal-filteration-div2'>
                                    <h4>{e.h4}</h4>
                                    <p>{e.desc1}</p>
                                    <p>{e.desc2}</p>
                                    <ScheduleBtn mood={'FM-schedule-link-light'} />
                                </div>
                                
                            ))}
                        </div>
                    )

                } 
            })}

        </section>
    )
}
