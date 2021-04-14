import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  /* border: 0; */
  /* background-color: transparent; */

  font-family: Chungchunsidae;
  font-size: 1.3rem;
  display: inline-block;
  background-color: rgba(159, 159, 159, 0.2);
  width: 100px;
  height: 30px;
  line-height: 30px;
  outline: none;
  border: none;
  color: #14182c;
  border-radius: 5px;
  cursor: pointer;

  & + & {
    margin-left: 20px;
    background-color: rgba(243, 179, 76, 0.2);
    color: #f26830;
  }
`;
