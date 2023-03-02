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

export const UserIconWrapper = styled.div`
  position: relative;
  height: 80px;
  padding-top: 5px;
`;

export const Stick = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ring = styled.div`
  width: 80px;
  height: 80px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const UserAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const RingContent = styled.div`
  position: relative;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const TypographyWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 26px 0;
  gap: 16px;
`;

export const Typography = styled.p`
  text-align: center;

  margin: 0;

  color: #ebd8ff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
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
