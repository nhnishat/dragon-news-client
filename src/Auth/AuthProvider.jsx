import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const auth = getAuth(app);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const singInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const LogOut = () => {
		setLoading(true);
		return signOut(auth);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
			console.log('logged in user inside auth state observer', loggedUser);
			setUser(loggedUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	const authInfo = {
		user,
		createUser,
		singInUser,
		LogOut,
		loading,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
