import { Navigate, createBrowserRouter } from 'react-router-dom';
import { default as LoginLayout } from '../Layouts/LoginLayout/LoginLayout';
import NewsLayout from '../Layouts/NewsLayout';
import Main from '../Layouts/main';
import Category from '../Pages/Home/Home/Category/Category';
import Login from '../Pages/Log/Login';
import News from '../Pages/News/News/News';
import Register from '../Pages/Register/Register';
import Terms from '../Pages/Terms/Terms';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/category/0" />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'terms',
				element: <Terms />,
			},
		],
	},
	{
		path: 'category',
		element: <Main />,
		children: [
			{
				path: ':id',
				element: <Category />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
		path: 'news',
		element: <NewsLayout />,
		children: [
			{
				path: ':id',
				element: (
					<PrivateRoute>
						<News />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);
export default router;
