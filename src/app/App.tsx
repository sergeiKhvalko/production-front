import "./styles/index.scss";
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Elipses from "./Elipses/Elipses";
import { useTheme } from "@/shared/contexts";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { cn } from "@/shared/lib/cn/cn";

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
					<Route path={"/"} element={<MainPage />} />
					<Route path={"/about"} element={<AboutPage />} />
				</Routes>
			</Suspense>

			
		</div>
	)
}

export default App;