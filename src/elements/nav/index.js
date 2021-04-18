import React from 'react'
import './index.scss'

import { BiHomeAlt,BiCart } from 'react-icons/bi'
import { AiOutlineCompass } from 'react-icons/ai'
import { IoIosChatboxes } from 'react-icons/io'
import { FiUser } from 'react-icons/fi'

import { Link,useLocation } from 'react-router-dom'

const ALL_ROUTES = {
    HOME:"/",
    EXPLORE:"/explore",
    CART:"/cart",
    CHAT:"/chat",
    PROFILE:"/profile"
}


function Nav() {
    const location = useLocation();
    

    return (
        <div className="nav-container" >
            <Link className={`home-after ${location.pathname===ALL_ROUTES.HOME&&"active"}`} to={ALL_ROUTES.HOME} ><BiHomeAlt className="nav-icons" color="#ffc42b" /></Link>
            <Link className={`explore-after ${location.pathname===ALL_ROUTES.EXPLORE&&"active"}`} to={ALL_ROUTES.EXPLORE} ><AiOutlineCompass className="nav-icons" color="#94bc98" /></Link>
            <Link className={`cart-after ${location.pathname===ALL_ROUTES.CART&&"active"}`} to={ALL_ROUTES.CART} ><BiCart className="nav-icons" color="#cd585b" /></Link>
            <Link className={`chat-after ${location.pathname===ALL_ROUTES.CHAT&&"active"}`} to={ALL_ROUTES.CHAT} ><IoIosChatboxes className="nav-icons" color="#68d4f2" /></Link>
            <Link className={`profile-after ${location.pathname===ALL_ROUTES.PROFILE&&"active"}`} to={ALL_ROUTES.PROFILE} ><FiUser className="nav-icons" color="#3f3f3f" /></Link>
        </div>
    )
}

export default Nav
