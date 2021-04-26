import styled, { css } from 'styled-components';
import { ReactComponent as Fox } from 'assets/logos/logo1.svg';
import { fontSizeKit, palette } from '../../styles';
import { GrGithub } from 'react-icons/gr';
import { CgTwitter } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 20rem;
  background-color: ${palette.themeFooter};
  color: ${palette.themeBrightGray};
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 4rem;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  flex-wrap: wrap;
`;

export const FooterContentHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSizeKit.medium};
  margin-bottom: 3rem;
`;

export const ContactColumn = styled(FooterColumn)`
  width: 15%;
`;

export const ContactHeader = styled(FooterContentHeader)`
  margin-bottom: 2rem;
`;

export const FooterContent = styled.p`
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: ${fontSizeKit.small};
  line-height: ${fontSizeKit.large};
`;

export const FooterLink = styled.a`
  margin-left: 1rem;
  color: ${palette.themeBrightGray};
`;

const iconStyle = () => css`
  width: 20px;
  height: 20px;
`;

export const GithubIcon = styled(GrGithub)`
  ${iconStyle()};
`;

export const FacebookIcon = styled(FaFacebook)`
  ${iconStyle()};
`;

export const TwitterIcon = styled(CgTwitter)`
  ${iconStyle()};
  color: ${palette.themeFooter};
  background-color: ${palette.themeBrightGray};
  border-radius: 50%;
`;

export const StyledFox = styled(Fox)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const RightWrapper = styled.div`
  border-top: 1px solid ${palette.themeBrightGray};
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;
`;

export const RightContent = styled.p`
  color: ${palette.themeBrightGray};
`;
