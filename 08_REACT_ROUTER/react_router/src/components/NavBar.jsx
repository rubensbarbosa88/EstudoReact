import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const id = 1
  const anotherId = 7

  return (
    <nav style={{marginBottom: '30px'}}>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about" style={{marginLeft: '20px'}}>About</Link>
            <Link to={`/product/${id}`} style={{marginLeft: '20px'}}>Produto ID</Link>
            <Link to={`/product/${anotherId}/aee`} style={{marginLeft: '20px'}}>Produto Outro ID</Link>
            <Link to={`/redirect`} style={{marginLeft: '20px'}}>Redirect</Link>

            <NavLink to="/" style={{marginLeft: '60px'}}>Home</NavLink>
            <NavLink to="/about" style={{marginLeft: '20px'}}>About</NavLink>
            <NavLink to={`/product/${id}`} style={{marginLeft: '20px'}}>Produto ID</NavLink>
            <NavLink to={`/redirect`} style={{marginLeft: '20px'}}>Redirect</NavLink>
        </div>
    </nav>
  )
}

export default NavBar