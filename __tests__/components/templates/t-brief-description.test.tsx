import renderer from "react-test-renderer";

import React, { useState } from "react";

// Template
import {
  ITBriefDescription,
  TBriefDescription,
} from "@/src/components/templates/t-briefing-description";

// Theme
import { ThemeProvider } from "@/src/theme/helpers/theme-provider";
import { themeLight } from "@/src/theme";

// Mocks
import { tBriefDescriptionMock } from "@/__mocks__/components/templates/t-brief-description-mock";
import { oHeaderAvatarMock } from "@/__mocks__/components/organism/o-header-mock";

describe("Deve renderizar o TBriefDescription, corretamente", () => {
  const handleDownloadCV = jest.fn();
  const handleSubmitContactForm = jest.fn();

  it("Deve preservar a estrutura visual do TBriefDescription", () => {
    const three = renderer
      .create(
        <ThemeProvider theme={themeLight}>
          <TBriefDescription
            {...tBriefDescriptionMock}
            handleDownloadCV={handleDownloadCV}
            handleSubmitContactForm={handleSubmitContactForm}
          />
        </ThemeProvider>
      )
      .toJSON();

    expect(three).toMatchSnapshot();
  });
});
