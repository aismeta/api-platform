import React from 'react'
import { CgHome } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri"
import { FaCaretDown } from "react-icons/fa";
// import { MdPeopleOutline} from "react-icons/md";
import { IoPersonOutline, IoBookOutline } from "react-icons/io5";
import './Navigatebar.css'
const Navigatebar = () => {
  return (
    <>
     <div>
     <header className='container'>
        <div className="containfirst">
           <ul className='nav'>
                <li><CgHome className='home'  size='1em' />Home</li>
                <li>Insight</li>
                <li>Report</li>
                <li>Go to...</li>
            </ul>
        </div>
        <div className="containsecond">
            <ul className='navv'>
              <li><RiGroupLine className='home'  size='1em'/>Corp Infrastructure</li>
              <li className='dropdown_nav'>
                <button className='btn'><IoPersonOutline className='home'  size='1em'/>@jleonard<FaCaretDown/></button>
                <div className='dropdown-content'>
                  <li>Link1</li>
                  <li>Link2</li>
                  <li>Link3</li>
                
              </div></li>
              <li><IoBookOutline className='home'  size='1em'/>Help</li>
            </ul>
        </div>
        </header>
     </div>
    </>
   
  )
}

export default Navigatebar