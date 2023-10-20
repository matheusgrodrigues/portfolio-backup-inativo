import styled from "styled-components";

// Atoms
import { AAvatar } from "../atoms";
import { AIcon } from "../atoms/a-icon";

const OHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IOHeader {
  avatar: {
    url: string;
    alt: string;
  };
  toggleTheme: () => void;
}

export const OHeader = ({ avatar, toggleTheme }: IOHeader) => {
  return (
    <OHeaderStyled>
      <AAvatar src={avatar.url} alt={avatar.alt} />
      <AIcon icon="sun" height={32} onClick={toggleTheme} />
    </OHeaderStyled>
  );
};
