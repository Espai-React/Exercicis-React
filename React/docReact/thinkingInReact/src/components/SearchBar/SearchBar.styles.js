import styled from "styled-components";

export const Formulari = styled.div`	
	display: flex;
	flex-direction: column;
	gap: 10px;

	> input {
		padding: 2px 5px;
		border: 2px solid darkcyan;
		border-radius: 5px;
	}

	> label {
		display: flex;
		align-items: center;
		gap: 8px;

		> input {
			position: relative;
			appearance: none;
			min-width: 18px;
			height: 18px;
			border: 2px solid darkcyan;
			border-radius: 5px;

			&:checked::after {
				position: absolute;
				bottom: -0.2rem;
				content: "✔";
				font-size: 1.3rem;
				overflow: hidden;
			}
		}
	}
`;
