import { CardWrapper, LogoIcon } from "./Card.styled";
import Logo from "../../assets/logo.svg";

export const Card = () => {
  return (
    <CardWrapper>
      <LogoIcon src={Logo} alt="goit logo" />
    </CardWrapper>
  );
};
