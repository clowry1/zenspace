import { React, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import TodoItem from './TodoItem';

export default function Todo() {
	const [items, setItems] = useState([
		{
			name: 'Read book',
			complete: false,
			paused: false,
			id: 241,
		},
		{
			name: 'Grocery Shop',
			complete: false,
			paused: false,
			id: 999,
		},
	]);

	const [newItem, setNewItem] = useState('');

	const handleChange = (e) => {
		setNewItem(e.target.value);
	};

	const handleSubmit = () => {
		setItems([...items, { name: newItem, paused: false, complete: false }]);
		setNewItem('');
	};

	const handleUpdate = (type, itemId) => {
		switch (type) {
			case 'pause':
				togglePaused(itemId);
				break;
			case 'complete':
				markComplete(itemId);
				break;
			case 'delete':
				handleDelete(itemId);
				break;
			default:
				return;
		}
	};

	// Function to toggle the 'paused' status of a specific item
	const togglePaused = (itemId) => {
		const updatedItems = items.map((item) => {
			if (item.id === itemId) {
				return {
					...item,
					paused: !item.paused,
				};
			}
			return item;
		});
		setItems(updatedItems);
	};

	const handleDelete = (itemId) => {
		setItems(items.filter((item) => item.id !== itemId));
	};

	// Function to mark a todo as complete
	const markComplete = (itemId) => {
		const updatedItems = items.map((item) => {
			if (item.id === itemId) {
				return {
					...item,
					complete: true,
				};
			}
			return item;
		});

		setItems(updatedItems);
	};

	return (
		<Grid container spacing={0} minHeight={160} direction="column">
			<Grid item justifyContent="center" alignItems="center">
				<h1>ToDo App</h1>
				<FormControl
					sx={{ m: 1, width: '25ch' }}
					variant="outlined"
					style={{ width: '90%' }}
				>
					<OutlinedInput
						id="outlined-adornment-password"
						type={'text'}
						onChange={handleChange}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="submit"
									edge="end"
									style={{ color: '#fff' }}
									onClick={handleSubmit}
								>
									<AddIcon style={{ fontSize: '30px' }} />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Grid>
			<Grid
				item
				justifyContent="center"
				alignSelf="center"
				style={{ width: '90%' }}
			>
				<List>
					{items.map((item) => {
						return (
							<TodoItem
								key={item.id}
								item={item}
								handleUpdate={handleUpdate}
							/>
						);
					})}
				</List>
			</Grid>
		</Grid>
	);
}
