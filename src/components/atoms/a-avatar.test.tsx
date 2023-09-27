import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Atom
import { Avatar } from "./a-avatar";

describe("Deve renderizar o Avatar, corretamente", () => {
  // ==================================================================

  it("Deve renderizar o Avatar com  a prop, src.", () => {
    // Arrange
    const image_src =
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
    const image_alt = "";

    render(<Avatar src={image_src} alt={image_alt} />);

    // Act
    const get_avatar = screen.getByTestId("a-avatar");
    const get_avatar_image = screen.getByTestId("a-avatar-image");

    // Assert
    expect(get_avatar).toBeInTheDocument();
    expect(get_avatar_image).toBeInTheDocument();
    expect(get_avatar_image.getAttribute("src")).not.toHaveLength(0);
  });

  // ==================================================================

  it("Deve renderizar o Avatar com a prop, alt.", () => {
    // Arrange
    const image_src =
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";
    const image_alt = "Matheus";

    render(<Avatar src={image_src} alt={image_alt} />);

    // Act
    const get_avatar = screen.getByTestId("a-avatar");
    const get_avatar_image = screen.getByTestId("a-avatar-image");

    // Assert
    expect(get_avatar).toBeInTheDocument();
    expect(get_avatar_image).toBeInTheDocument();
    expect(get_avatar_image.getAttribute("alt")).not.toHaveLength(0);
  });
});
