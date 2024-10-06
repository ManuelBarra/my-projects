import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <div>
            <h1>MABL</h1>
        </div>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/projects"}>Projects</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
