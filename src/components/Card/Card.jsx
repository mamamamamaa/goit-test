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
import { useEffect, useState } from "react";

export const Card = ({ userData, update }) => {
  const { id, tweets, followers, avatar, isFollowing } = userData;

  const [userFollowers, setUserFollowers] = useState(followers);
  const [isFollow, setFollow] = useState(isFollowing);

  const buttonText = isFollow ? "Following" : "Follow";

  const handleFollow = () => {
    setUserFollowers((prevState) => (isFollow ? prevState - 1 : prevState + 1));
    setFollow((prevState) => !prevState);
  };

  useEffect(() => {
    update(id, isFollow, userFollowers);
  }, [isFollow]);

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
        <Typography>{userFollowers.toLocaleString()} Followers</Typography>
      </TypographyWrapper>
      <FollowButton isFollowing={isFollow} onClick={handleFollow} type="button">
        {buttonText}
      </FollowButton>
    </CardWrapper>
  );
};
