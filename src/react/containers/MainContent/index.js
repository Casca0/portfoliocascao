import React, { useContext } from "react";

import * as S from './styled.js';
import { PageContext } from "../../pages/app.js";
import rem from "../../functions/rem.js";

const MainContent = () => {
	const { page } = useContext(PageContext);

	const wrapperStyle = {
		display: 'block',
		height: rem(530),
		padding: page !== '' ? rem(15) : 0,
		width: page !== '' ? rem(800) : 0,
		boxShadow: page !== '' ? "0 0 15px 5px #4B666B" : "none",
		marginLeft: "20px",
		transition: "all 0.2s ease-in",
	};

	return (
		<S.MainWrapper style={wrapperStyle}></S.MainWrapper>
	)
}

export default MainContent;