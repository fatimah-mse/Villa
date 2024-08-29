import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { NavLinks } from '../../Data/NavLinks'
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const [header, setHeader] = useState(false)
    const [navList, NavListShow] = useState(false)

    function setNavListShow () {
        NavListShow(!navList)
    }

    function handleScroll () 
    {
        if (window.scrollY > 50) {
        setHeader(true)
        }
        else {
        setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <nav className={`FM-navbar FM-padding ${header? 'FM-navbar-scroll' : 'FM-navbar-normal'}`}>
            <h1 className={`FM-H1 ${header? 'FM-nav-dark-mood' : 'FM-nav-light-mood'}`}>VILLA</h1>
            <div className={`${navList? 'FM-list-responsive' : 'FM-list'} ${header? 'FM-nav-list-dark-mood' : 'FM-nav-list-light-mood'}`}>
                {NavLinks.map((e,index) => {
                    return (
                        <NavLink key={index}
                            to={e.href}
                            className={({ isActive }) =>
                                `FM-nav-${header ? 'dark-mood' : 'light-mood'} ${isActive ? 'FM-active-link' : ''} FM-list-item`}
                            >
                            {e.item}
                        </NavLink>
                    )
                })}
                <ScheduleBtn mood={header? 'FM-schedule-link-dark' : 'FM-schedule-link-light'}/>
            </div>
            <FontAwesomeIcon onClick={setNavListShow} className={`FM-nav-btn ${header? 'FM-nav-dark-mood' : 'FM-nav-light-mood'}`} icon={navList ? faXmark : faBarsStaggered} />
            
        
        </nav>
    )
}
