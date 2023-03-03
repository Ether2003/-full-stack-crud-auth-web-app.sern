import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySharksPage from "./pages/MySharksPage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/RegisterPage";
import PrivateRoute from './utility/PrivateRoute';

/**
 * this file exports the App component
 * author: Refaat 🌻
 */
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={
					<PrivateRoute>
						<MySharksPage />
					</PrivateRoute>
				} />


				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<Registerpage />} />
				<Route path="*" element={<p>404!!!</p>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;