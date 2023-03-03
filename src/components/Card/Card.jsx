import { BgImage, CardWrapper, FollowButton, LogoIcon } from "./Card.styled";
import Logo from "../../assets/logo.svg";
import Bg1x from "../../assets/bg-1x.png";
import Bg2x from "../../assets/bg-2x.png";
import { useEffect, useState } from "react";
import { Typography } from "../Typography/Typography.jsx";
import { UserIcon } from "../UserIcon/UserIcon";

export const Card = ({ userData, update }) => {
  const { id, user, tweets, followers, avatar, isFollowing } = userData;

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
      <UserIcon avatar={avatar} name={user} />
      <Typography
        followersText={"followers"}
        followersValue={userFollowers}
        tweetsValue={tweets}
        tweetsText={tweets}
      />
      <FollowButton isFollowing={isFollow} onClick={handleFollow} type="button">
        {buttonText}
      </FollowButton>
    </CardWrapper>
  );
};
