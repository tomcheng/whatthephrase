import styled from "styled-components";

const TouchButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: none;
  cursor: pointer;
  padding: 0 20px;
  border: ${ props => props.borderless ? "none" : "1px solid " + props.theme.secondary };
  text-transform: inherit;
  font: inherit;
  ${ props => props.icon ? "font-family: FontAwesome;" : "" }

  &:active {
    background-color: ${props => props.theme.highlight};
  }
`;

export default TouchButton;
