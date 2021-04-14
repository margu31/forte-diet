import styled from "styled-components";

export const StyledPostingButton = styled.div`
  display: inline-block;
  text-align: center;

  button {
    font-family: Chungchunsidae;
    font-size: 1.3rem;
    display: inline-block;
    background-color: rgba(159, 159, 159, 0.2);
    width: 100px;
    height: 30px;
    line-height: 30px;
    outline: none;
    border: none;
    color: #14182c;
    border-radius: 5px;
    cursor: pointer;
  }

  & + & {
    margin-left: 20px;

    button {
      background-color: rgba(243, 179, 76, 0.2);
      color: #f26830;
    }
  }
`;
