import './App.css';
import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import Cup from "./components/Cup"
import Name from "./components/Name"
import Tapioca from "./components/Tapioca"
import Tea from "./components/Tea"
import Size from "./components/Size"


export default function App() {
	
	return (
		<Box>
    		<Grid2 container spacing={5}>
				<Grid2 xs={6}>
				</Grid2>
				<Grid2 xs={2}>
					<h1>NOM</h1> 
					<h1>GOBELET</h1>
					<h1>THÉ</h1>
					<h1>TAPIOCA</h1>
					<h1>TAILLE</h1>
				</Grid2>
				<Grid2 xs={2}>
					< Name />
					< Cup/>
					< Tea/>
					< Tapioca/>
					< Size/>
				</Grid2>
    		</Grid2>
		</Box>
	);
}
