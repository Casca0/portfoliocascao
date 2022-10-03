import React from 'react';

import * as S from './styled.js';

import GitHubIcon from '../../../../public/github.svg';
import LinkedInIcon from '../../../../public/linkedin.svg';
import GMailIcon from '../../../../public/gmail.svg';
import WhatsAppIcon from '../../../../public/whatsapp.svg';

const Contacts = () => {

	return (
		<S.ContactsWrapper>
			<S.ContactsTitle>Meus Contatos</S.ContactsTitle>
			<S.ContactsContent>Segue uma lista dos meus contatos e redes sociais!</S.ContactsContent>
			<S.ContactsButtonWrapper>
				<S.ContactsButton id="github" target="_blank" href="https://github.com/Casca0">
					<S.ContactsIcon src={GitHubIcon} alt="GitHub"/>GitHub
				</S.ContactsButton>
				<S.ContactsButton id="linkedin" target="_blank" href="https://www.linkedin.com/in/lucas-borzani-a56770189/">
					<S.ContactsIcon src={LinkedInIcon} alt="LinkedIn"/>LinkedIn
				</S.ContactsButton>
				<S.ContactsButton id="gmail" href="mailto:lucashborzani@gmail.com">
					<S.ContactsIcon src={GMailIcon} alt="GMail"/>GMail
				</S.ContactsButton>
				<S.ContactsButton id="whatsapp" target="_blank" href="https://wa.me/55011933357417">
					<S.ContactsIcon src={WhatsAppIcon} alt="WhatsApp" />WhatsApp
				</S.ContactsButton>
			</S.ContactsButtonWrapper>
		</S.ContactsWrapper>
	);

};

export default Contacts;
