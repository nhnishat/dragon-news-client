import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const [accepted, setAccepted] = useState(false);
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		console.log(name, photo, email, password);
		createUser(email, password)
			.then((result) => {
				const createdUser = result.user;
				console.log(createdUser);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};
	return (
		<Container>
			<h2 className="my-3 text-center">Please Login</h2>
			<Form onSubmit={handleRegister} className="w-25 mx-auto mt-5">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						placeholder="Please Enter your name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPhotoURL">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control
						type="text"
						name="photo"
						placeholder="Enter your Photo"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter your email address"
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						onClick={handleAccepted}
						type="checkbox"
						name="accept"
						label={
							<>
								Accept <Link to="/terms">Trams & Condition</Link>
							</>
						}
					/>
				</Form.Group>
				<Button variant="primary" disabled={!accepted} type="submit">
					Register
				</Button>
				<br />
				<Form.Text className="text-muted">
					Already Have An Account ?
					<Link to="/login" className="text-danger ms-1">
						Login
					</Link>
				</Form.Text>
			</Form>
		</Container>
	);
};

export default Register;
