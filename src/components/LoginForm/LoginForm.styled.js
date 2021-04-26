import Input from "components/Input/Input";
import styled, { css } from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

export const StyledForm = styled.form`
  h3 {
    font-size: ${fontSizeKit.large};
    font-weight: ${fontWeightKit.bold};
    border-left: 3px solid black;
    border-color: ${palette.themePrimary};
    padding: 10px 0 10px;
    padding-left: 10px;
    text-align: left;
    width: 100%;
    margin-left: 20px;
  }

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 25px;
  width: 500px;
  min-height: 400px;
  position: relative;
  border-radius: 20px;
  border: 3px solid;
  border-color: ${palette.themePrimary};
  /* backdrop-filter: blur(100px); */
  background-color: ${palette.themeBright};

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

  input {
    width: 300px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 0;
    padding-left: 3rem;
    /* font-size: 1.5rem; */
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 3px solid;
    border-color: ${palette.themePrimary};

    background-color: transparent;
    outline: none;
    box-shadow: none;
    color: ${palette.themeDefault};

    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};

    &::placeholder {
      font-size: 1.3rem;
      color: ${palette.themeDefault};
      font-size: ${fontSizeKit.medium};
      font-weight: ${fontWeightKit.bold};
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
    font-size: ${fontSizeKit.extraBold};
  }

  button {
    background-color: #fff;
    border-radius: 50px;
    border: none;
    height: 50px;
    margin-top: 50px;
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 0;
    border: 3px solid;
    border-color: ${palette.themePrimary};

    &:disabled {
      cursor: not-allowed;
    }
  }

  button:last-child {
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    margin-top: 0;
    /* color: #fff; */
    color: ${palette.themeDefault};
    font-size: ${fontSizeKit.extraBold};
    border: 0;
    :hover {
      border-radius: 0 17px 0 0;
    }
  }
`;

export const LoginFormInput = styled(Input)`
  position: relative;

  p {
    position: absolute;
    top: 85%;
    left: 10%;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }

  button {
    color: red;
  }
`;
