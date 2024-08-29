import React from 'react'
import './Details.css'
import { InfoData } from '../../Data/InfoData'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'
import property from '../../images/property-01.jpg'
import Category from '../Category/Category'
import { AccordionData } from '../../Data/AccordionData'
import Accordion from '../Accordion/Accordion'

export default function Details() {
    return (
        <section className='FM-padding FM-details'>
            <div className='FM-details-div'>
                <img className='FM-property-img' src={property} alt="property-img" />
                <Category txt={'Apparment'} />
                <h2 className='FM-h2'>24 New Street Miami, OR 24560</h2>
                <p className='FM-desc'>
                    Get 
                    <strong> the best villa agency </strong>
                    HTML CSS Bootstrap Template for your company website. TemplateMo provides you the 
                    <span className='FM-span-blue'> best free CSS templates </span>
                    in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                </p>
                <p className='FM-desc'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
                <div className='FM-accordion'>
                    {AccordionData.map((e, i) => {
                        return (
                            <Accordion key={i}
                                question={e.question} 
                                firstWord={e.firstWord}
                                strong={e.strong}
                                paragragh1={e.paragragh1}
                                spanClass={e.spanClass}
                                spanWord={e.spanWord}
                                paragraph2={e.paragraph2}
                                index={i}
                            />
                        )
                    })}
                </div>
            </div>
            <div className='FM-div-30'>
                {InfoData.map((e , index) => {
                    return (
                        <FeaturedComponent key={index} 
                                            Class={e.borderClass}
                                            image={e.image}
                                            title={e.title}
                                            desc={e.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}
