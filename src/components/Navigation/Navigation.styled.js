import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsHouse, BsGear } from 'react-icons/bs';
import { fontSizeKit, fontWeightKit, palette } from '../../styles';
import { IoPizzaOutline } from 'react-icons/io5';
import { RiEditBoxLine } from 'react-icons/ri';

export const StyledUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const StyledLi = styled.li`
  padding-left: 2rem;
  width: 100%;
  text-align: start;

  & + & {
    margin-top: 1rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 90%;
  padding: 2rem 7rem 2rem 2rem;
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.normal};
  color: ${palette.themeDefaultWhite};
  border-radius: 10px;

  &.active {
    /* background-color: rgba(0, 0, 0, 0.2); */
    background-color: ${palette.themeBright};
    color: ${palette.themePrimaryThick};
    font-weight: ${fontWeightKit.bold};
    transform: none;
    box-shadow: -4px 4px 0 rgba(0, 0, 0, 0.1);

    &:focus {
      box-shadow: 0 0 0 2px ${palette.themeSecondary};
    }
  }
`;

export const IconContainer = styled.div`
  margin-right: 0.7rem;
`;

export const HomeIcon = styled(BsHouse)`
  width: 2rem;
  height: 2rem;
`;

export const PostingIcon = styled(RiEditBoxLine)`
  width: 2rem;
  height: 2rem;
`;

export const SettingIcon = styled(BsGear)`
  width: 2rem;
  height: 2rem;
`;

export const MealIcon = styled(IoPizzaOutline)`
  width: 2rem;
  height: 2rem;
`;
