import React from 'react'
import './Sidebar.css'
// import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineFile } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { FiCalendar } from "react-icons/fi";
// import {MdOutlineFlashOn} from 
import { MdFlashOn } from "react-icons/md";
import{BsCheck2Circle , BsMenuButtonWide} from "react-icons/bs";

const Sidebar = () => {
  return (
      <>
        <header className='header'>
            <div mainhead>
            <p id='two'>
            <span id='one'>API</span>
            platform</p>
            </div>
            <ul>
                <li><CgHome size='2em' color="white"/></li>
                <li><BsMenuButtonWide size='2em' color="white"/></li>
                <li><FiCalendar size='2em' color="white"/></li>
                <li><MdFlashOn size='2em' color="white"/></li>
                <li><CgHome size='2em' color="white"/></li>
                <li><AiOutlineFile size='2em' color="white"/></li>
                <li><BsCheck2Circle size='2em' color="white"/></li>
            </ul>

        </header>
     </>
  )
}

export default Sidebar;