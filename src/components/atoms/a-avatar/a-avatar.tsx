import { styled } from "styled-components";

import * as RadixAvatar from "@radix-ui/react-avatar";

type TVariant = "md";

interface IAvatarRoot extends RadixAvatar.AvatarProps {
  "data-testid"?: string;
  variant?: TVariant;
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<IAvatarRoot>((props) => ({
  as: "span",
  "data-testid": props["data-testid"],
  variant: props["variant"],
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: ${({ variant }) => (variant === "md" ? "92px" : "45px")};
  height: ${({ variant }) => (variant === "md" ? "92px" : "45px")};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.ref.colors.color_gray500};
`;

interface IAvatarImage extends RadixAvatar.AvatarImageProps {
  "data-testid"?: string;
}

const AvatarImage = styled(RadixAvatar.Image).attrs<IAvatarImage>((props) => ({
  as: "img",
  "data-testid": props["data-testid"],
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

interface IAvatar extends RadixAvatar.AvatarProps {
  src: string;
  alt: string;
  variant?: TVariant;
}

export function AAvatar({ ...props }: IAvatar) {
  const { src, alt } = props;

  return (
    <AvatarRoot data-testid="a-avatar" {...props}>
      <AvatarImage data-testid="a-avatar-image" src={src} alt={alt} />
    </AvatarRoot>
  );
}
