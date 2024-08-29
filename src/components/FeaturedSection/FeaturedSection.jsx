import './FeaturedSection.css'
import { AccordionData } from '../../Data/AccordionData'
import featuredIcon from '../../images/featured-icon.png'
import featured from '../../images/featured.jpg'
import Accordion from '../Accordion/Accordion'
import { InfoData } from '../../Data/InfoData'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'
import Title from '../Title/Title'

export default function FeaturedSection() {

    return (
        <section className='FM-padding FM-sec-1'>
            <div className='FM-div-35'>
                <div className='icon-featured'>
                    <img src={featuredIcon} />
                </div>
                <img src={featured} />
            </div> 
            <div className='FM-div-40'>
                <Title h6={'Featured'} h2={'Best Appartment & Sea View'} />
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
            <div className='FM-div-25'>
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
