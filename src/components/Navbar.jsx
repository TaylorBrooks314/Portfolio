/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import github from '../assets/GitHub_Logo.png'
import linkedin from '../assets/LinkedIn-Blue-14@2x.png'
export default function Navbar({location}) {
  return (
   <div className="navbar">
    {location.home&&
    
     <ul className="navList">
        <li className="Link">
          <Link to={'/resume'}> Resume </Link>
        </li>
        <li className="Link">
            <Link to={'/projects'}> Projects </Link>
        </li>
        <div className='connect'>
            <a href="https://github.com/TaylorBrooks314">
                <img src={github} alt="GitHub"  className='github'/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-brooks-72a501269/">
                <img src={linkedin} alt="Linkedin"  className='linkedin'/>
            </a>
        </div>
    </ul>
    }
    {/* {location.about&&
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
    } */}
    {location.resume&&
      <ul className="navList">
        <li className="Link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="Link">
            <Link to={'/projects'}>Projects</Link>
        </li>
        <div className='connect'>
            <a href="https://github.com/TaylorBrooks314">
                <img src={github} alt="GitHub"  className='github'/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-brooks-72a501269/">
                <img src={linkedin} alt="Linkedin"  className='linkedin'/>
            </a>
        </div>
      </ul>
    }
     {location.projects&&
      <ul className="navList">
        <li className="Link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="Link">
          <Link to={'/resume'}>Resume</Link>
        </li>
        <div className='connect'>
            <a href="https://github.com/TaylorBrooks314">
                <img src={github} alt="GitHub"  className='github'/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-brooks-72a501269/">
                <img src={linkedin} alt="Linkedin"  className='linkedin'/>
            </a>
        </div>
      </ul>
      }
   </div>
  )
}
