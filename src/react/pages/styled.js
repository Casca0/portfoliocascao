import { createGlobalStyle } from 'styled-components';
import rem from '../functions/rem';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

	* {
		color: #fff;
		font-family: 'Poppins', sans-serif;
	}

	body {
		height: 100%;
		background: linear-gradient(#2F3939, #1E2852, #182141) fixed;
		margin: 0;
		user-select: none;
	}

	#root {
		margin-top: ${rem(50)};
		display: flex;
		justify-content: center;
	}
`;

export default GlobalStyle;