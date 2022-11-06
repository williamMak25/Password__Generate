import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {


    return(
        <>
        <div className="header">
            <div className="header__left">
               <Link to="/"><img className="header__img" src="https://i.ibb.co/8NBs5mL/IMG-20201128-105500.png"alt="a"/></Link>
            </div>
            <div className="header__right">
                <Link to="/profile" style={{textDecoration:'none'}}><span>Profile</span></Link>
                <Link to="/about" style={{textDecoration:'none'}}><span>About</span></Link>
                <Link to="/offer" style={{textDecoration:'none'}}><span>Offer</span></Link>
            </div>
        </div>
        </>
    )
}

export default Header;

/*<Router>
          <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/profile' element={<h1>Profile Page</h1>}></Route>
            <Route path='/about' element={<h1>About Page</h1>}></Route>
            <Route path='/offer' element={<h1>Offer Page</h1>}></Route>
          </Routes>
        </Router>*/
