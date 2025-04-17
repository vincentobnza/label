import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type AvatarComponentProps = {
  className?: string;
  img_url: string;
  alt?: string;
};

export const AvatarComponent = ({
  className = "size-10",
  img_url,
  alt = "Label",
}: AvatarComponentProps) => {
  return (
    <Avatar className={`${className}`}>
      <AvatarImage src={img_url} alt={alt} />
      <AvatarFallback>L</AvatarFallback>
    </Avatar>
  );
};
