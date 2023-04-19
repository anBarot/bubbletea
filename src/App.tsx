import './App.css';
import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Cup from "./components/Cup"
import Name from "./components/Name"
import Gelée from "./components/Gelée"
import Tea from "./components/Tea"
import Size from "./components/Size"
import Bubbletea from './components/Bubbletea';

function AppStack(props: {name: string, component: any}) {

	return (
		<Stack direction="row" justifyContent={'space-between'}>
			<h2>{props.name}</h2>{props.component}
		</Stack>
	); 

}

export default function App() {

	return (
		<Box id="app-box">
			<Stack direction="row" id="svg-selector">
				<Box id="bubbletea">
					<Stack spacing={5}>
						<h1>name</h1>
						<Bubbletea />
					</Stack>
				</Box>
				<Box id="selector">
					<Stack spacing={10} id="selector-stack">
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
