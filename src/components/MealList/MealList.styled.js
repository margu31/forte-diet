import styled from 'styled-components';

const StyledMealList = styled.li`
  list-style: none;
  display: inline-block;
  color: #14182c;
  cursor: default;

  div {
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 6px 0;
    width: 138px;
    height: 138px;
    overflow: hidden;
    margin-bottom: 19px;
    border: 10px solid ${props => props.borderColor};
    cursor: pointer;

    img {
      width: auto;
      height: 138px;
    }
  }

  span {
    display: block;
    margin: 0;
    text-align: center;
    font-size: 1.6rem;
  }

  span + span {
    margin-top: 8px;
    font-size: 1.4rem;
    opacity: 0.6;
  }

  & + & {
    margin-left: 58px;
  }
`;

export { StyledMealList };
