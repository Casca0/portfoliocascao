import React, { useContext, useEffect, useState } from "react";
import { PageContext, ResponsiveContext } from "../../pages/app.js";

import * as S from './styled.js';

import fotoPerfil from '../../public/fotoPerfil.jpeg';

const Menu = () => {

	const { page, setPage } = useContext(PageContext);
	const { isMobile } = useContext(ResponsiveContext)

	const [ style, setStyle ] = useState({});

	const selectedStyle = {
		background: '#1A2653',
		boxShadow: '0 0 5px 2px #fff',
	}


	useEffect(() => {
		if (isMobile && page !== '') {
			setStyle({
				display: 'none',
			})
		} else {
			setStyle({
				display: 'flex',
			})
		}
	}, [isMobile, page]);

	return (
		<S.MenuWrapper style={style}>
			<S.MenuImage src={fotoPerfil} alt="Foto de perfil" title="Foto de perfil"/>
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