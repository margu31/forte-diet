import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHouse, BsPen, BsGear } from 'react-icons/bs';
import { palette } from '../../styles';

export const StyledUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const StyledLi = styled.li`
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  font-size: 1.4rem;
  color: ${palette.themeDefault};

  transition: all 0.2s;

  &:hover {
    transform: scale(1.2, 1.2);
  }

  &.active {
    background-color: ${palette.themeBright};
    transform: none;
  }
`;

export const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

export const HomeIcon = styled(BsHouse)`
  width: 2rem;
  height: 2rem;
`;

export const MyPageIcon = styled(AiOutlineUser)`
  width: 2rem;
  height: 2rem;
`;

export const PostingIcon = styled(BsPen)`
  width: 2rem;
  height: 2rem;
`;

export const SettingIcon = styled(BsGear)`
  width: 2rem;
  height: 2rem;
`;
