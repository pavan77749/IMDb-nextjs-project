"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
  const [search,setSearch] = useState("")
  const router = useRouter()
  const handleSubmit = (e) =>{
    e.preventDefault();
    router.push(`/search/${search}`)

  }
  return (
    <form className="flex justify-between px-5 max-w-6xl gap-5 mx-auto" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search Movie..." className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 border p-4 mt-2 text-amber-600" value={search} onChange={(e)=> setSearch(e.target.value)} />
      <button className="text-amber-600 disabled:text-gray-400 border p-4 mt-2 rounded-lg" disabled={search === ""} type="submit">Search</button>
    </form>
  )
}
