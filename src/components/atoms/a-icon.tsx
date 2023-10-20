import {
  SunIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { IconProps } from "@radix-ui/react-icons/dist/types";

// Atoms
import { AButtonTransparent } from "./a-button";

type TAIcon = "sun" | "linkedin-rounded" | "github-rounded" | "github-square";

interface IAIcon extends IconProps {
  icon: TAIcon;
  callback?: () => void;
}

export const AIcon = ({ icon, callback, ...props }: IAIcon) => {
  return (
    <AButtonTransparent onClick={callback}>
      {icon === "sun" && <SunIcon width={"200px"} {...props} />}
      {icon === "linkedin-rounded" && <LinkedInLogoIcon {...props} />}
      {icon === "github-rounded" && <LinkedInLogoIcon {...props} />}
      {icon === "github-square" && <GitHubLogoIcon {...props} />}
    </AButtonTransparent>
  );
};
