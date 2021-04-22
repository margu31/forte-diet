import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo, Usik, UsikContainer } from './HomeLink.styled';

export default function HomeLink() {
  return (
    <h1>
      <Link to='/'>
        <StyledLogo>
          <UsikContainer
            initial={{ x: 0 }}
            whileHover={{
              x: [0, -100, 0],
              transition: {
                duration: 1,
                type: 'spring'
              }
            }}
          >
            <Usik />
          </UsikContainer>
          우연히, 식단
        </StyledLogo>
      </Link>
    </h1>
  );
}
