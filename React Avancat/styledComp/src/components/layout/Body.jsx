import SubHeader from "./SubHeader";
import styled from "styled-components";

const BodyStyled = styled.div`
  display: flex;

  ${SubHeader} {
    border: 2px solid black;
  }
`;

const Body = () => {
  return (
    <BodyStyled>
      <SubHeader/>
    </BodyStyled>
  );
};

export default Body;
