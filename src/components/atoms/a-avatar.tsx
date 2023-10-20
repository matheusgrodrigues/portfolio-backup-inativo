import { styled } from "styled-components";

import * as RadixAvatar from "@radix-ui/react-avatar";

type TVariant = "md";

interface IAvatarRoot extends RadixAvatar.AvatarProps {
  "data-testid"?: string;
  $variant?: TVariant;
}

const AvatarRoot = styled(RadixAvatar.Root).attrs<IAvatarRoot>((props) => ({
  as: "span",
  "data-testid": "a-avatar",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: ${({ $variant }) => ($variant === "md" ? "92px" : "45px")};
  height: ${({ $variant }) => ($variant === "md" ? "92px" : "45px")};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.ref.colors.color_gray500};
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

interface IAvatarImage extends RadixAvatar.AvatarImageProps {
  "data-testid"?: string;
}

const AvatarImage = styled(RadixAvatar.Image).attrs<IAvatarImage>((props) => ({
  as: "img",
  "data-testid": "a-avatar-image",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  overflow: hidden;
`;

export interface IAvatar extends RadixAvatar.AvatarProps {
  src: string;
  alt: string;
  $variant?: TVariant;
}

export function AAvatar({ ...props }: IAvatar) {
  const { src, alt } = props;

  return (
    <AvatarRoot {...props}>
      <AvatarImage src={src} alt={alt} />
    </AvatarRoot>
  );
}
