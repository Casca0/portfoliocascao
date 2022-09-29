import React, { useState, createContext } from "react";
import GlobalStyle from "./styled";

import AboutMe from "../containers/AboutMe";
import MainContent from "../containers/MainContent";

export const PageContext = createContext({});

const App = () => {
	const [page, setPage] = useState('');

	return (
		<PageContext.Provider value={{page, setPage}}>
			<GlobalStyle />
			<AboutMe />
			<MainContent />
		</PageContext.Provider>
	)
}

export default App;