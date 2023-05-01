import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth/AuthProvider';

const NavigationBar = () => {
	const { user, LogOut } = useContext(AuthContext);
	const handleLogOut = () => {
		LogOut()
			.then()
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<Container>
				<Navbar collapseOnSelect expand="lg" bg="gray" variant="gray">
					<Container>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mx-auto m-4">
								<Link
									to="/category/0"
									className="me-4 text-decoration-none text-black"
								>
									Home
								</Link>
								<Link
									href="/category"
									className="me-4 text-decoration-none text-black"
								>
									About
								</Link>
								<Link
									href="#pricing"
									className="me-4 text-decoration-none text-black"
								>
									Career
								</Link>
							</Nav>
							<Nav>
								{user && (
									<Nav.Link href="#deets">
										<FaUserCircle style={{ fontSize: '40px' }} />
									</Nav.Link>
								)}

								{user ? (
									<Button onClick={handleLogOut} variant="secondary">
										Log Out
									</Button>
								) : (
									<Link to="/login">
										<Button variant="secondary">Login</Button>
									</Link>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Container>
		</div>
	);
};

export default NavigationBar;
