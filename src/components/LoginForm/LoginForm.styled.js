import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 25px;
  width: 500px;
  min-height: 600px;
  position: relative;
  border-radius: 10px;
  backdrop-filter: blur(4px);
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
    border-radius: 0;
    padding-left: 3rem;
    font-size: 1.5rem;
    /* color: #fff; */
    /* background-color: rgba(0, 0, 0, 0.3); */
    /* border: 0; */
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid black;
    background-color: transparent;
    outline: none;
    box-shadow: none;

    &::placeholder {
      font-size: 1.3rem;
      color: #fff;
    }

    &:focus {
      outline: none;
      ${({ theme }) => css`
        box-shadow: 0 0 0 4px ${theme.themeSecondary};
      `}
    }
    &:focus:not(:focus-visible) {
      box-shadow: none;
    }
  }

  p {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  button {
    background-color: #fff;
    border-radius: 50px;
    border: none;
    height: 50px;
    margin-top: 30px;
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
    height: 50px;
    width: 50px;
    background-color: transparent;
    margin-top: 0;
    color: #fff;
    font-size: 1.5rem;
  }
`;
