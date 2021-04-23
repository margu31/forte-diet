import styled from 'styled-components';
import { IoArrowUpOutline } from 'react-icons/io5';
import { palette } from 'styles';

const StyledTopButton = styled(IoArrowUpOutline)`
  padding: 12px;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  color: ${palette.themeDefault};
  background-color: ${palette.themeDefaultWhite};
  box-shadow: 1px 1px 8px ${palette.themeBrightGray};
  border-radius: 50%;
  position: fixed;
  bottom: 59px;
  right: 30px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background: ${palette.themeHover};
  }
`;

export { StyledTopButton };
