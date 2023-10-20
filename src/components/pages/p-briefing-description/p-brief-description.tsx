// Organism
import { IOHeader, OHeader } from "../../organisms/o-header";
import { IOFooter, OFooter } from "../../organisms/o-footer";

// Template
import {
  ITBriefDescription,
  TBriefDescription,
} from "../../templates/t-briefing-description";

interface IPBriefDescription {
  oHeaderProps: IOHeader;
  tBriefDescriptionProps: ITBriefDescription;
  oFooterProps: IOFooter;
}

export const PBriefDescription = ({ ...props }: IPBriefDescription) => {
  return (
    <>
      <OHeader {...props.oHeaderProps} />
      <TBriefDescription {...props.tBriefDescriptionProps} />
      <OFooter {...props.oFooterProps} />
    </>
  );
};
