"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const HandleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
    }
  }
  return (
    <div>
      <input type="text"
        className="border border-gray-300 w-[150px] sm:w-[250px]:md rounded-md px-2"
        placeholder="Search"
        ref={searchRef}
        onKeyDown={HandleSearch}
      />
      <button onClick={HandleSearch}>Search</button>
    </div>
  )
}

export default InputSearch
