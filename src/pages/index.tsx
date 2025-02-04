import { useState } from "react";
import { useAnimeList } from "@/hooks/useAnimeList";
import AnimeCard from "@/components/AnimeCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAnimeList();

  // List of genres
  const genres = [
    "Action",
    "Fantasy",
    "Ecchi",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Slice of Life",
  ];

  // Filter anime berdasarkan search query dan genre
  const filteredAnime = data?.pages.flatMap((page) => page.data) || [];
  const displayedAnime = filteredAnime.filter(
    (anime) =>
      (!searchQuery ||
        anime.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedGenre ||
        anime.genres.some(
          (genre: { name: string }) => genre.name === selectedGenre
        ))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">We Boo</h1>
          <p className="text-gray-600">
            All of your favorites anime in the universe.
          </p>
        </div>
        <button className="text-gray-700 text-lg flex items-center">
          My List <span className="ml-2">🔖</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Anime..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Genres</option>
          {genres.map((genre: string) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="anime-grid">
        {displayedAnime.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasNextPage && (
        <div className="text-center mt-6">
          <button
            className="load-more"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
