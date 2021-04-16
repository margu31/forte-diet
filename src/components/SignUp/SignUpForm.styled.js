import Input from "components/Input/Input";
import styled, { css } from "styled-components";

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 25px;
  width: 800px;
  min-height: 500px;
  position: relative;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.3);
  `}

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
  }

  /* label {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  } */

  input {
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50px;
    border: none;
    margin-left: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    margin-right: 20px;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid black;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    color: #fff;
    font-size: 1.5rem;

    &::placeholder {
      font-size: 1.3rem;
      color: #fff;
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

  p {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  button {
    background-color: white;
    border-radius: 50px;
    border: none;
    height: 50px;
    /* margin-top: 30px; */
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
    color: #fff;
    font-size: 1.5rem;
  }
`;

export const SignUpFormInput = styled(Input)`
  position: relative;

  p {
    position: absolute;
    top: 100%;
    left: 13%;
  }
`;
