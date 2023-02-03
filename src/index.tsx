import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

render(
	<Router>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Router>
	,
	document.getElementById("root")
)