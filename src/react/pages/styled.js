import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	
	* {
		margin: 0;
		color: #fff;
		background: linear-gradient(#2F3939, #182141) fixed;
		font-family: 'Poppins', sans-serif;
	}

	body {
		display: flex;
		justify-content: space-evenly;
	}
`;

export default GlobalStyle;