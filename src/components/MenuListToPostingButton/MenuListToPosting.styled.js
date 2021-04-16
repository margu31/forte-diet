import styled, { css } from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';

const StyledPlusButton = styled(HiOutlinePlus)`
  padding: 10px;
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  ${({ theme }) => css`
    color: ${theme.themeDark};
    background-color: ${theme.themePrimary};
  `}
  border-radius: 50%;
  box-shadow: 0 1px 6px 0;
  position: fixed;
  bottom: 59px;
  right: 57px;
  cursor: pointer;
`;

export { StyledPlusButton };
