import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap'
export default class Header extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <header>
          <Navbar color='dark' dark expand='md'>
            <NavbarBrand href="/">Higallery</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Feed</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/albums">Albums</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/upload">Upload</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
    )
  }


}