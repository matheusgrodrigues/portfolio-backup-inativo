import { styled } from "styled-components";

import * as RadixAvatar from "@radix-ui/react-avatar";

interface IAvatarRoot extends RadixAvatar.AvatarProps {
  "data-testid"?: string;
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<IAvatarRoot>((props) => ({
  as: "span",
  "data-testid": props["data-testid"] || "a-avatar",
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
  background-color: var(--black-a3);
`;

interface IAvatarImage extends RadixAvatar.AvatarImageProps {
  "data-testid"?: string;
}

const AvatarImage = styled(RadixAvatar.Image).attrs<IAvatarImage>((props) => ({
  as: "img",
  "data-testid": props["data-testid"] || "a-avatar-image",
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
    <AvatarRoot {...props}>
      <AvatarImage src={src} alt={alt} />
    </AvatarRoot>
  );
}