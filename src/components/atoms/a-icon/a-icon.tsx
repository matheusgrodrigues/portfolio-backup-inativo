import {
  SunIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

import { IconProps } from "@radix-ui/react-icons/dist/types";

type TAIcon = "sun" | "linkedin-rounded" | "github-rounded" | "github-square";

interface IAIcon extends IconProps {
  icon: TAIcon;
}

export const AIcon = ({ icon, ...props }: IAIcon) => {
  return (
    <>
      {icon === "sun" && <SunIcon width={"200px"} {...props} />}
      {icon === "linkedin-rounded" && <LinkedInLogoIcon {...props} />}
      {icon === "github-rounded" && <LinkedInLogoIcon {...props} />}
      {icon === "github-square" && <GitHubLogoIcon {...props} />}
    </>
  );
};
