import styled from "styled-components";

// Atoms
import { AAvatar } from "../atoms";
import { AIcon } from "../atoms/a-icon";
import { ADisplay } from "../atoms/a-display";
import { AText } from "../atoms/a-text";
import { AButton } from "../atoms/a-button";

const TBriefDescriptionStyled = styled.div``;

interface ITBriefDescription {}

export const TBriefDescription = ({}: ITBriefDescription) => {
  return (
    <TBriefDescriptionStyled>
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
    </TBriefDescriptionStyled>
  );
};
