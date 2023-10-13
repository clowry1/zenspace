import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';

import PauseIcon from '@mui/icons-material/Pause';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function TodoItem({ item, handleUpdate }) {
	return (
		<ListItem
			key={item.id}
			style={{
				paddingRight: '10px',
				paddingLeft: '10px',
				border: 'black solid 1px',
				borderRadius: '4px',
				marginBottom: '10px',
				backgroundColor: '#535353',
			}}
			secondaryAction={
				<div>
					<IconButton
						aria-label="delete"
						style={{ padding: '5px' }}
						id={item.id}
						onClick={() => handleUpdate('delete', item.id)}
					>
						<ClearIcon
							id={item.id}
							style={{
								color: '#fc5151',
								padding: '0px',
							}}
						/>
					</IconButton>
					<IconButton
						aria-label="pause"
						style={{ padding: '5px' }}
						id={item.id}
						onClick={() => handleUpdate('pause', item.id)}
					>
						{item.paused ? (
							<PlayArrowIcon style={{ color: '#fce351' }} />
						) : (
							<PauseIcon style={{ color: '#fce351' }} />
						)}
					</IconButton>
					<IconButton
						aria-label="complete"
						style={{ padding: '5px' }}
						onClick={() => handleUpdate('complete', item.id)}
					>
						<CheckIcon style={{ color: '#4ee89e' }} />
					</IconButton>
				</div>
			}
		>
			<ListItemText primary={item.name} />
		</ListItem>
	);
}

export default TodoItem;
