import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Tapioca from '../images/tapioca.png'
import Redbean from '../images/redbean.png'
import Natadecoco from '../images/natadecoco.png'


export default function Gelée() {
	const [view, setView] = React.useState('list');
	const [alignment, setAlignment] = React.useState('web');

	const handleChange = (
	  event: React.MouseEvent<HTMLElement>,
	  newAlignment: string,
	) => {
	  setAlignment(newAlignment);
	};

	return (
		<div id="jelly">
			<ToggleButtonGroup
      			color="primary"
      			value={alignment}
      			exclusive
      			onChange={handleChange}
      			aria-label="Platform"
    		>
				<Tooltip placement='top' title='tapioca'>
					<ToggleButton value="tapioca"><img src={Tapioca}/></ToggleButton>
				</Tooltip>
				<Tooltip placement='top' title='haricot rouge'>
					<ToggleButton value="redbean"><img src={Redbean}/></ToggleButton>
				</Tooltip>
				<Tooltip placement='top' title='coco'>
					<ToggleButton value="natadecoco"><img src={Natadecoco}/></ToggleButton>
				</Tooltip>
			</ToggleButtonGroup>
		</div>
	);
}
