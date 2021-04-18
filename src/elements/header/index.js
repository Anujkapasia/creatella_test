import React from 'react'
import './index.scss';
import { BsBellFill } from 'react-icons/bs'
import { CgMenu } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'



function Header(props) {

    return (
        <div className="header-container" >
            <CgMenu className="header-icons" />
            <div className="search-container" >
                <BiSearch className="search-icon" color="#8a8a8a" />
                <input value={props.searchVal} placeholder="Search Products" onChange={(e)=>props.setSearchVal(e.target.value)}  />
            </div>
            <BsBellFill className="header-icons" />
            
        </div>
    )
}

export default Header
