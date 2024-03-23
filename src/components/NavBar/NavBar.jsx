import './NavBar.css'
import { TiHome } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { useState } from 'react';

export default function NavBar({ items, logo }) {
  const [active, setactive] = useState(false);
  return (
    <>
      <nav>
        <h1 className="logo">{logo}</h1>
        <div className="items">
          <ul>
            {items.map((element, index) => {
              return (
                <li><i className={element.icon}></i>{element.label}</li>
              )
            })}
            {/*             <li><TiHome /> Home</li>
            <li><FaInfoCircle />About</li>
            <li><MdHomeRepairService />Service</li>
            <li><IoMdContact />Contact</li> */}
          </ul>
          <button>sign up</button>
        </div>
        <button className='menuButton' onClick={() => setactive(prev => !prev)}><FaList /></button>
      </nav>
      <div className={(active) ? "nav-menu active" : "nav-menu"}>
        <ul>
          {items.map((element, index) => {
            return (
              <li><i className={element.icon}></i>{element.label}</li>
            )
          })}
{/*           <li><TiHome /> Home</li>
          <li><FaInfoCircle />About</li>
          <li><MdHomeRepairService />Service</li>
          <li><IoMdContact />Contact</li> */}
        </ul>
        <button>sign up</button>
      </div>
    </>
  )
}
