import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container>
			<h2>Terms & Condition</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
				deleniti optio repudiandae voluptas quo esse possimus magnam, et
				reiciendis quasi, non numquam! Corrupti quas numquam suscipit commodi
				veniam, rerum unde.
			</p>
			<p>
				Go Back To <Link to="/register">Register</Link>
			</p>
		</Container>
	);
};

export default Terms;
