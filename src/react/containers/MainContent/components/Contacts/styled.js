import styled from "styled-components";

import rem from "../../../../functions/rem";

export const ContactsWrapper = styled.section`
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

export const ContactsTitle = styled.h2`
	text-decoration: underline #fff 1px;
	@media (max-width: 789px) {
		margin-top: 40px;
		font-size: ${rem(24)};
	}
`;

export const ContactsContent = styled.p`
	text-indent: ${rem(10)};
	font-size: ${rem(16)};
	text-align: justify;
	margin: 10px 10px;
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;

export const ContactsButtonWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 789px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ContactsButton = styled.a`
	display: flex;
	width: max-content;
	background: #4D3A81;
	border-radius: 5px;
	border: 2px solid;
	margin: 15px;
	padding: 10px 15px;
	cursor: pointer;
	transition: 0.3s;
	font-size: ${rem(16)};
	text-decoration: none;
	:hover {
		box-shadow: 0 0 5px 2px #fff;
	}

	&#github {
		:hover{
			background: #181717;
		}
	}

	&#linkedin {
		:hover{
			background: #0A66C2;
		}
	}

	&#gmail {
		:hover{
			background: #EA4335;
		}
	}

	&#whatsapp {
		:hover{
			background: #25D366;
		}
	}
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;

export const ContactsIcon = styled.img`
	width: 25px;
	height: 25px;
	margin-right: 10px;
`;