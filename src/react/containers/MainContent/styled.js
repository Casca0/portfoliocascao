import styled from "styled-components";
import rem from "../../functions/rem";

export const MainWrapper = styled.main`
	display: block;
	height: ${rem(530)};
	background: #4D3A81;
	border-radius: 5px;
	transition: all 0.2s ease-in;
`;

export const CloseButton = styled.button`
	background: unset;
	border: none;
	transition: all 0.2s ease-in;
	border-radius: 50%;
	cursor: pointer;
	position: absolute;
	right: ${rem(260)};
	top: ${rem(80)};
	padding: 5px 8px;
	:hover {
		box-shadow: 0 0 5px 2px #fff;
	}
`;

export const CloseButtonIcon = styled.img`
	width: ${rem(30)};
	height: ${rem(30)};
	display: block;
	margin: auto;
`;