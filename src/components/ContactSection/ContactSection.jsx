import React from 'react'
import './ContactSection.css'
import Form from '../Form/Form'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'
import { data } from '../../Data/ContactData'

export default function ContactSection() {
    return (
        <section className='FM-padding FM-contact-sec'>
            <div>
                <h6 className='FM-h6'>| Contact Us</h6>
                <h2 className='FM-h2'>Get In Touch With Our Agents</h2>
                <p className='FM-desc'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
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
            <Form width={'FM-contact-form-width-44'}/>
            <iframe className='FM-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.58455681187!2d35.90898495607581!3d35.36003700158077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3a68bf33eb%3A0xe07c09df6304fdfe!2sJableh%2C%20Syria!5e0!3m2!1sen!2s!4v1723959805941!5m2!1sen!2s" ></iframe>
        </section>
    )
}
