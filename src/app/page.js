import AnimeList from "@/components/AnimeList"
import Link from "next/link";

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const anime = await response.json();

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Populer</h1>
        <Link href="/populer" className="text-sm sm:text-xl underline hover:text-blue-600">Lihat Semua</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home