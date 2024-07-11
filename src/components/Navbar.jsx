/* eslint-disable react/prop-types */
import github from '../assets/GitHub_Logo.png'
import linkedin from '../assets/LinkedIn-Blue-14@2x.png'
export default function Navbar({location}) {
  return (
   <div className="navbar">
    {location.home&&
    
     <ul className="navList">
        <li className="Link">
          <a href='/resume'> Resume </a>
        </li>
        <li className="Link">
            <a href='/projects'> Projects </a>
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
    {location.resume&&
      <ul className="navList">
        <li className="Link">
          <a href='/'>About</a>
        </li>
        <li className="Link">
            <a href='/projects'>Projects</a>
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
          <a href='/'>About</a>
        </li>
        <li className="Link">
          <a href='/resume'>Resume</a>
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
