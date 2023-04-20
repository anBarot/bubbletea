import './App.css';
import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Cup from "./components/Cup"
import Name from "./components/Name"
import Jelly from "./components/Jelly"
import Tea from "./components/Tea"
import Size from "./components/Size"
import BubbleTea from './components/Bubbletea';

function AppStack(props: {name: string, component: JSX.Element}) {

	return (
		<Stack direction="row" justifyContent={'space-between'}>
			<h2>{props.name}</h2>{props.component}
		</Stack>
	); 

}

export default function App() {
	const [size, setSize] = useState<number>(5);

	return (
		<Box id="app-box">
			<Stack direction="row" id="svg-selector">
				<Box id="bubbletea">
					<Stack spacing={5}>
						<h1>name</h1>
						<BubbleTea/>
					</Stack>
				</Box>
				<Box id="selector">
					<Stack spacing={10} id="selector-stack">
						<AppStack name={"NOM"} component={<Name />}/>
						<AppStack name={"GOBELET"} component={<Cup />}/>
						<AppStack name={"THÉ"} component={<Tea />}/>
						<AppStack name={"Gelée"} component={<Jelly />}/>
						<AppStack name={"TAILLE"} component={<Size />}/>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}
