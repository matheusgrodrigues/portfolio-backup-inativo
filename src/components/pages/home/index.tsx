import { ReactNode } from "react";

import { AAvatar } from "../../atoms";
import { AIcon } from "../../atoms/a-icon";
import { ADisplay } from "../../atoms/a-display";
import { AText } from "../../atoms/a-text";

export default function PHome(): ReactNode {
  return (
    <>
      <AAvatar src="/images/avatar.jpeg" alt="" $variant="md" />

      <AIcon icon="sun" height={32} />

      <ADisplay $variant="lg" fontWeight="semibold" color="gradient">
        Display
      </ADisplay>

      <AText $variant="xl" fontWeight="semibold" color="gray50">
        A-Text
      </AText>
    </>
  );
}
