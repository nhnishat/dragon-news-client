import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);
	if (loading) {
		return <Spinner animation="border" variant="danger" />;
	}
	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};
export default PrivateRoute;
