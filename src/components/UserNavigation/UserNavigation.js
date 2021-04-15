import React, { useState } from 'react';
import { StyledUl, StyledUserBarWrapper } from './UserNavigation.styled';
import Button from 'components/Button/Button';
import { palette } from 'styles';

export default function UserNavigation({ isAuthed }) {
  const [dialogType, setDialogType] = useState(null);
  const Dialog = `${dialogType}`;

  const onOpen = e => {
    setDialogType(e.target.id);
  };

  /* 다이얼로그 x버튼에 주면 댐 */
  const onClose = e => {
    setDialogType(null);
  };

  return (
    <StyledUserBarWrapper>
      {/* {dialogType && (
        <Modal>
          <Dialog onClose={onClose} />
        </Modal>
      )} */}
      <nav>
        <StyledUl>
          {!isAuthed ? (
            <>
              <li>
                <Button
                  id='loginDialog'
                  onClick={onOpen}
                  $width='60'
                  $height='40'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefault}
                  $hoverBackground={palette.themeHover}
                >
                  로그인
                </Button>
              </li>
              <li>
                <Button
                  id='signUpDialog'
                  onClick={onOpen}
                  $width='60'
                  $height='40'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefault}
                  $hoverBackground={palette.themeHover}
                >
                  회원가입
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Button
                  id='signUpDialog'
                  $width='60'
                  $height='40'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefault}
                >
                  로그아웃
                </Button>
              </li>
            </>
          )}
        </StyledUl>
      </nav>
    </StyledUserBarWrapper>
  );
}
