import styled from "styled-components";

export const Contenidor = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	justify-content: center;
	align-items: center;
	border: 1px solid blue;
	padding: 10px;
	gap: 15px;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.verd {
		color: green;
	}

	.vermell {
		color: red;
	}

	> button {
		width: 25%;
	}
`;
