import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
	return (
		<div className="app">
			<Link to={"/"}>Main Page</Link>
			<Link to={"/about"}>About Page</Link>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/"} element={<MainPageAsync />} />
					<Route path={"/about"} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>

			
		</div>
	)
}

export default App;