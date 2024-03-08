import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../api/harry-potter";

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
              <Link href={"/"}>
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  {p.name}
                </h5>
              </Link>
              <p className=" text-gray-700 dark:text-gray-400 font-medium">
                House: <span>{p.house}</span>
              </p>
              <p className=" font-medium text-gray-700 dark:text-gray-400 mb-2">
                Gender: {p.gender}
              </p>
              <Link
                href={`/characters/${p.id}`}
                className="inline-flex items-center p-2 text-sm text-center text-white bg-yellow-900 rounded-lg hover:bg-yellow-800 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
