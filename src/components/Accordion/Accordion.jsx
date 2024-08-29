import React, { useState } from 'react'
import './Accordion.css'

export default function Accordion({question , firstWord , strong , paragragh1 , spanClass , spanWord , paragraph2 , index}) {

    const [shown , setShow] = useState (0)

    function ShowAccordion (index) {
        if (shown === index) {
            setShow(-1);
        } else {
            setShow(index);
        }
    }

    return (
        <div>
            <h4 className={`${shown === index ? 'FM-accordion-show' : ''} FM-Question`} onClick={() => ShowAccordion(index)}>{question}</h4>
            <p className={`FM-accordion-desc ${shown === index ? 'FM-desc-shown' : 'FM-desc-hidden'}`}>
                {firstWord} 
                <strong>{strong}</strong>
                {paragragh1} 
                <span className={spanClass}>{spanWord}</span>
                {paragraph2}
            </p>
            </div>
    )
}
