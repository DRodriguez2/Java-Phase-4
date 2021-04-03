import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Switch, Route, Link } from 'react-router-dom';
import ManageVendors from './ProductManager/ManageVendors'
import ManageFinances from './Finances/ManageFinances'
import ManageDeals from './ProductManager/ManageDeals'
import Home from './Home'


const CustomNavbar = () => {

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
        <NavDropdown title="Product Manager" id="nav-dropdown">
          <NavDropdown.Item as={Link} to="/manage-vendors">Manage Vendors</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/manage-deals">Manage Deals</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link as={Link} to="/finances">Finance Team</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/manage-vendors' component={ManageVendors} />
        <Route exact path='/manage-deals' component={ManageDeals} />
        <Route exact path='/finances' component={ManageFinances} />
      </Switch>
    </div>
  )


}

export default CustomNavbar