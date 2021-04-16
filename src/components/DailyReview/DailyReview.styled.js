import styled, { css } from 'styled-components';

const StyledDailyReview = styled.div`
  width: 730px;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 110px;
  margin: 0;
  margin-top: 50px;
  position: relative;
  z-index: 2;

  textarea {
    border-radius: 10px;
    overflow-y: scroll;
    padding: 20px 20px 27px 20px;
    width: 100%;
    height: 100%;
    line-height: 30px;
    background: inherit;
    /* overflow: hidden; */
    color: #14182c;
    opacity: 0.8;
    resize: none;
    font-size: 1.3rem;
    outline: none;

    &:focus {
      box-shadow: 3px 3px 5px #e0dfde;
      background: rgba(255, 255, 255, 0.6);
    }

    &::placeholder {
      opacity: 0.7;
    }
  }

  span {
    font-size: 1rem;
    ${({ theme }) => css`
      color: ${theme.themeBrightGray};
    `}
    position: absolute;
    bottom: 13px;
    right: 90px;
  }

  button {
    background: inherit;
    border-radius: 10px;
    font: inherit;
    font-size: 1.1rem;
    color: #14182c;
    padding: 7px;
    box-sizing: border-box;
    border: none;
    position: absolute;
    bottom: 5px;
    right: 45px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #e0dfde;
    }
  }

  button + button {
    right: 8px;

    &:hover {
      background: rgba(243, 179, 76, 0.7);
    }
  }
`;

const StyledDailyReviewModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: pink;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
`;

export { StyledDailyReview, StyledDailyReviewModal };
