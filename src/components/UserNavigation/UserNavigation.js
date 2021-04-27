import React from 'react';
import {
  StyledLi,
  StyledUl,
  StyledUserBarWrapper,
  UserNavigationHeading
} from './UserNavigation.styled';
import { Modal } from 'components/Modal/Modal';
import LoginDialog from 'containers/LogInContainer/LogInContainer';
import SignUpDialog from 'containers/SignUpContainer/SignUpContainer';
import { StyledButton } from './UserNavigation.styled';

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
          {dialogType === 'LoginDialog' ? (
            <LoginDialog closeModal={onCloseDialog} />
          ) : (
            <SignUpDialog closeModal={onCloseDialog} />
          )}
        </Modal>
      )}
      <nav>
        <StyledUl>
          {!auth.isAuthed ? (
            <>
              <StyledLi>
                <StyledButton id='LoginDialog' onClick={onOpenDialog}>
                  로그인
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton id='SignUpDialog' onClick={onOpenDialog}>
                  회원가입
                </StyledButton>
              </StyledLi>
            </>
          ) : (
            <>
              <StyledLi>
                <StyledButton id='signUpDialog' onClick={onSignOut}>
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
