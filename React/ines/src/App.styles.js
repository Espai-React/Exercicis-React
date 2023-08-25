import styled from "styled-components";

export const Contenidor = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid orange;
	color: brown;
	margin: 20px;
	padding: 20px;
	gap: 15px;

	> p{
		text-align: center;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
`;
