import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <ul>
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
  )
}
