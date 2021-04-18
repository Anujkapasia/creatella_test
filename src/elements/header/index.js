import React, { useState } from 'react'
import './index.scss';
import { BsBellFill } from 'react-icons/bs'
import { CgMenu } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'



function Header() {
    const [searchVal , setSearchVal] = useState("")

    return (
        <div className="header-container" >
            <CgMenu className="header-icons" />
            <div className="search-container" >
                <BiSearch className="search-icon" color="#8a8a8a" />
                <input value={searchVal} placeholder="Search Products" onChange={(e)=>setSearchVal(e.target.value)}  />
            </div>
            <BsBellFill className="header-icons" />
            
        </div>
    )
}

export default Header
