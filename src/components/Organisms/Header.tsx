import styled from "styled-components";

import { bpHelper } from "@/src/core/theme";

import { Avatar, Icon } from "../Atoms";

const HeaderStyled = styled.div`
   justify-content: space-between;
   align-items: center;
   padding: 0 ${(props) => props.theme.ref.spacing.sp16};
   display: flex;
   height: 72px;
   width: 100%;

   ${(props) => bpHelper(props.theme.ref.bp.bp_sm, `height: 82px;`)}
`;

export interface HeaderProps {
   handleToggleTheme: () => void;

   avatar: {
      src: string;
      alt: string;
   };
}

export const Header = ({ handleToggleTheme, avatar }: HeaderProps) => {
   return (
      <HeaderStyled>
         <Avatar src={avatar.src} alt={avatar.alt} />
         <Icon onClick={handleToggleTheme} height={32} icon="sun" />
      </HeaderStyled>
   );
};
