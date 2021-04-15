import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 25px;
  width: 350px;
  min-height: 500px;
  position: relative;
  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}

  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 30px;
  }

  label {
  }

  input {
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 50px;
    border: none;
    padding-left: 3rem;

    &::placeholder {
      font-size: 1.6rem;
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
    margin-top: 30px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  button:last-child {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    margin-top: 0;
  }
`;
