import styled from "styled-components";

export const NameColor = styled.td`
	color: ${({ stocked }) => (stocked ? "inherit" : "crimson")};
`;
