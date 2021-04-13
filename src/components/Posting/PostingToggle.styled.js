import styled from "styled-components";

const StyleToggle = styled.div`
  /* label {
    position: relative;
    outline: none;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    border: 4px solid #f26830;
    background-color: #fefdf8;

    span {
      position: absolute;
      font-size: 18px;
      color: #3c3c3c;
      line-height: 30px;

      &:last-child {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #f26830;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    & span:nth-child(2) {
      right: 13px;
    }

    & span:nth-child(3) {
      left: 13px;
      display: none;
    }
  }

  input {
    opacity: 0;
  }

  input:checked {
    & + span {
      display: none;

      & + span {
        display: inline-block;
        color: #fefdf8;
        color: black;
      }
    }
  } */

  label {
    position: relative;
    outline: none;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    border: 4px solid #f26830;
    background-color: #fefdf8;
  }

  & span:last-child {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #f26830;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
  }

  input:checked + label {
    background-color: #f26830;

    & span:last-child {
      background-color: #fefdf8;
      right: 5px;
      /* top: 50%; */
      /* transform: translateY(-50%); */
      transform: translate3d(65px, -50%, 0);
    }
  }
`;

export default StyleToggle;
