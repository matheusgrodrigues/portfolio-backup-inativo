import styled from "styled-components";

// Atoms
import { AAvatar } from "../atoms";
import { AIcon } from "../atoms/a-icon";

const OHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export interface IOHeader {
  avatar: {
    src: string;
    alt: string;
  };
  handleToggleTheme: () => void;
}

export const OHeader = ({ avatar, handleToggleTheme }: IOHeader) => {
  return (
    <OHeaderStyled>
      <AAvatar src={avatar.src} alt={avatar.alt} />
      <AIcon icon="sun" height={32} onClick={handleToggleTheme} />
    </OHeaderStyled>
  );
};
