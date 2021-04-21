import styled, { css } from "styled-components";
import { ReactComponent as Password } from "../../assets/icons/InputIcons/lock.svg";
import { ReactComponent as Email } from "../../assets/icons/InputIcons/email.svg";
import { ReactComponent as Gender } from "../../assets/icons/InputIcons/gender.svg";
import { ReactComponent as Weight } from "../../assets/icons/InputIcons/weight.svg";
import { ReactComponent as Height } from "../../assets/icons/InputIcons/height.svg";
import { ReactComponent as Nickname } from "../../assets/icons/InputIcons/nickname.svg";
import { ReactComponent as Eye } from "../../assets/icons/InputIcons/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icons/InputIcons/eye-slash.svg";

export const StyledEmailIcon = styled(Email)`
  height: 2.5rem;
`;

export const StyledPasswordIcon = styled(Password)`
  height: 2.5rem;
`;

export const StyledGenderIcon = styled(Gender)`
  height: 2.5rem;
`;

export const StyledWeightIcon = styled(Weight)`
  height: 2.5rem;
`;

export const StyledHeightIcon = styled(Height)`
  height: 2.5rem;
`;

export const StyledNicknameIcon = styled(Nickname)`
  height: 2.5rem;
`;

export const StyledEyeIcon = styled(Eye)`
  height: 2rem;
  color: #000;
`;

export const StyledEyeSlashIcon = styled(EyeSlash)`
  height: 2rem;
  color: #000;
`;
