import React from 'react'
import logo from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/logo.jpg"
import sear from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/sear.png"
import men from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/men.png"
import mic from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/mic.png"


const Header = ({ toggleExploreTab }) => {
  return (
    <div className="head">
        <img src={men} id="exp" onClick={toggleExploreTab} />
        <img src={logo} />
        <input type="text" placeholder='Search...' />
        <button><img src={mic} className='mi' /></button>
    </div>
  )
}

export default Header
