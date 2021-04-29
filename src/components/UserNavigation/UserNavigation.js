import React from 'react';
import {
  StyledLi,
  StyledUl,
  StyledUserBarWrapper,
  UserNavigationHeading,
  StyledButton
} from './UserNavigation.styled';
import { LogInContainer, SignUpContainer } from 'containers';
import { Modal } from 'components';

export default function UserNavigation({
  auth,
  onSignOut,
  dialogType,
  onOpenDialog,
  onCloseDialog
}) {
  return (
    <StyledUserBarWrapper>
      <UserNavigationHeading>유저 네비게이션</UserNavigationHeading>
      {dialogType && (
        <Modal>
          {dialogType === 'LogInContainer' ? (
            <LogInContainer closeModal={onCloseDialog} />
          ) : (
            <SignUpContainer closeModal={onCloseDialog} />
          )}
        </Modal>
      )}
      <nav>
        <StyledUl>
          {!auth.isAuthed ? (
            <>
              <StyledLi>
                <StyledButton id='LogInContainer' onClick={onOpenDialog}>
                  로그인
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton id='SignUpContainer' onClick={onOpenDialog}>
                  회원가입
                </StyledButton>
              </StyledLi>
            </>
          ) : (
            <>
              <StyledLi>
                <StyledButton id='SignUpContainer' onClick={onSignOut}>
                  로그아웃
                </StyledButton>
              </StyledLi>
            </>
          )}
        </StyledUl>
      </nav>
    </StyledUserBarWrapper>
  );
}
