import React from 'react';
import {
  FooterWrapper,
  FooterColumn,
  StyledFox,
  FooterContentHeader,
  FooterContent,
  FooterLink,
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  FooterInfoWrapper,
  RightWrapper,
  RightContent,
  ContactHeader,
  ContactColumn
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInfoWrapper>
        <FooterColumn>
          <FooterContentHeader>
            <StyledFox />
            Forte Diet
          </FooterContentHeader>
          <FooterContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </FooterContent>
        </FooterColumn>
        <ContactColumn>
          <ContactHeader>CONTACT US</ContactHeader>
          <FooterContent>
            김효성
            <FooterLink href='https://github.com/hyorard-b'>
              <GithubIcon />
            </FooterLink>
            <FooterLink href='https://github.com/hyorard-b'>
              <FacebookIcon />
            </FooterLink>
            <FooterLink href='https://github.com/hyorard-b'>
              <TwitterIcon />
            </FooterLink>
          </FooterContent>
          <FooterContent>
            박혜준
            <FooterLink href='https://github.com/margu31'>
              <GithubIcon />
            </FooterLink>
            <FooterLink href='https://github.com/margu31'>
              <FacebookIcon />
            </FooterLink>
            <FooterLink href='https://github.com/margu31'>
              <TwitterIcon />
            </FooterLink>
          </FooterContent>
          <FooterContent>
            이효형
            <FooterLink href='https://github.com/lhhyung91'>
              <GithubIcon />
            </FooterLink>
            <FooterLink href='https://github.com/lhhyung91'>
              <FacebookIcon />
            </FooterLink>
            <FooterLink href='https://github.com/lhhyung91'>
              <TwitterIcon />
            </FooterLink>
          </FooterContent>
          <FooterContent>
            장지혜
            <FooterLink href='https://github.com/jjhstoday'>
              <GithubIcon />
            </FooterLink>
            <FooterLink href='https://github.com/jjhstoday'>
              <FacebookIcon />
            </FooterLink>
            <FooterLink href='https://github.com/jjhstoday'>
              <TwitterIcon />
            </FooterLink>
          </FooterContent>
        </ContactColumn>
        <FooterColumn>
          <FooterContentHeader>FOLLOW US</FooterContentHeader>
          <FooterContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </FooterContent>
        </FooterColumn>
      </FooterInfoWrapper>
      <RightWrapper>
        <RightContent>302-2, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea</RightContent>
        <RightContent>Powered by React, Firebase etc.</RightContent>
      </RightWrapper>
    </FooterWrapper>
  );
}
