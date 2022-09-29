import React, { useContext } from "react";
import { PageContext } from "../../pages/app.js";

import * as S from './styled.js';

const AboutMe = () => {

	const { setPage } = useContext(PageContext);

	return (
		<S.AboutMeWrapper>
			<S.AboutMeImage src="https://pps.whatsapp.net/v/t61.24694-24/295170978_164008842947898_457714406726257586_n.jpg?ccb=11-4&oh=01_AVy2ks2e6q3cnTBp5mde2WZqKz_YgG8DNFLfteNAuJGP4w&oe=6341BFB5" alt="Foto de perfil" title="Foto de perfil"/>
			<S.AboutMeName>Lucas Henrique Borzani</S.AboutMeName>
			<S.AboutMeContent>20 anos</S.AboutMeContent>
			<S.AboutMeNav>
				<ul>
					<li><button type="button" onClick={() => setPage('Sobre')}>Sobre</button></li>
					<li><button type="button" onClick={() => setPage('Currículo')}>Currículo</button></li>
					<li><button type="button" onClick={() => setPage('Contatos')}>Contatos</button></li>
					<li><button type="button" onClick={() => setPage('')}>Reset</button></li>
				</ul>
			</S.AboutMeNav>
		</S.AboutMeWrapper>
	);
}

export default AboutMe;