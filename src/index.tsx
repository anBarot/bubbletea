import { createRoot } from 'react-dom/client';
import React, {useState} from 'react';
import App from './App';

// const SizeContext = React.createContext(5);

// function SizeProvider(props: any) {
// 	const [size, setSize] = useState(5);
  
// 	return (
// 	  	<SizeContext.Provider value={{ size, setSize }}>
// 			{props.children}
// 	 	</SizeContext.Provider>
// 	);
// }

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
