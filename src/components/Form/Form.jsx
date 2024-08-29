import React from 'react'
import { FormData } from '../../Data/FormData'
import CardBtn from '../CardBtn/CardBtn'
import './Form.css'

export default function Form({width}) {
    return (
        <form className={`FM-contact-form ${width}`}>
            {FormData.map((e,index) => {
                return (
                    <div key={index}>
                        <label>{e.lable}</label>
                        {e.input}
                    </div>
                )
            })}
            <CardBtn txt={'Send Message'}/>
        </form>
    )
}
