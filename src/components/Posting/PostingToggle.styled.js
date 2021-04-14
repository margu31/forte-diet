import styled from "styled-components";

const StyleToggle = styled.div`
  font-size: 1.1rem;
  width: 690px;
  text-align: right;
  padding-right: 15px;
  margin: 5px 0;

  input {
    display: none;
  }

  label {
    position: relative;
    outline: none;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 88px;
    height: 30px;
    border-radius: 50px;
    border: 4px solid #f26830;
    background-color: #fefdf8;

    span {
      position: absolute;
      display: inline-block;
      height: 22px;
      line-height: 22px;
    }

    & span:first-child {
      right: 12px;
    }

    & span:nth-child(2) {
      display: none;
    }
  }

  & span:last-child {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #f26830;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.6s;
  }

  input:checked + label {
    background-color: #f26830;

    & span:last-child {
      background-color: #fefdf8;
      right: 5px;
      transform: translate3d(58px, -50%, 0);
    }

    & span:nth-child(2) {
      display: inline-block;
      color: #fefdf8;
      left: 10px;
    }

    & span:first-child {
      display: none;
    }
  }
`;

export default StyleToggle;
