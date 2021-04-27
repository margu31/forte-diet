import styled from 'styled-components';
import { ReactComponent as Fox } from 'assets/logos/logo1.svg';
import { fontWeightKit, palette, fontSizeKit } from 'styles';

const StyledFox = styled(Fox)`
  width: 150px;
  height: 150px;
  transform: scaleX(-1);
  position: absolute;
  top: 58%;
  left: 44%;
`;

const StyledSpeech = styled.div`
  text-align: center;
  padding: 50px;
  font-size: ${fontSizeKit.xLarge};
  font-weight: ${fontWeightKit.extraBold};
  color: #666666;
  position: absolute;
  top: 35%;
  left: 60%;
  transform: translateX(-60%);
  border-radius: 15px;
  border: 4px solid #666666;

  &:after,
  &:before {
    top: 100%;
    left: 30%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(244, 243, 239, 0);
    border-top-color: #f4f3ef;
    border-width: 20px;
    margin-left: -20px;
  }
  &:before {
    border-color: rgba(102, 102, 102, 0);
    border-top-color: #666666;
    border-width: 26px;
    margin-left: -26px;
  }
`;

export { StyledFox, StyledSpeech };
