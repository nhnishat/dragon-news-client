
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightNav from '../Pages/Shared/RightNav/RightNav';
const NewsLayout = () => {
	return (
		<div>
			<Header />
			<Container>
				<Row>
					<Col lg={9}>
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

export default NewsLayout;
