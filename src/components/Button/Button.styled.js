import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  border: 0;
  background-color: transparent;
`;
