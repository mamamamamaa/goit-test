import {
  BgImage,
  CardWrapper,
  FollowButton,
  LogoIcon,
  Ring,
  RingContent,
  UserAvatar,
  Stick,
  Typography,
  TypographyWrapper,
  UserIconWrapper,
} from "./Card.styled";
import Logo from "../../assets/logo.svg";
import Bg1x from "../../assets/bg-1x.png";
import Bg2x from "../../assets/bg-2x.png";
import { useState } from "react";

export const Card = ({ userData }) => {
  const { id, user, tweets, followers, avatar } = userData;

  const [isFollowing, setFollowing] = useState(false);

  const buttonText = isFollowing ? "Following" : "Follow";

  const handleFollow = () => {
    userData.followers += isFollowing ? -1 : 1;
    setFollowing((prevState) => !prevState);
  };

  return (
    <CardWrapper>
      <LogoIcon src={Logo} alt="goit logo" />
      <BgImage srcSet={`${Bg1x} 1x, ${Bg2x} 2x`} alt="background image" />
      <UserIconWrapper>
        <Ring>
          <RingContent>
            <UserAvatar src={avatar} alt="user avatar" />
          </RingContent>
        </Ring>
        <Stick />
      </UserIconWrapper>
      <TypographyWrapper>
        <Typography>{tweets.toLocaleString()} tweets</Typography>
        <Typography>{followers.toLocaleString()} Followers</Typography>
      </TypographyWrapper>
      <FollowButton
        isFollowing={isFollowing}
        onClick={handleFollow}
        type="button"
      >
        {buttonText}
      </FollowButton>
    </CardWrapper>
  );
};
