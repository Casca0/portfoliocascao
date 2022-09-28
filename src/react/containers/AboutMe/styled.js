import styled from "styled-components";
import rem from "../../functions/rem";

export const AboutMeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	background: #4D3A81;
	width: ${rem(200)};
	height: max-content;
	padding: ${rem(15)};
	border-radius: 5px;
	box-shadow: 0 0 20px 5px #4B666B;
	margin-top: 50%;
`;

export const AboutMeImage = styled.img`
	width: ${rem(150)};
	height: ${rem(150)};
	border-radius: 50%;
	box-shadow: 0 0 5px #fff;
`;

export const AboutMeName = styled.span`
	width: max-content;
	height: max-content;
	background: #4D3A81;
	margin-top: ${rem(8)};
	font-weight: 500;
	font-size: ${rem(16)};
`;

export const AboutMeContent = styled.span`
	width: max-content;
	height: max-content;
	background: #4D3A81;
`;


export const AboutMeNav = styled.nav`
	ul {
		list-style: none;
		background: #4D3A81;
		padding: 10px 0;
		text-align: center;
		li {
			display: block;
			background: #4D3A81;
			border-radius: 5px;
			border: 2px solid;
			padding: 5px;
			margin: 10px 0;
			cursor: pointer;
			transition: 0.3s; 
			:hover {
				background: #1A2653;
				box-shadow: 0 0 5px 2px #fff;
			}
		}
	}
`;