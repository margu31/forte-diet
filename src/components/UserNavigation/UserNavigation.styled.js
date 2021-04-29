import styled from 'styled-components';
import { Button } from 'components';
import { palette, fontSizeKit, a11yHidden } from 'styles';

export const StyledUserBarWrapper = styled.section`
  position: absolute;
  top: 3rem;
  right: 3rem;
  padding: 1rem;
`;

export const UserNavigationHeading = styled.h3`
  ${a11yHidden()};
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
