import styled from "@emotion/styled";

export const CardWrapper = styled.div`
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

export const RingIcon = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
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
