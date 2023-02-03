import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import Elipses from "./components/Elipses/Elipses";
import { cn } from "./helpers/cn/cn";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={cn('app', [theme])}>
			<Elipses />
			<button onClick={toggleTheme}>TOGGLE</button>
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