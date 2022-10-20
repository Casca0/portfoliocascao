import { createGlobalStyle } from 'styled-components';
import rem from '../functions/rem';

const GlobalStyle = createGlobalStyle`
	* {
		color: #fff;
		font-family: 'Poppins', sans-serif;
	}

	body {
		height: 100%;
		background: #1e2852;
		margin: 0;
		user-select: none;
	}

	#root {
		display: flex;
		flex-direction: column;
	}

	.main-block {
		margin-top: ${rem(30)};
		display: flex;
		justify-content: center;
	}
`;

export default GlobalStyle;
