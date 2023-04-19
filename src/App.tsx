import './App.css';
import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import Cup from "./components/Cup"
import Name from "./components/Name"
import Gelée from "./components/Gelée"
import Tea from "./components/Tea"
import Size from "./components/Size"

function AppStack(props: {name: string, component: any}) {

	return (
		<Stack direction="row" justifyContent={'space-between'}>
			<h1>{props.name}</h1>{props.component}
		</Stack>
	); 

}

export default function App() {
	
	return (
		<Box id="app-box">
			<Stack direction="row" id="svg-selector">
				<Box id="svg">
					<Box id="svg-up">
					</Box>
					<Box id="svg-down">
					</Box>
				</Box>
				<Box id="selector">
					<Stack spacing={10}>
						<AppStack name={"NOM"} component={<Name />}/>
						<AppStack name={"GOBELET"} component={<Cup />}/>
						<AppStack name={"THÉ"} component={<Tea />}/>
						<AppStack name={"Gelée"} component={<Gelée />}/>
						<AppStack name={"TAILLE"} component={<Size />}/>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}
