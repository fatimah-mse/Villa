import React from 'react'
import './ContactUs.css'
import { data } from '../../Data/ContactData'
import Form from '../Form/Form'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'

export default function ContactUs() {
    return (
        <section className='FM-padding FM-contact'>
            <div className='FM-contact-info'>
                <iframe className='FM-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.58455681187!2d35.90898495607581!3d35.36003700158077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3a68bf33eb%3A0xe07c09df6304fdfe!2sJableh%2C%20Syria!5e0!3m2!1sen!2s!4v1723959805941!5m2!1sen!2s" ></iframe>
                {data.map((e,index) => {
                    return (
                        <FeaturedComponent key={index}
                                            Class={'FM-frame'}
                                            image={e.imgURL}
                                            href={e.link}
                                            p={e.txt}
                                            desc={e.span}
                        />
                    )
                })}
            </div>
            <Form width={'FM-contact-form-width-35'}/>
            
        
        </section>
    )
}
