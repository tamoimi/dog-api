import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../api/harry-potter";
import { HiArrowSmallRight } from "react-icons/hi2";

async function getCharacter() {
  const response = await fetch(`${API_URL}/characters`);
  const json = await response.json();
  return json;
}

export default async function CharacterCard() {
  const characters = await getCharacter();

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        {characters?.slice(0, 20).map((p: any) => (
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={p.id}
          >
            <Link href={`/characters/${p.id}`}>
              <Image
                className="rounded-t-lg"
                src={p.image}
                alt={p.image}
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw"
              />
            </Link>
            <div className="p-2">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {p.name}
              </h5>

              <div className="flex gap-1">
                <span className=" text-neutral-700 font-semibold">House:</span>
                <span>{p.house}</span>
              </div>

              <Link
                href={`/characters/${p.id}`}
                className="inline-flex items-center font-semibold p-2 text-xs text-center bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-300 mt-3"
              >
                Read more
                <HiArrowSmallRight className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
