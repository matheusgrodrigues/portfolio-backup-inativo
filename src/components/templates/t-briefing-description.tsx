import styled from "styled-components";

// Atoms
import { ADisplay } from "../atoms/a-display";
import { AText } from "../atoms/a-text";
import { AButton } from "../atoms/a-button";
import { IAvatar } from "../atoms/a-avatar";

const TBriefDescriptionStyled = styled.div``;

export interface ITBriefDescription {
  avatarBody: IAvatar;
  textName: string;
  linkedinUrl: string;
  githubUrl: string;
  handleDownloadCV: () => void;
  handleSubmitContactForm: () => void;
}

export const TBriefDescription = ({ ...props }: ITBriefDescription) => {
  return (
    <TBriefDescriptionStyled>
      <ADisplay $variant="lg" fontWeight="semibold" color="gradient">
        Programador Frontend
      </ADisplay>
      <ADisplay $variant="lg" fontWeight="semibold" color="gray900">
        apaixonado por criação de interfaces inovadoras
      </ADisplay>

      <AText $variant="xl" fontWeight="semibold" color="gray50">
        Visite meu perfil no Linkedin e explore meus projetos no GitHub para
        descobrir como minhas habilidades podem agregar valor á sua equipe.
      </AText>

      <AButton
        $variant="lg"
        $background="color_white"
        $fontSize="fs_textMd"
        $fontWeight="fw_semibold"
        $color="color_gray500"
        onClick={props.handleDownloadCV}
      >
        Download CV
      </AButton>

      <AButton
        $variant="lg"
        $background="color_white"
        $fontSize="fs_textMd"
        $fontWeight="fw_semibold"
        $color="color_gray500"
        onClick={props.handleSubmitContactForm}
      >
        Entre em Contato
      </AButton>
    </TBriefDescriptionStyled>
  );
};
