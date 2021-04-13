import styled from "styled-components";

const StyledInputRadio = styled.span`
  color: #9f9f9f;
  background-color: #fefdf8;
  border: 1px solid #f3b34c;
  display: inline-block;

  input {
    display: none;
  }

  label {
    font-size: 16px;
    display: inline-block;
    width: 83px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;

    &:hover {
      background-color: #f3b34c;
      color: #ffffff;
    }
  }

  input:checked + label {
    background-color: #f3b34c;
    color: #ffffff;
  }
`;

export default StyledInputRadio;
