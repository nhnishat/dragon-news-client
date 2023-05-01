import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Category = () => {
	const categoriesNews = useLoaderData();
	const { id } = useParams();
	return (
		<div>
			{id && <h4>Category : {categoriesNews.length}</h4>}
			{categoriesNews.map((news) => (
				<NewsCard key={news._id} news={news} />
			))}
		</div>
	);
};

export default Category;
