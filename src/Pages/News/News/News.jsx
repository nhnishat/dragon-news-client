import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
	const cat = useLoaderData();
	// console.log(cat);

	const { title, details, category_id, image_url } = cat;

	return (
		<Card>
			<Card.Img variant="top" src={image_url} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{details}</Card.Text>
				<Link to={`/category/${category_id}`}>
					<Button variant="primary">
						<FaArrowLeft /> All news in this category
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default News;
