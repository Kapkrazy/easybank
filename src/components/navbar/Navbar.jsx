import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import Button from '../button/Button'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
const [menuOpen, setMenuOpen]= useState(false);


  return (
    <nav >
      <div className='logo'><Link to='/'><img src={logo} alt=""  /></Link> 
        
      </div>         

      <div className='menu' onClick={()=>setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        </div>

        

      <ul className={menuOpen? 'open' : ""}>
            <li className='m-menu' onClick={()=>setMenuOpen(!menuOpen)}><NavLink  to='/'>Home</NavLink></li>
            <li className='m-menu' onClick={()=>setMenuOpen(!menuOpen)}><NavLink to='/about'>About</NavLink></li>
            <li className='m-menu' onClick={()=>setMenuOpen(!menuOpen)}><NavLink to='/contact'>Contact</NavLink></li>
            <li className='m-menu' onClick={()=>setMenuOpen(!menuOpen)}><NavLink to='/blog'>Blog</NavLink></li>
            <li className='m-menu' onClick={()=>setMenuOpen(!menuOpen)}><NavLink to='/careers'>Careers</NavLink></li>
            
      </ul>

      <div className='button'><Button /></div>
    </nav>
  )
}

export default Navbar