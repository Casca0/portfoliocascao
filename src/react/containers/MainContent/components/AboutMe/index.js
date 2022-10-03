import React from 'react';

import * as S from './styled.js';

const AboutMe = () => {

	return (
		<S.AboutMeWrapper>
			<S.AboutMeTitle>Um pouco sobre mim</S.AboutMeTitle>
			<S.AboutMeContent>
				Olá me chamo Lucas, mas muita gente me conhece também como Cascão, não é bem o que você está pensando!
				o apelido vem da semelhança física com o Cascão da Turma da Mônica Jovem não de que não tomo banho.
			</S.AboutMeContent>
			<S.AboutMeContent>
				Bem, falando um pouco sobre mim, tenho 20 anos, sou um desenvolvedor front-end, cursando Análise e Desenvolvimento de Sistemas
				na <u>Universidade Cruzeiro do Sul</u>, mas boa parte do meu conhecimento e experiência vem de projetos pessoais, pesquisas, interesse
				pela área mesmo, estudei muito por conta própria fora da faculdade.
			</S.AboutMeContent>
			<S.AboutMeContent>
				Fora isso, sou apaixonado por esportes, pratico vôlei nas horas vagas e matenho uma rotina indo para a academia. Gosto
				bastante dos meus projetos pessoais também, eles são uma forma de diversão para mim mas acabo aprendendo bastante com eles,
				tenho varios &quot;bots&quot; no <u>Discord</u> para usar no servidor que tenho com meus amigos, os bots são desenvolvidos usando
				principalmente <u>JavaScript</u>, um package do Node para interagir com a API do Discord <u>Discord.js</u>, tem também
				integração com banco de dados com o <u>MongoDB</u> através de outro package, o <u>Mongoose</u>. 
				Todos esses projetos estão presentes no meu GitHub!
			</S.AboutMeContent>
		</S.AboutMeWrapper>
	);

};

export default AboutMe;
