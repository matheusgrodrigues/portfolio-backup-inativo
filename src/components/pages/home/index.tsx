import { ReactNode } from "react";

import { AvatarImage, AvatarRoot } from "../../atoms";

export default function PageHome(): ReactNode {
  return (
    <AvatarRoot>
      <AvatarImage
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      ></AvatarImage>
    </AvatarRoot>
  );
}
