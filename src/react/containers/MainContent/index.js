import React, { useContext } from "react";
import { PageContext } from "../../pages/app.js";
import rem from "../../functions/rem.js";

import * as S from './styled.js';
import AboutMe from "./components/AboutMe/index.js";
import Curriculum from "./components/Curriculum/index.js";
import Contacts from "./components/Contacts/index.js";

import closeIcon from "../../public/closeIcon.svg"

const MainContent = () => {
	const { page, setPage } = useContext(PageContext);

	const wrapperStyle = {
		marginLeft: page !== '' ? rem(20) : 0,
		padding: page !== '' ? rem(15) : 0,
		width: page !== '' ? rem(800) : 0,
		boxShadow: page !== '' ? "0 0 15px 5px #4B666B" : "none",
	};

	const buttonStyle = {
		display: page !== '' ? 'block' : 'none',
		opacity:  page !== '' ? 1 : 0,
	}

	return (
		<S.MainWrapper style={wrapperStyle}>
			<S.CloseButton type="button" style={buttonStyle} onClick={() => setPage('')}><S.CloseButtonIcon src={closeIcon} alt="Fechar"/></S.CloseButton>
			{page === 'Sobre' ? <AboutMe /> : ''}
			{page === 'Currículo' ? <Curriculum /> : ''}
			{page === 'Contatos' ? <Contacts /> : ''}
		</S.MainWrapper>
	)
}

export default MainContent;