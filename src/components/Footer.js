import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    border: 3px solid black;
    padding: 8px;
    width: 100%;
    margin: auto;
    background-color: skyblue;
`
const Footer = (props) => {
    return (
        <Nav>
            <a target="#" href="https://github.com/Nellie7190/portfolio-frontend">GitHub</a>
            <a target="#" href="https://www.linkedin.com/in/chanel-bosch-nyc/">linkedIn</a>
        </Nav>
    )
};

export default Footer;