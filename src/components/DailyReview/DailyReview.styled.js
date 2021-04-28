import styled from 'styled-components';
import { palette, fontSizeKit, fontWeightKit } from 'styles';

const StyledDailyReview = styled.li`
  width: 730px;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 110px;
  margin: 0;
  margin-top: -10px;
  position: relative;
  z-index: 1;

  textarea {
    border-radius: 10px;
    overflow-y: auto;
    padding: 12px 20px 25px 20px;
    width: 100%;
    height: 100%;
    line-height: 30px;
    background: inherit;
    color: ${palette.themeDefault};
    opacity: 0.8;
    resize: none;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.bold};
    outline: none;

    &:focus {
      box-shadow: 3px 3px 3px #e0dfde;
      background: rgba(255, 255, 255, 0.6);
    }

    &::placeholder {
      opacity: 0.7;
    }
  }

  span {
    font-size: ${fontSizeKit.xSmall};
    color: ${palette.themeBrightGray};
    position: absolute;
    bottom: 27px;
    right: 90px;
    z-index: 1;
  }

  button {
    background: inherit;
    border-radius: 10px;
    font: inherit;
    font-size: ${fontSizeKit.xSmall};
    color: ${palette.themeDefault};
    font-weight: ${fontWeightKit.bold};

    padding: 7px;
    box-sizing: border-box;
    border: none;
    position: absolute;
    bottom: 20px;
    right: 45px;
    cursor: pointer;

    z-index: 1;

    &:hover,
    &:focus {
      background: #eaeaea;
    }

    &:focus ~ textarea {
      box-shadow: 3px 3px 3px #e0dfde;
      background: rgba(255, 255, 255, 0.6);
    }
  }

  button + button {
    right: 8px;

    &:hover,
    &:focus {
      background: ${palette.themeHover};
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
