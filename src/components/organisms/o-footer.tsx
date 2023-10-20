import { useRouter } from "next/navigation";

import styled from "styled-components";

// Atoms
import { AIcon } from "../atoms/a-icon";

const OFooterStyled = styled.footer``;

export interface IOFooter {
  siteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const OFooter = ({ siteUrl, githubUrl, linkedinUrl }: IOFooter) => {
  const router = useRouter();

  return (
    <OFooterStyled>
      <p>
        © 2023 <a href={siteUrl}>matheusgomesdev</a>.
      </p>

      <div>
        <AIcon
          icon="github-square"
          width={32}
          height={32}
          callback={() => router.push(githubUrl)}
        />
        <AIcon
          icon="linkedin-rounded"
          width={32}
          height={32}
          callback={() => router.push(linkedinUrl)}
        />
      </div>
    </OFooterStyled>
  );
};
