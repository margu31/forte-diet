import styled, { css } from 'styled-components';
import { Button, Input } from 'components';
import { fontSizeKit, fontWeightKit, palette } from 'styles';

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 20px; */
  /* padding-bottom: 25px; */
  width: 500px;
  min-height: 400px;
  position: relative;
  border-radius: 20px;
  border: 3px solid;
  border-color: ${palette.themePrimary};
  background-color: ${palette.themeBright};

  h3 {
    position: absolute;
    top: 0;
    left: 5%;
  }

  span {
    ${({ theme }) => css`
      color: ${theme.themePrimary};
    `}
    font-size: 4rem;
    margin: 50px 0;
  }

  div {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-top: 30px;
  }

  p {
    margin-top: 10px;
    font-size: ${fontSizeKit.large};
  }
`;

export const LoginFormInput = styled(Input)`
  position: relative;
  width: 300px;
  height: 50px;
  border-radius: 0;
  /* padding-left: 3rem; */
  margin: 0;
  border: 0;
  border-bottom: 2px solid ${palette.themePrimary};
  text-align: center;

  background-color: transparent;
  outline: none;
  color: ${palette.themeDefault};

  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.bold};

  &::placeholder {
    color: ${palette.themeDefault};
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.bold};
  }

  p {
    position: absolute;
    top: 100%;
    left: 10%;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }

  button {
    position: absolute;
    right: 0;
    top: 25%;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${palette.themeSecondary};
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;

export const LoginFormSubmitButton = styled(Button)`
  background-color: ${palette.themeDefaultWhite};
  border-radius: 50px;
  border: none;
  height: 50px;
  margin-top: 50px;
  cursor: pointer;
  font-size: ${fontSizeKit.medium};
  margin-bottom: 0;
  border: 3px solid;
  border-color: ${palette.themePrimary};

  &:disabled {
    cursor: not-allowed;
  }

  && + button {
    background-color: transparent;
    color: ${palette.themeDark};
    margin-left: 0;
  }
`;

export const LoginFormCloseButton = styled(Button)`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 17px 0 0;
  height: 50px;
  width: 50px;
  background-color: transparent;
  color: ${palette.themeDefault};
  font-size: ${fontSizeKit.extraBold};
  border: 0;
  :hover {
    border-radius: 0 17px 0 0;
  }
`;
