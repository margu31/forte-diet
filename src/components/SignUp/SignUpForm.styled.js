import Input from "components/Input/Input";
import { StyledInputWrapper } from "components/Input/Input.styled";
import SignUpFormRadioGroup from "components/SignUpRadioGroup/SignUpRadioGroup";
import { StyledRadioGroup } from "components/SignUpRadioGroup/SignUpRadioGroup.styled";
import styled, { css } from "styled-components";

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 25px;
  width: 700px;
  height: auto;
  position: relative;
  border-radius: 10px;
  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}

  label {
    font-size: 1.3rem;
    font-weight: 700;
  }

  button {
    margin-top: 15px;
    background-color: white;
    border-radius: 50px;
    border: none;
    height: 50px;
    cursor: pointer;
    font-size: 1.5rem;

    &:disabled {
      cursor: not-allowed;
    }
  }

  button:last-child {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px;
    height: 40px;
    width: 50px;
    background-color: transparent;
    margin-top: 0;
    color: #333;
    font-size: 1.5rem;
  }

  h3 {
    text-align: left;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
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

  input {
    position: relative;
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50px;
    border: none;
    margin-left: 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    border: 3px solid;
    ${({ theme }) => css`
      border-color: ${theme.themePrimary};
    `}
    ${({ theme }) => css`
      background-color: 0 0 0 4px ${theme.themeBrightYellow};
    `}
    background-color: transparent;
    outline: none;
    box-shadow: none;
    ${({ theme }) => css`
      background-color: 0 0 0 4px ${theme.themeDefault};
    `}
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.3rem;
      color: #333;
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
    padding: 12px 5px 12px 20px;
    /* margin-left: 10px; */
    background-color: yellow;
  }

  p {
    position: absolute;
    top: 70%;
    left: -20%;
    font-size: 1.3rem;
    display: inline-block;
    width: 500px;
  }

  label {
    width: 90px;
  }
`;

export const StyledBasicInformationGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: space-around;

  align-items: center;
  width: 800px;
  height: 130px;
  background-color: #fff;
`;

export const StyledAdditionalInformationGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 800px;
  background-color: #fff;
  margin-bottom: 10px;
`;
