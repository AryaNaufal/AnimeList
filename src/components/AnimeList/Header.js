import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-xl">{title}</h1>
      {
        linkHref && linkTitle
          ? <Link href={linkHref} className="text-sm sm:text-xl underline hover:text-blue-600">{linkTitle}</Link>
          : null
      }

    </div>
  )
}

export default Header
