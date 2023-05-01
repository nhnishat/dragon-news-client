import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
	FaFacebook,
	FaGithub,
	FaGoogle,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import bg from '../../../assets/bg.png';
import QZone from '../QZone/QZone';

const RightNav = () => {
	return (
		<div>
			<h4 className="mt-4">LongIn With </h4>
			<Button className="mb-2" variant="primary">
				<FaGoogle /> Login with Google
			</Button>
			<Button variant="secondary">
				<FaGithub /> Login With Github
			</Button>
			<div>
				<h4 className="mt-4">Find Us On</h4>
				<ListGroup>
					<ListGroup.Item>
						<FaFacebook /> Facebook
					</ListGroup.Item>
					<ListGroup.Item>
						<FaTwitter /> Twitter
					</ListGroup.Item>
					<ListGroup.Item>
						<FaInstagram /> Instagram
					</ListGroup.Item>
				</ListGroup>
			</div>
			<QZone />
			<div>
				<img src={bg} alt="" />
				<div className="text-center ">
					<h1>Create an Amazing Newspaper</h1>
					<p>
						Discover thousands of options, easy to customize layouts, one-click
						to import demo and much more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default RightNav;
