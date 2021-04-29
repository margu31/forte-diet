import styled from 'styled-components';
import { fontSizeKit, fontWeightKit } from 'styles';

export const MyTitleContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 500px;
  height: 100px;
`;

export const MyTitlewtext = styled.p`
  margin: auto;
  width: auto;
  height: auto;
  text-align: center;
  font-size: ${fontSizeKit.large};
  font-weight: ${fontWeightKit.bold};
`;
