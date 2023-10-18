import { ReactNode } from "react";

import { AAvatar } from "../../atoms";
import { AIcon } from "../../atoms/a-icon";
import { ADisplay } from "../../atoms/a-display";

export default function PHome(): ReactNode {
  return (
    <>
      <AAvatar src="/images/avatar.jpeg" alt="" variant="md" />

      <AIcon icon="sun" height={32} />

      <ADisplay variant="lg" fontWeight="semibold" color="gradient">
        Display
      </ADisplay>
    </>
  );
}
