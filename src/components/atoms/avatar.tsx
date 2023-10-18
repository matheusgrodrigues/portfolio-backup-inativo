import { styled } from "styled-components";

import * as RadixAvatar from "@radix-ui/react-avatar";

interface IAvatarRoot extends RadixAvatar.AvatarProps {
  "data-testid"?: string;
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<IAvatarRoot>((props) => ({
  as: "span",
  "data-testid": props["data-testid"],
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
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
}

export function Avatar({ src, alt, ...props }: IAvatar) {
  return (
    <AvatarRoot data-testid="a-avatar" {...props}>
      <AvatarImage data-testid="a-avatar-image" src={src} alt={alt} />
    </AvatarRoot>
  );
}
