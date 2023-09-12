/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export default function Navbar({location}) {
  return (
   <div className="navbar">
    {location.home&&
    
     <ul className="navList">
        <li className="Link">
          <div >
            <Link to={'/about'}>About </Link>
          </div>
        </li>
        <li className="Link">
          <Link to={'/resume'}> Resume </Link>
        </li>
        <li className="Link">
            <Link to={'/projects'}> Projects </Link>
        </li>
    </ul>
    }
    {location.about&&
      <ul className="navList">
        <li className="Link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="Link">
          <Link to={'/resume'}>Resume</Link>
        </li>
        <li className="Link">
            <Link to={'/projects'}>Projects</Link>
        </li>
      </ul>
    }
    {location.resume&&
      <ul className="navList">
        <li className="Link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="Link">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="Link">
            <Link to={'/projects'}>Projects</Link>
        </li>
      </ul>
    }
     {location.projects&&
      <ul className="navList">
        <li className="Link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="Link">
            <Link to={'/about'}>About</Link>
        </li>
        <li className="Link">
          <Link to={'/resume'}>Resume</Link>
        </li>
      </ul>
      }
   </div>
  )
}
