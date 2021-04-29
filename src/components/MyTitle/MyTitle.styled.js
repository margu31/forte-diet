import styled from "styled-components";
import { fontSizeKit, fontWeightKit } from "styles";

export const MyTitleContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 500px;
  height: 100px;
  padding-bottom: 15px;
  padding-top: 25px;

  p:last-child {
    font-size: ${fontSizeKit.medium};
    margin-top: 10px;
  }
`;

export const MyTitlewtext = styled.p`
  margin: 0 auto;

  width: auto;
  /* height: 60px; */
  text-align: center;
  font-size: ${fontSizeKit.large};
  font-weight: ${fontWeightKit.bold};
`;
