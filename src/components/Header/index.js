import React,{useState} from 'react';
import * as UI from './style';
import {Link} from 'react-router-dom'

export default function Index({menu, setMenu}) {
  // console.log(menu)
  const [showNav,  setShowNav] = useState(false)
    return (
        <UI.Wrapper className="header ">
          <div className="container">
            <div className=" row align-items-center ">
                <div className="col-lg-4 col-6"><img src={require('../../assets/img/logo.svg')} alt=""/></div>

                <div className={`col-md-8 nav ${!showNav ?  "left": ""}`} >
                  <ul className="d-lg-flex ml-auto align-items-center p-0 m-0">
                    <li className="pr-3"><Link to="/">Home</Link></li>
                    <li  className="pr-3"><Link to="/">About Us </Link></li>
                    <li><Link to="/">What We Do</Link></li>
                    <Link to=""><li className="header-btn">Hire Us</li></Link>
                  </ul>
                </div>

                 <div className="col-lg-4 d-lg-none col-6 d-flex justify-content-end">
                   {!showNav ? 
                   <img src={require('../../assets/img/menu.svg')} alt="" className="menu-icon" onClick={() => setShowNav(!showNav)}/> 
                   : <img src={require('../../assets/img/cancel.svg')} alt="" className="close-icon" onClick={() => setShowNav(!showNav) }/>
                   }
                  </div>
            </div>
          </div>
        </UI.Wrapper>
    )
}
