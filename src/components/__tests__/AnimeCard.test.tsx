import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AnimeCard from "../AnimeCard";

const mockAnime = {
  mal_id: 1,
  title: "Naruto",
  images: { jpg: { image_url: "https://example.com/naruto.jpg" } },
  score: 8.5,
  genres: [{ name: "Action" }],
};

describe("AnimeCard Component", () => {
  it("renders anime title", () => {
    render(<AnimeCard anime={mockAnime} />);
    expect(screen.getByText("Naruto")).toBeInTheDocument();
  });

  it("renders anime score", () => {
    render(<AnimeCard anime={mockAnime} />);
    expect(screen.getByText("8.5%")).toBeInTheDocument();
  });
});
