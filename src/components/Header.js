import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  * {
    width: 100%;
    margin: auto;
    justify-content: space-around;
    background-color: skyblue;
  }
  h1 {
    padding: 15px;
  }
  nav {
    display: flex;
  }
  div {
    border: 2px solid black;
    padding: 10px;
  }
  `

const Header = (props) => {
  return (
    <Nav>
      <h1>Hi, I'm Nellie 😃</h1>
      <nav>
        <Link to="/">
          <div>ABOUT</div>
        </Link>
        <Link to="/resume">
          <div>RESUME</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </Nav>
  );
}

export default Header;