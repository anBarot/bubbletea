import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import Blacktea from '../images/blacktea.png'
import Greentea from '../images/greentea.png'

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
				<Tooltip title='thé noir' placement='top'>
					<ToggleButton value="black"><img src={Blacktea}/></ToggleButton>
				</Tooltip>
				<Tooltip title='thé vert' placement='top'>
					<ToggleButton value="green"><img src={Greentea}/></ToggleButton>
				</Tooltip>
			</ToggleButtonGroup>
		</div>
  );
}
