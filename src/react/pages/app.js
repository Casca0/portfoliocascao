import React, { useState, createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import GlobalStyle from './styled';

import Menu from '../containers/Menu';
import MainContent from '../containers/MainContent';
import Footer from '../containers/Footer';

export const PageContext = createContext({});
export const ResponsiveContext = createContext({});

const App = () => {
	const [page, setPage] = useState('');

	const isMobile = useMediaQuery({ maxWidth: '789px' });
	const isDesktop = useMediaQuery({ minWidth: '789px' });

	return (
		<PageContext.Provider value={{page, setPage}}>
			<ResponsiveContext.Provider value={{isMobile, isDesktop}}>
				<GlobalStyle />
				<div className='main-block'>
					<Menu />
					<MainContent />
				</div>
				<Footer />
			</ResponsiveContext.Provider>
		</PageContext.Provider>
	);
};

export default App;
