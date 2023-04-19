import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import Bubbleblue from '../images/bubbletea_blue.png'
import Bubblegreen from '../images/bubbletea_green.png'
import Bubblefuschia from '../images/bubbletea_fuschia.png'

export default function Tea() {
	const [view, setView] = React.useState('list');
	const [alignment, setAlignment] = React.useState('web');

	const handleChange = (
	  event: React.MouseEvent<HTMLElement>,
	  newAlignment: string,
	) => {
	  setAlignment(newAlignment);
	};

	return (
		<div id="cup">
			<ToggleButtonGroup
      			color="primary"
      			value={alignment}
      			exclusive
      			onChange={handleChange}
      			aria-label="Platform"
    		>
				<Tooltip title='bleue' placement='top'>
					<ToggleButton value="blue"><img src={Bubbleblue}/></ToggleButton>
				</Tooltip>
				<Tooltip title='vert' placement='top'>
					<ToggleButton value="green"><img src={Bubblegreen}/></ToggleButton>
				</Tooltip>
				<Tooltip title='fuschia' placement='top'>
					<ToggleButton value="fuschia"><img src={Bubblefuschia}/></ToggleButton>
				</Tooltip>
			</ToggleButtonGroup>
		</div>
  );
}
