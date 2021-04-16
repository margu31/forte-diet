import React, { useState } from 'react';
import { StyledLi, StyledUl, StyledUserBarWrapper } from './UserNavigation.styled';
import { Modal } from 'components/Modal/Modal';
import LoginDialog from 'containers/LogInContainer/LogInContainer';
import SignUpDialog from 'containers/SignUpContainer/SignUpContainer';
import { StyledButton } from './UserNavigation.styled';

export default function UserNavigation({ isAuthed, onSignOut }) {
  const [dialogType, setDialogType] = useState(null);

  const onOpen = e => {
    setDialogType(e.target.id);
  };

  /* 다이얼로그 x버튼에 주면 댐 */
  const onClose = e => {
    setDialogType(null);
  };

  return (
    <StyledUserBarWrapper>
      {dialogType && (
        <Modal>
          {dialogType === 'LoginDialog' ? (
            <LoginDialog closeModal={onClose} />
          ) : (
            <SignUpDialog closeModal={onClose} />
          )}
        </Modal>
      )}
      <nav>
        <StyledUl>
          {!isAuthed ? (
            <>
              <StyledLi>
                <StyledButton id='LoginDialog' onClick={onOpen}>
                  로그인
                </StyledButton>
              </StyledLi>
              <StyledLi>
                <StyledButton id='SignUpDialog' onClick={onOpen}>
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
