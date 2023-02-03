import { render } from 'react-dom';
import App from '@/app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/shared/contexts';

render(
	<Router>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Router>
	,
	document.getElementById("root")
)