import styled, { css } from 'styled-components';
import { Button, Input, Title } from 'components';
import { fontSizeKit, fontWeightKit, palette } from 'styles';

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  width: 550px;
  height: auto;
  position: relative;
  border-radius: 20px;
  background-color: ${palette.themeBright};
  border: 3px solid;
  border-color: ${palette.themePrimary};

  label {
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }

  h3 {
    position: absolute;
    top: 0;
    left: 4%;
  }
`;

export const SignUpFormInput = styled(Input)`
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 330px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 20px;

  input {
    position: relative;
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    border: none;
    margin-left: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0;
    border-bottom: 2px solid;
    border-color: ${palette.themePrimary};
    background-color: transparent;
    outline: none;
    box-shadow: none;
    background-color: 0 0 0 4px ${palette.themeDefault};
    font-size: ${fontSizeKit.medium};

    &::placeholder {
      font-size: ${fontSizeKit.small};
      color: ${palette.themeDefault};
    }

    &:focus {
      outline: none;
      ${({ theme }) => css`
        box-shadow: 0 0 0 4px ${theme.themeSecondary};
      `}
      &:not(:focus-visible) {
        box-shadow: none;
      }
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }

  p {
    position: absolute;
    top: 60%;
    left: -10%;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.bold};

    display: inline-block;
    width: 500px;
  }

  label {
    width: 120px;
    font-weight: ${fontWeightKit.extraBold};
  }
`;

export const SignUpFormSubmitButton = styled(Button)`
  width: 200px;
  height: 50px;
  margin-top: 15px;
  background-color: ${palette.themeDefaultWhite};
  border-radius: 50px;
  border: none;
  height: 50px;
  font-size: ${fontSizeKit.medium};
  border: 2px solid;
  border-color: ${palette.themePrimary};
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  && + button {
    background-color: transparent;
    color: ${palette.themeDark};
  }
`;

export const SignUpFormCloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 17px 0 0;

  height: 40px;
  width: 50px;
  border-color: ${palette.themePrimary};
  margin: 0;
  padding: 0;
  /* color: ${palette.themeDefault}; */
  font-size: ${fontSizeKit.extraBold};
  :hover {
    border-radius: 0 17px 0 0;
  }
`;
