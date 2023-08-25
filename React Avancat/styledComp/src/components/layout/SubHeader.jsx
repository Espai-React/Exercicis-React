import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../styles/index";

const SubHeaderStyled = styled.div`
  padding: 4em;
  background-color: ${colors.main};

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : "lightgreen"};
  }
`;

const SubHeader = ({ ...props }) => <SubHeaderStyled {...props} />;

SubHeader.propTypes = { className: PropTypes.string };

export default styled(SubHeader)``;
