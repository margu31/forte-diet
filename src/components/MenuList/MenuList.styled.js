import styled, { css } from 'styled-components';

const StyledMenuList = styled.div`
  display: inline-block;
  min-height: 340px;
  max-width: 900px;
  border: none;
  ${({ theme }) => css`
    border-left: 4px solid ${theme.themeBrightGray};
  `}
  margin-left: 17%; /* 왼쪽 nav 179px */
  margin-top: 120px; /* 위쪽 nav 94px */
  margin-bottom: 128px;
  padding: 24px 52px 27px 52px;
  box-sizing: border-box;
  position: relative;
  cursor: default;

  & + & {
    margin-top: 14px;
    margin-bottom: 128px;
  }
`;

export { StyledMenuList };
