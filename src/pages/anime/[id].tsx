import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

interface AnimeDetailsProps {
  anime: {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number;
    synopsis: string;
    episodes: number;
    status: string;
    studio: string;
    studios: { name: string }[]; // Perbaikan: studios sebagai array objek dengan properti name
  };
}

const AnimeDetail: React.FC<AnimeDetailsProps> = ({ anime }) => {
  console.log(anime);
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          width={300}
          height={450}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{anime.title}</h1>
          <p className="text-gray-600 mt-2">{anime.synopsis}</p>
          <p className="mt-4 text-lg font-semibold">⭐ {anime.score} / 100</p>
          <p className="text-gray-700 mt-2">📺 Episodes: {anime.episodes}</p>
          <p className="text-gray-700">📌 Status: {anime.status}</p>
          <p className="text-gray-700">🏢 Studio: {anime.studios[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      anime: data.data,
    },
  };
};

export default AnimeDetail;
