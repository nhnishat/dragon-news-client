import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Card, Image } from 'react-bootstrap';

import '@smastrom/react-rating/style.css';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
	const { title, details, _id, image_url, author, total_view, rating } = news;
	// console.log(news);
	return (
		<div>
			<Card className="mb-4">
				<Card.Header className="d-flex align-items-center">
					<Image style={{ height: '40px' }} src={author.img} roundedCircle />
					<div className="d-flex flex-grow-1 items-center">
						<p className="d-flex ms-3 flex-column">
							<span>{author.name}</span>
							<small>{author.published_date}</small>
						</p>
					</div>
					<div>
						<FaRegBookmark className="me-2" />
						<FaShareAlt />
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Img variant="top" src={image_url} />
					<Card.Text>
						{details.length < 250 ? (
							<>{details}</>
						) : (
							<>
								{details.slice(0, 250)}...
								<Link to={`/news/${_id}`}>Read More</Link>
							</>
						)}
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<div className="d-flex justify-content-between">
						<div>
							<Rating style={{ maxWidth: 100 }} value={rating} readOnly />

							<span> {rating.number}</span>
						</div>
						<div>
							<FaEye /> {total_view}
						</div>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default NewsCard;
