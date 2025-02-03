import Link from "next/link";

interface AnimeProps {
  className?: string;
  anime: {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number;
    synopsis: string;
    studio: string;
    type: string;
  };
}

const AnimeCard: React.FC<AnimeProps> = ({ anime }) => {
//   console.log(anime, "anime");
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 hover:shadow-lg transition-shadow"
    >
      {/* Anime Image */}
      <div className="relative w-full h-40">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {anime.type}
        </div>
        <div className="absolute top-2 right-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded font-semibold">
          {anime.score} %
        </div>
      </div>

      {/* Anime Title */}
      <h2 className="text-lg font-semibold mt-2 truncate">{anime.title}</h2>

      {/* Anime Description */}
      <p className="text-gray-600 text-sm line-clamp-2 mt-1">
        {anime.synopsis}
      </p>

      {/* Studio Name */}
      <div className="mt-2 flex items-center text-gray-500 text-sm font-medium">
        <span className="mr-2">📁</span> {anime.studio}
      </div>
    </Link>
  );
};

export default AnimeCard;
