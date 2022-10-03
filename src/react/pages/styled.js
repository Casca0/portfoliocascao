import { createGlobalStyle } from 'styled-components';
import rem from '../functions/rem';

const GlobalStyle = createGlobalStyle`
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
		margin-top: ${rem(30)};
		display: flex;
		justify-content: center;
	}
`;

export default GlobalStyle;
