// Organism
import { IOHeader, OHeader } from "../../organisms/o-header";
import { IOFooter, OFooter } from "../../organisms/o-footer";

// Template
import {
  ITBriefDescription,
  TBriefDescription,
} from "../../templates/t-briefing-description";
import styled from "styled-components";

interface IPBriefDescription {
  oHeaderProps: IOHeader;
  tBriefDescriptionProps: ITBriefDescription;
  oFooterProps: IOFooter;
}

const PBriefDescriptionStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.ref.colors.color_white};
  display: flex;
  flex-direction: column;

  & > [id="o-footer"] {
    margin-top: auto;
  }
`;

export const PBriefDescription = ({ ...props }: IPBriefDescription) => {
  return (
    <PBriefDescriptionStyled>
      <OHeader {...props.oHeaderProps} />
      <TBriefDescription {...props.tBriefDescriptionProps} />
      <OFooter {...props.oFooterProps} />
    </PBriefDescriptionStyled>
  );
};
