import styled from 'styled-components';

// import rem from '../../functions/rem';

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	position: relative;
	top: 13.5vh;
	background-color: #823982;
	width: 100%;
	text-align: center;
	@media (max-width: 789px) {
		top: 4.5vh;
	}
`;

export const FooterText = styled.p`
	margin: 16px 15px;
`;
