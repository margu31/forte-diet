import Button from "components/Button/Button";
import Input from "components/Input/Input";
import styled, { css } from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
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

   /* button {
    margin-top: 15px;
    background-color: white;
    border-radius: 50px;
    border: none;
    height: 50px;
    cursor: pointer;
    font-size: ${fontSizeKit.medium};
    border: 2px solid;
  border-color: ${palette.themePrimary};

    &:disabled {
      cursor: not-allowed;
    } */
  }

  /* button:last-child {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px;
    height: 40px;
    width: 50px;
    background-color: transparent;
    margin: 0;
    padding: 0;
    color: ${palette.themeDefault};
    font-size: ${fontSizeKit.extraBold};
    :hover {
      border-radius: 0 17px 0 0;
    }
  } */

  h3 {
    text-align: left;
    margin-left: 10px;
    padding: 10px 0;
    width: 100%;
    border-left: 3px solid black;
    border-color: ${palette.themePrimary};
    font-size: ${fontSizeKit.large};
    font-weight: ${fontWeightKit.bold};
    padding-left: 10px;
  }
`;

export const SignUpFormInput = styled(Input)`
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 300px;
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
    left: -20%;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.bold};

    display: inline-block;
    width: 500px;
  }

  label {
    width: 90px;
  }
`;

/* export const StyledBasicInformationGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 130px;
  background-color: transparent;
`;

export const StyledAdditionalInformationGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 800px;
  background-color: transparent;
`; */

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
