import React from 'react';

import * as S from './styled.js';

const Footer = () => {
	return(
		<S.FooterWrapper>
			<S.FooterText>Desenvolvido por &#9775; <strong>Lucas Henrique Borzani</strong> &#9775;</S.FooterText>
			<S.FooterText>Todos direitos reservados &#169;</S.FooterText>
		</S.FooterWrapper>
	);
};

export default Footer;
