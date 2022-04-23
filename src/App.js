import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/Container.styled';
import { Card } from './components/Card';

const theme = {
	colors: {
		header: '#fff',
		body: '#82C0DB',
		card: '#C4C4C4',
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Container>
					<Card />
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
