import styled from 'styled-components';
import { palette, fontSizeKit } from 'styles';
import Button from 'components/Button/Button';

export const StyledUserBarWrapper = styled.section`
  position: absolute;
  top: 3rem;
  right: 3rem;
  padding: 1rem;
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const StyledLi = styled.li`
  & + & {
    margin-left: 1rem;
  }
`;

export const StyledButton = styled(Button)`
  color: ${palette.themeDefaultWhite};
  padding: 1rem 2rem;
  background-color: transparent;
  font-size: ${fontSizeKit.small};

  &:hover {
    background-color: ${palette.themePrimary};
  }
`;
