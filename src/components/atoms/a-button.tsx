import styled from "styled-components";

interface IAButton {
  $variant: "lg";
  $background: "color_white" | "color_gradient_primary600";
  $fontSize: "fs_textMd";
  $fontWeight: "fw_semibold";
  $color: "color_white" | "color_gray500";
}

export const AButton = styled.button<IAButton>`
  width: 100%;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  ${(props) => {
    switch (props.$variant) {
      case "lg":
        return `
            max-width: 172px;
            height: 44px;
            `;
        break;
    }
  }}

  background: ${(props) => props.theme.ref.colors[props.$background]};
  color: ${(props) => props.theme.ref.colors[props.$color]};
  font-weight: ${(props) => props.theme.ref.font[props.$fontWeight]};
  font-size: ${(props) => props.theme.ref.font[props.$fontSize]};
`;
