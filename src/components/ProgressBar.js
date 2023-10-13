import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
	linearProgressClasses,
} from '@mui/material/LinearProgress';

export default function ProgressBar({ completed, paused }) {
	const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
		height: 10,
		borderRadius: 5,
		width: '90%',
		margin: '0px auto',

		[`&.${linearProgressClasses.colorPrimary}`]: {
			backgroundColor: 'grey',
		},
		[`& .${linearProgressClasses.bar}`]: {
			backgroundColor:
				theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
		},
		[`& .${linearProgressClasses.bar2Buffer}`]: {
			backgroundColor: '#fce351',
		},
		[`& .${linearProgressClasses.dashed}`]: {
			display: 'none',
		},
		[`& .${linearProgressClasses.barColorPrimary}`]: {
			backgroundColor: '#4ee89e',
		},
	}));

	return (
		<BorderLinearProgress
			variant="buffer"
			value={completed * 100}
			valueBuffer={paused * 100}
		/>
	);
}
