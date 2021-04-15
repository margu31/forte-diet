import styled, { css } from 'styled-components';
import { palette } from 'styles';

const StyledHealthBar = styled.div`
  width: 200px;
  height: 400px;
  ${({ theme }) => css`
    border: 4px solid ${theme.themeSecondary};
  `}
  border-radius: 10px;
  position: fixed;
  top: 150px;
  right: 10px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  font-size: 1.3rem;
  padding: 10px;

  h2 {
    border-bottom: 1px solid red;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  div {
    display: flex;
    flex-flow: column nowrap;

    h3 {
      border: 1px solid purple;
    }

    span {
      border: 1px solid red;
    }
  }
`;

export { StyledHealthBar, StyledContainer };
