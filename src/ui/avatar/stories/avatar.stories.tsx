import { Avatar } from "../avatar";
import { AvatarBadge } from "../avatar-badge";

export default {
  title: "ui/data-display/avatar",
  component: Avatar,
};

export const withBadge = () => {
  return (
    <Avatar name="Dhiraj Arun">
      <AvatarBadge bloodGroup="AB-" />
    </Avatar>
  );
};
