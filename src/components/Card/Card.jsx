import {
  BgImage,
  CardWrapper,
  LogoIcon,
  Ring,
  RingContent,
  RingIcon,
  Stick,
  UserIconWrapper,
} from "./Card.styled";
import Logo from "../../assets/logo.svg";
import Bg1x from "../../assets/bg-1x.png";
import Bg2x from "../../assets/bg-2x.png";
import Icon from "../../assets/Ellipse 1 (Stroke).svg";
import { useState } from "react";

export const Card = () => {
  const [] = useState();

  return (
    <CardWrapper>
      <LogoIcon src={Logo} alt="goit logo" />
      <BgImage srcSet={`${Bg1x} 1x, ${Bg2x} 2x`} alt="background image" />
      <UserIconWrapper>
        <Ring>
          <RingContent />
        </Ring>
        <Stick />
      </UserIconWrapper>
    </CardWrapper>
  );
};
