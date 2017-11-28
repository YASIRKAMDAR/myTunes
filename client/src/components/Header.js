import React from 'react';
import { Navbar,NavLink, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import logo from '../images/logo.jpg' 

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  focusInput(event) {
    document.getElementById('searchtext').focus();
  }
  render() {
    return (
      <div className="HeaderBlock">
        <div className="container">
          <Navbar light expand="xs">
            <NavbarBrand>
                <img src={logo} alt="myTunes Logo"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/favourites">Favourites</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;