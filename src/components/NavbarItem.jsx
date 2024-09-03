"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NavbarItemContent({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      className={`hover:text-amber-600 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
}

export default function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
}
