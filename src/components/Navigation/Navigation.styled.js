import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { BsHouse, BsPen, BsGear } from 'react-icons/bs';
import { fontSizeKit, fontWeightKit, palette } from '../../styles';

export const StyledUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const StyledLi = styled.li`
  width: 100%;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 8rem 2rem 2rem;
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.normal};
  color: ${palette.themeDefaultWhite};

  &.active {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
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
