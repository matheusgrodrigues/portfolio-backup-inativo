// Organism
import { OHeader } from "../../organisms/o-header";
import { OFooter } from "../../organisms/o-footer";

interface IPBriefDescription {}

export const PBriefDescription = ({}: IPBriefDescription) => {
  return (
    <>
      <OHeader
        avatar={{ url: "/images/avatar.jpeg", alt: "" }}
        toggleTheme={() => null}
      />

      <OFooter />
    </>
  );
};
