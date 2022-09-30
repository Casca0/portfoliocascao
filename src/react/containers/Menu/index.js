import React, { useContext } from "react";
import { PageContext } from "../../pages/app.js";

import * as S from './styled.js';

const Menu = () => {

	const { page, setPage } = useContext(PageContext);

	const selectedStyle = {
		background: '#1A2653',
		boxShadow: '0 0 5px 2px #fff',
	}

	return (
		<S.MenuWrapper>
			<S.MenuImage src="https://pps.whatsapp.net/v/t61.24694-24/295170978_164008842947898_457714406726257586_n.jpg?ccb=11-4&oh=01_AVy2ks2e6q3cnTBp5mde2WZqKz_YgG8DNFLfteNAuJGP4w&oe=6341BFB5" alt="Foto de perfil" title="Foto de perfil"/>
			<S.MenuName>Seja Bem-vindo(a)!</S.MenuName>
			<br />
			<S.MenuContent>Me chamo Lucas, e esse é meu portfólio!</S.MenuContent>
			<S.MenuNav>
				<ul>
					<li><button style={page === 'Sobre' ? selectedStyle : {}} type="button" onClick={() => setPage('Sobre')}>Sobre</button></li>
					<li><button style={page === 'Currículo' ? selectedStyle : {}} type="button" onClick={() => setPage('Currículo')}>Currículo</button></li>
					<li><button style={page === 'Contatos' ? selectedStyle : {}} type="button" onClick={() => setPage('Contatos')}>Contatos</button></li>
				</ul>
			</S.MenuNav>
		</S.MenuWrapper>
	);
}

export default Menu;