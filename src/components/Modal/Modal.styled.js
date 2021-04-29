import styled from 'styled-components';
import { palette } from 'styles';

// border-top: 0.4rem solid ${palette.themePrimary};

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/login-bg.jpg');
  /* background-color: ${palette.themeDark}; */
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
