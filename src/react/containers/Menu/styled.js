import styled from "styled-components";
import rem from "../../functions/rem";

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	background: #4D3A81;
	width: 14vw;
	height: 74vh;
	padding: ${rem(15)};
	border-radius: 5px;
	box-shadow: 0 0 20px 5px #4B666B;
	@media (max-width: 789px) {
		width: 80vw;
		height: 80vh;
	}
`;

export const MenuImage = styled.img`
	width: 10vw;
	height: 20vh;
	border-radius: 50%;
	box-shadow: 0 0 5px #fff;
	object-fit: cover;
	@media (max-width: 789px) {
		width: 55vw;
		height: 25vh;
	}
`;

export const MenuName = styled.span`
	width: max-content;
	height: max-content;
	background: #4D3A81;
	margin-top: 8px;
	font-weight: 500;
	font-size: ${rem(17)};
	cursor: default;
	text-decoration: underline 1px #fff;
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;

export const MenuContent = styled.span`
	text-align: center;
	height: max-content;
	background: #4D3A81;
	cursor: default;
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;


export const MenuNav = styled.nav`
	margin-top: 15px;
	ul {
		list-style: none;
		background: #4D3A81;
		padding: 0;
		text-align: center;
		li {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #4D3A81;
			button {
				display: block;
				background: #4D3A81;
				border-radius: 5px;
				border: 2px solid;
				margin: 10px 0;
				padding: 10px 15px;
				width: 100%;
				cursor: pointer;
				transition: 0.3s;
				font-size: ${rem(16)};
				:hover {
					background: #1A2653;
					box-shadow: 0 0 5px 2px #fff;
				}
				@media (max-width: 789px) {
					font-size: ${rem(20)};
				}
			}
		}
	}
`;