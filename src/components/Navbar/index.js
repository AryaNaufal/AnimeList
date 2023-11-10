import Link from "next/link"
import InputSearch from "@/components/Navbar/InputSearch"

const Navbar = () => {
  return (
    <header className="bg-blue-600 p-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-white">Anime List</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar