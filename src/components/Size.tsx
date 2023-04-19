import React from 'react'
import Slider from '@mui/material/Slider'

export default function Size() {

	return (
		<div id="slider">
			<Slider
				aria-label="slider-size"
				defaultValue={5}
				step={1}
				marks
				min={0}
				max={10}
				valueLabelDisplay="on"
				size="medium"
			/>
		</div>
	);
}