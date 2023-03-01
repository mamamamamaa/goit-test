import { BgImage, CardWrapper, LogoIcon } from "./Card.styled";
import Logo from "../../assets/logo.svg";
import Bg1x from "../../assets/bg-1x.png";
import Bg2x from "../../assets/bg-2x.png";

export const Card = () => {
  return (
    <CardWrapper>
      <LogoIcon src={Logo} alt="goit logo" />
      <BgImage srcSet={`${Bg1x} 1x, ${Bg2x} 2x`} alt="background image" />
    </CardWrapper>
  );
};
