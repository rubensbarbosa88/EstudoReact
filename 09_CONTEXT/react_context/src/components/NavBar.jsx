import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav style={{marginBottom: '20px'}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about" style={{marginLeft: '10px'}}> About </NavLink>
    </nav>
  )
}

export default NavBar