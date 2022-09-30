import styled from "styled-components";

import rem from "../../../../functions/rem";

export const AboutMeWrapper = styled.section`
	overflow-y: auto;
	height: ${rem(530)};
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 3px 3px #4B666B;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb {
		background: #784284;
		border-radius: 10px;
	}
`;

export const AboutMeTitle = styled.h2`
	text-decoration: underline #fff 1px;
`;

export const AboutMeContent = styled.p`
	text-indent: ${rem(10)};
	font-size: ${rem(17)};
	text-align: justify;
	margin: 10px 10px;
`;