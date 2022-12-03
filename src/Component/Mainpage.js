import React ,{useState} from 'react'
import './MainPage.css'
import { CgHome } from 'react-icons/cg'
import { BsCheck2Circle,BsMenuButtonWide } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { AiOutlineLock, AiOutlineFile} from 'react-icons/ai'
import BarCamp from './BarCamp'

 
const Mainpage = () => {
  return (
  <>
    <div className="main_container">
        <div className="heading">
            <h1> Salesforce OAuth 2.0 Dialog Insights</h1>
            
        </div>
        <div className="headpart2">
          <div className="container_card">
            <div className="items">
              <AiOutlineFile size='1em' color="rgb(10, 114, 155)"/>
              <p>Effective Pass Rate:</p>
              <span>99.42%</span>
            </div>
            <div className="items">
              <BsCheck2Circle size='1em' color="rgb(10, 114, 155)"/>
              <p>Error %:</p>
              <span>0.01%</span>
            </div>
            <div className="items">
              <FiCalendar size='1em' color="rgb(10, 114, 155)"/>
              <p>Outlier %:</p>
              <span>0.57%</span>
            </div>
            <div className="items">
              <CgHome size='1em' color="rgb(10, 114, 155)"/>
              <p>Mean Latency:</p>
              <span>333ms</span>
            </div>
            <div className="items">
              <BsMenuButtonWide size='1em' color="rgb(10, 114, 155)"/>
              <p>CASC Score</p>
              <span>958</span>
            </div>
            <div className="items">
              <AiOutlineLock size='1em' color="rgb(10, 114, 155)"/>
              <p>Effective Pass Rate:</p>
              <span>99.42%</span>
            </div>
          
            </div>
          <div className="container_card2">
                  <div class="container-porgress">
                    <div class="progressbar">
                    </div>
                  </div>
                  <p>42%</p>
            </div>
        </div>
      
        <div className="twogrid">
          <div className="twogrid1">
          <p id="hed">Heading figures</p> 
            <div className="card_hold"> 
              <div className="cardest1">
                <p>Efective Service Level:</p>
                <p>Outliers:</p>
                <p>Days with outliers:</p>
                <p>Days without outliers:</p>
                <p>Outlier clusters:</p>
                <p>Faster than 1069 ms:</p>
                <p>Faster than 1436 ms:</p>
                <p>Start date:</p>
                <p>End date:</p>
                <p>Statistics:</p>
                </div>       
              <div className="cardest2">
                  <p>99.42% at 1069ms</p>
                  <p>0.58%</p>
                  <p>27</p>
                  <p>27</p>
                  <p>27</p>
                  <p>95.45%</p>
                  <p>95.45%</p>
                  <p>Aug 1,2019 3:01 EEST</p>
                  <p>Aug 1,2019 3:01 EEST</p>
                  <p>Location breakdown available here</p>
                </div>
            </div>       
              </div>
          <div className="twogrid2">
          <p>Heading figures</p>  
               <div className="linechart">
               <BarCamp/>
              </div>
              
            </div>
        </div>
        <div className="three_grid">
          <div className="threegrid1">
            <div className="head"> 
                <div className="menu-item">Days in sample with performance</div>
                <div className="dropdown_container">
                   <div className="three_dots"></div>
                   <div className="dropdown">
                       <a href="#">link1</a>
                       <a href="#">link2</a>
                       <a href="#">link3</a>
                   </div>
                </div>
            </div>
            <div className="bar"> 
              <div className="barCircle">
                 <div className='skill'>
                          <div className="outer">
                              <div className="inner">
                                  <div id="number">
                                    
                                  </div>
                              </div>
                          </div>
                        <svg id="svgletter" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"> 
                            <defs>
                                <linearGradient id="GradientColor">
                                <stop offset="0%"  stop-color="#ec3257" />
                                {/* <stop offset="100%"  stop-color="#673ab7" /> */}
                                
                                </linearGradient>
                            </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                  </div>
              </div>
              <div className="barContent">
                  <div className="barContent1">
              
                  <p>Days in sample with performance</p>
                  <p>Days in sample with performance</p>
                  </div>
              </div>
            
             </div>
            
          </div>
          <div className="threegrid2">
            <div className="head"> 
            <div className="menu-item">Outliers by location</div>
                <div className="dropdown_container">
                   <div className="three_dots"></div>
                   <div className="dropdown">
                       <a href="#">link1</a>
                       <a href="#">link2</a>
                       <a href="#">link3</a>
                   </div>
                </div>
            </div>
            <div className="bar"> 
           
                <div className="barCircle">
                    <div className='skill'>
                          <div className="outer">
                              <div className="inner">
                                  <div id="number">
                                    
                                  </div>
                              </div>
                          </div>
                        <svg id="svgletter" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"> 
                            <defs>
                                <linearGradient id="GradientColor2">
                                <stop offset="0%"  stop-color="#6BA32D" />
                                <stop offset="25%"  stop-color="#96cc39" />
                                <stop offset="50%"  stop-color="#a7e074" />
                                <stop offset="100%"  stop-color="#c0ec83" />
                                
                                </linearGradient>
                            </defs>
                                <circle id='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                  </div>

                </div>
                <div className="barContent">
                    <div className="barContent2">
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                      <p>Days in sample with bar performance</p>
                    </div>
                </div> </div>
          </div>
          <div className="threegrid3">
            <div className="head"> 
            <div className="menu-item">Days in sample with performance</div>
                <div className="dropdown_container">
                   <div className="three_dots"></div>
                   <div className="dropdown">
                       <a href="#">link1</a>
                       <a href="#">link2</a>
                       <a href="#">link3</a>
                   </div>
                </div>
            </div>
            <div className="bar"> 
                <div className="barCircle">
                <div className='skill'>
                          <div className="outer">
                              <div className="inner">
                                  <div id="number">
                                    
                                  </div>
                              </div>
                          </div>
                        <svg id="svgletter" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px"> 
                            <defs>
                                <linearGradient id="GradientColor3">
                                <stop offset="0%"  stop-color="rgb(10, 114, 155)" />
                                {/* <stop offset="100%"  stop-color="#673ab7" /> */}
                                
                                </linearGradient>
                            </defs>
                                <circle id='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                  </div>
                </div>
                <div className="barContent">
                <div className="barContent3">
              
                    <p>Days in sample with performance</p>
                    <p>Days in sample with performance</p>
              </div>
                </div>
             </div>
          </div>
        </div>
    </div>
  </>
  )
}

export default Mainpage