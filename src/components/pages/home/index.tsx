import { ReactNode } from "react";

import { AAvatar } from "../../atoms";
import { AIcon } from "../../atoms/a-icon/a-icon";

export default function PageHome(): ReactNode {
  return (
    <>
      <AAvatar src="/images/avatar.jpeg" alt="" variant="md" />

      <div>
        <AIcon icon="sun" height={32} />
      </div>
    </>
  );
}
