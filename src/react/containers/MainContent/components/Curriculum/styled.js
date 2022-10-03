import styled from "styled-components";

import rem from "../../../../functions/rem.js";

export const CurriculumWrapper = styled.section`
	overflow-y: auto;
	height: 70vh;
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
	ul {
		li {
			width: max-content;
			margin-top: 15px;
			@media (max-width: 789px) {
				width: fit-content;
				font-size: ${rem(18)};
			}
		}
		p {
			margin: 0;
			@media (max-width: 789px) {
				font-size: ${rem(17)};
			}
		}
		@media (max-width: 789px) {
			padding-left: 20px;
		}
	}
	@media (max-width: 789px) {
		height: 85vh;
	}
`;

export const CurriculumTitle = styled.h2`
	text-decoration: underline #fff 1px;
	margin-top: 0;
	@media (max-width: 789px) {
		font-size: ${rem(24)};
	}
`;

export const CurriculumContent = styled.p`
	text-indent: ${rem(10)};
	font-size: ${rem(16)};
	text-align: justify;
	margin: 10px 10px;
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;

export const CurriculumDownload = styled.a`
	display: block;
	width: max-content;
	background: #4D3A81;
	border-radius: 5px;
	border: 2px solid;
	margin: 10px;
	padding: 10px 15px;
	cursor: pointer;
	transition: 0.3s;
	font-size: ${rem(16)};
	text-decoration: none;
	:hover {
		background: #1A2653;
		box-shadow: 0 0 5px 2px #fff;
	}
	@media (max-width: 789px) {
		font-size: ${rem(20)};
	}
`;