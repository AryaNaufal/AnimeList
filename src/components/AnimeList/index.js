import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {api.data.map((anime) => (
        <Link href={`${anime.mal_id}`}>
          <Image src={anime.images.webp.large_image_url} width={350} height={350} alt="..." className="w-full max-h-64 object-cover" />
          <h3 className="font-bold text-md md:text-xl p-4">{anime.title}</h3>
        </Link>
      ))}

    </div>
  )
}

export default AnimeList