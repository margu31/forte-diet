import styled from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';
import { palette } from 'styles';

const StyledPlusButton = styled(HiOutlinePlus)`
  padding: 10px;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  color: ${palette.themeDefault};
  background-color: ${palette.themeDefaultWhite};
  box-shadow: 1px 1px 8px ${palette.themeBrightGray};
  border-radius: 50%;
  position: fixed;
  bottom: 59px;
  right: 90px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background: ${palette.themeHover};
  }
`;

export { StyledPlusButton };
