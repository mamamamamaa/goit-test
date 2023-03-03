import {
  Ring,
  RingContent,
  Stick,
  UserAvatar,
  UserIconWrapper,
} from "./UserIcon.styled.jsx";

export const UserIcon = ({ avatar, name }) => {
  const imageAlt = `${name} avatar`;

  return (
    <UserIconWrapper>
      <Ring>
        <RingContent>
          <UserAvatar src={avatar} alt={imageAlt} />
        </RingContent>
      </Ring>
      <Stick />
    </UserIconWrapper>
  );
};
