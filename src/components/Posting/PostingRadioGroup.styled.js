import styled from "styled-components";

const StyledRadioGroup = styled.div`
  p {
    font-size: 14px;
    text-indent: 10px;
    margin-bottom: 5px;
  }

  div {
    background-color: #fefdf8;
    border: 1px solid #f3b34c;
    display: inline-block;
    width: 342px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  input {
    display: none;
  }

  label {
    font-size: 15px;
    display: inline-block;
    width: 85px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #f3b34c;

    &:hover {
      background-color: #f3b34c;
      color: #ffffff;
    }
  }

  & label:last-child {
    border-right: none;
  }

  input:checked + label {
    background-color: #f3b34c;
    color: #ffffff;
  }
`;

export default StyledRadioGroup;
