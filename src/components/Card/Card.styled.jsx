import styled from "@emotion/styled";

export const CardWrapper = styled.section`
  position: relative;

  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoIcon = styled.img`
  position: absolute;

  top: 20px;
  left: 20px;
`;

export const BgImage = styled.img`
  position: relative;

  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const FollowButton = styled.button`
  display: block;

  cursor: pointer;

  width: 196px;
  height: 50px;

  margin: 0 auto;

  color: #373737;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  border: none;
  background: ${({ isFollowing }) => (isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
