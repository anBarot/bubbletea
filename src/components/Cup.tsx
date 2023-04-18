import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Bubbleblue from '../images/bubbletea_blue.png'
import Bubblegreen from '../images/bubbletea_green.png'
import Bubblefuschia from '../images/bubbletea_fuschia.png'

export default function Cup() {
	const [view, setView] = React.useState('list');

	const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
		setView(nextView);
	};

	return (
		<div id="cup">
			<button>
				<img src={Bubbleblue}/>
			</button>
			<button>
				<img src={Bubblegreen}/>
			</button>
			<button>
				<img src={Bubblefuschia}/>
			</button>
		</div>
  );
}