import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import Todo from './components/Todo';

function App() {
	return (
		<div className="App">
			<Grid container spacing={2} style={{ 'text-align': 'center' }}>
				<Grid xs={4}>
					<Todo />
				</Grid>
				<Grid xs={8}></Grid>
			</Grid>
		</div>
	);
}

export default App;
