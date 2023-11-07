import Link from "next/link"
import Search from "@/components/Search"

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-white">Anime List</Link>
        <Search />
      </div>
    </header>
  )
}

export default Navbar