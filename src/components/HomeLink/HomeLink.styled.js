import styled from 'styled-components';
import { fontSizeKit, fontWeightKit, palette } from 'styles';
import { ReactComponent as UglyFox } from 'assets/logos/logo1.svg';
import { motion } from 'framer-motion';

export const StyledLogo = styled.div`
  font-family: InkLipquid;
  position: relative;
  padding: 5rem 0;
  font-size: ${fontSizeKit.xLarge};
  font-weight: ${fontWeightKit.extraBold};
  margin: 3rem 0;
  color: ${palette.themeDefaultWhite};
  border-radius: 10px;
  text-shadow: 2px 2px 4px ${palette.themeDark};
`;

export const UsikContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Usik = styled(UglyFox)`
  width: 50px;
  height: 50px;
`;
