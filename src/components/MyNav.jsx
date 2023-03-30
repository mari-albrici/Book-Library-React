import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNav = () => (
	<Navbar bg="light" expand="lg">
		<Container fluid>
			<Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">About</Nav.Link>
					<NavDropdown title="Browse" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default MyNav;
