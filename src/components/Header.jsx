import { Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, Nav} from 'reactstrap';

export const Header = () => {
  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="sm"
        fixed="top"
      >
        <NavbarBrand href="http://www.github.com/AdrianoVS87">
          AVS Portfólio
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            
            <NavItem>
              <NavLink href="#banner">
                Banner
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#footer">
                Footer
              </NavLink>
            </NavItem>
            
          </Nav>
          <NavItem>
          <a href="http://www.github.com/AdrianoVS87">
            <img id="adri1" src="https://media-exp1.licdn.com/dms/image/C4D03AQHxc3FnIORD4g/profile-displayphoto-shrink_800_800/0/1524864256728?e=1642636800&v=beta&t=ieHpBV6kbsKXyb8pSBrNunhVr9H4tWavd0NYbnFjFEY" alt=""/>
          </a>
          </NavItem>
            
        </Collapse>
      </Navbar>
    </div>

  )
}