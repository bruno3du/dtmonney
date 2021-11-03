/** @format */
import { Header } from './Header';
import { GlobalStyled } from './styles/global';
import { Dashboard } from './Dashboard';

export function App() {
	return (
		<>
			<GlobalStyled />
			<Header />
			<Dashboard />
		</>
	);
}

export default App;
