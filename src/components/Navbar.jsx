/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export default function Navbar({location}) {
  return (
   <div>
    {location.home&&
    
     <ul className="navbar">
        <li>
            <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/resume'}>Resume</Link>
        </li>
        <li>
            <Link to={'/projects'}>Projects</Link>
        </li>
    </ul>
    }
    {location.about&&
      <ul className="navbar">
        <li>
          <Link to={'/'}>Homepage</Link>
        </li>
        <li>
          <Link to={'/resume'}>Resume</Link>
        </li>
        <li>
            <Link to={'/projects'}>Projects</Link>
        </li>
      </ul>
    }
    {location.resume&&
      <ul className="navbar">
        <li>
          <Link to={'/'}>Homepage</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
            <Link to={'/projects'}>Projects</Link>
        </li>
      </ul>
    }
     {location.projects&&
      <ul className="navbar">
        <li>
          <Link to={'/'}>Homepage</Link>
        </li>
        <li>
            <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/resume'}>Resume</Link>
        </li>
      </ul>
      }
   </div>
  )
}
