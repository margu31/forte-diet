import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  position: relative;
  text-indent: 20px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 5px;
    height: 50px;
    background-color: #f26830;
  }
`;

export default StyledTitle;
