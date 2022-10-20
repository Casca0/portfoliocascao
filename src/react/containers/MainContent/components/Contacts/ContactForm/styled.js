import styled from 'styled-components';

import rem from '../../../../../functions/rem';

import loadingGif from '../../../../../public/loading.gif';

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: max-content;
`;

export const FormInput = styled.input`
	color: #000;
	font-size: ${rem(15)};
	width: 15vw;
	border-radius: 5px;
	padding: 5px;
	border-style: none;
	:focus-visible {
		outline: none;
	}
	@media (max-width: 789px) {
		width: 78vw;
	}
`;

export const FormLabel = styled.label`
	font-size: ${rem(18)};
	margin: 15px 0;
`;

export const FormSubmit = styled.input`
	background: #4D3A81;
	width: 5vw;
	font-size: ${rem(18)};
	padding: 5px 10px 5px 10px;
	margin-top: 15px;
	margin-bottom: 15px;
	border-radius: 5px;
	border: 2px solid #fff;
	text-align: center;
	align-self: center;
	cursor: pointer;
	transition: 0.3s;
	:hover {
		background: #1A2653;
		box-shadow: 0 0 5px #fff;
	}
	@media (max-width: 789px) {
		font-size: ${rem(20)};
		width: 20vw;
	}
`;

export const FormText = styled.textarea`
	color: #000;
	font-size: ${rem(16)};
	resize: none;
	border-radius: 5px;
	padding: 5px;
	width: 30vw;
	height: 20vh;
	:focus-visible {
		outline: none;
	}
	@media (max-width: 789px) {
		width: 78vw;
	}
`;

export const FormLoading = styled.div`
	background: url(${loadingGif});
	background-size: cover;
	width: 30px;
	height: 30px;
	margin-left: auto;
	margin-right: auto;
`;

export const FormSuccessWrapper = styled.div`
	background: #77dd77;
	border: solid 2px #fff;
	border-radius: 5px;
	width: max-content;
	padding: 0 15px;
	margin-top: 15px;
	margin-left: auto;
	margin-right: auto;
	width: 30vw;
	@media (max-width: 789px) {
		width: 50vw;
	}
`;

export const FormFailedWrapper = styled.div`
	background: #ff6961;
	border: solid 2px #fff;
	border-radius: 5px;
	width: max-content;
	padding: 0 15px;
	margin-top: 15px;
	margin-right: auto;
	margin-left: auto;
	width: 30vw;
	@media (max-width: 789px) {
		width: 50vw;
	}
`;

export const FormStatusContent = styled.p`
	text-align: center;
`;
