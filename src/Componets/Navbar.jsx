import React ,{useRef, useState}from  'react'
import './Navbar.css'
import akash from '../../src/assets/akash.png'
import nav_underline from '../../src/assets/nav_underline.svg'
import menu_open from '../../src/assets/menu_open.svg'
import menu_close from '../../src/assets/menu_close.svg'



const Navbar = () => {
  
    const[menu, Menu] = useState("home");
    const menuRef = useRef();

    
  const  openMenu = () => {
      menuRef.current.style.right="0";
    }
    const closeMenu =() => {
      menuRef.current.style.right="-350px"
    }

  return (
    <div className='Navbar'>
      <img src={akash} alt=" "/>
      <img src={menu_open} onClick={openMenu} alt=" " className='nav-mob-open'/>
        <ul ref= {menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
           <li>
        <a className="anchor" href="#home" > 
          <p onClick={() => Menu("home")}> Home</p>
        </a>{menu === "home" ? <img src={nav_underline} alt='' /> : <></>}
        
       </li>

       <li>
        <a className="anchor" href="#About">
        <p  onClick={() => Menu("about")}>about</p>
        </a>{menu === "about" ? <img src={nav_underline} alt='' /> : <></>}
        
       </li>

       <li>
        <a  className="anchor" href="#services" >
        <p onClick={() => Menu("services")}>Service</p>
       </a> {menu === "services" ? <img src={nav_underline} alt='' /> : <></>}
        
       </li>
      
       <li>
        <a className="anchor" href="#work" >
        <p onClick={() => Menu("work")}>Work</p>
        </a>{menu === "work" ? <img src={nav_underline} alt='' /> : <></>}
       </li>
         
       <li>
        <a className="anchor" href="#contact" >
        <p onClick={() => Menu("contact")}>contact</p>
        </a>{menu === "contact" ? <img src={nav_underline} alt='' /> : <></>} 
       </li>
        </ul>

        <a href="#contact" className="nav-connect">Connect With Me</a>


     </div>
  )
}
export default Navbar