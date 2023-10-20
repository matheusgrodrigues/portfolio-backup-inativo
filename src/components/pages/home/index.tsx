import { ReactNode } from "react";

import { AAvatar } from "../../atoms";
import { AIcon } from "../../atoms/a-icon";
import { ADisplay } from "../../atoms/a-display";
import { AText } from "../../atoms/a-text";
import { AButton } from "../../atoms/a-button";
import { OHeader } from "../../molecules/o-header";

export default function PHome(): ReactNode {
  return (
    <>
      <OHeader
        avatar={{ url: "/images/avatar.jpeg", alt: "" }}
        toggleTheme={() => null}
      />

      <AAvatar src="/images/avatar.jpeg" alt="" $variant="md" />

      <AIcon icon="sun" height={32} />

      <ADisplay $variant="lg" fontWeight="semibold" color="gradient">
        Display
      </ADisplay>

      <AText $variant="xl" fontWeight="semibold" color="gray50">
        A-Text
      </AText>

      <AButton
        $variant="lg"
        $background="color_white"
        $fontSize="fs_textMd"
        $fontWeight="fw_semibold"
        $color="color_gray500"
      >
        AButton
      </AButton>
    </>
  );
}
