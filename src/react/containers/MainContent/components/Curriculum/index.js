import React from "react";

import * as S from './styled.js';

import cv from '../../../../public/LUCAS C.V.pdf';

const Curriculum = () => {

	return (
		<S.CurriculumWrapper>
			<S.CurriculumTitle>Algumas informações do meu currículo</S.CurriculumTitle>
			<S.CurriculumContent><strong>Experiências profissionais</strong></S.CurriculumContent>
			<ul>
				<li><strong>Enext Consultoria de E-commerce -</strong> <em>Estagiário Front-End VTEX</em></li>
				<caption><u>Março de 2021 - Novembro de 2021</u></caption>
				<li><strong>Enext Consultoria de E-commerce -</strong> <em>Desenvolvedor Front-End VTEX Jr.</em></li>
				<caption><u>Novembro de 2021 - Maio de 2022</u></caption>
				<li><strong>Maeztra Soluções em Operações Online -</strong> <em>Desenvolvedor Especialista Front-End VTEX Jr.</em></li>
				<caption><u>Maio de 2022 - Julho de 2022</u></caption>
			</ul>
			<S.CurriculumContent>
				Em todas as experiências tive amplo contato com <u>VTEX CMS</u>, <u>ESLint</u>, <u>jQuery</u> e <u>React.js</u>.
				Minhas competências eram trabalhar na evolução dos projetos, implementar melhorias, correção de bugs, criação de landing pages.
			</S.CurriculumContent>
			<S.CurriculumContent><strong>Alguns projetos que tive contato</strong></S.CurriculumContent>
			<ul>
				<li><strong>Avon - </strong><em>CMS (jQuery)</em></li>
				<li><strong>Avon - </strong><em>FastStore (React.ts)</em></li>
				<li><strong>Lancôme - </strong><em>CMS (jQuery)</em></li>
				<li><strong>DermaClub - </strong><em>CMS (React.js)</em></li>
				<li><strong>Segredos de Salão (B2B, B2C) - </strong><em>CMS (React.js)</em></li>
			</ul>
			<S.CurriculumContent><strong>Alguns projetos pessoais</strong></S.CurriculumContent>
			<ul>
				<li><strong>MonkeyBrain - </strong><em>Bot do Discord (Node.js, Discord.js, ESLint, Mongoose, Heroku)</em></li>
				<li><strong>MonkeyDJ - </strong><em>Bot do Discord (Node.js, Discord.js, ESLint, discord-player)</em></li>
			</ul>
			<S.CurriculumDownload href={cv} download="Currículo-Lucas_Henrique_Borzani.pdf" target="_blank">Baixar Currículo</S.CurriculumDownload>
		</S.CurriculumWrapper>
	)

}

export default Curriculum;