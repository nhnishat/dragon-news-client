import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import RightNav from '../Pages/Shared/RightNav/RightNav';

const Main = () => {
	return (
		<div>
			<Header />
			<NavigationBar />
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav />
					</Col>
					<Col lg={6}>
						<Outlet />
					</Col>
					<Col lg={3}>
						<RightNav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Main;
