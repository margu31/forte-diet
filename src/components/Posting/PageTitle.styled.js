import styled from "styled-components";

const StylePageTitle = styled.h2`
  font-size: 30px;
  position: relative;
  text-indent: 15px;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 5px;
    height: 50px;
    background-color: #f26830;
    top: -2px;
  }
`;

export default StylePageTitle;
