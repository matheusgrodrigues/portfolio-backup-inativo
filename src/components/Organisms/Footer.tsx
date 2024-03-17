import { useRouter } from "next/navigation";

import styled from "styled-components";

import { Icon } from "../Atoms/Icon";

const FooterStyled = styled.footer``;

export interface FooterProps {
   linkedinUrl: string;
   githubUrl: string;
   siteUrl: string;
}

export const Footer = ({ linkedinUrl, githubUrl, siteUrl }: FooterProps) => {
   const router = useRouter();

   return (
      <FooterStyled data-testid="footer" id="footer">
         <p>
            © 2023 <a href={siteUrl}>matheusgomesdev</a>.
         </p>

         <div>
            <Icon icon="github-square" callback={() => router.push(githubUrl)} height={32} width={32} />
            <Icon icon="linkedin-rounded" callback={() => router.push(linkedinUrl)} height={32} width={32} />
         </div>
      </FooterStyled>
   );
};
