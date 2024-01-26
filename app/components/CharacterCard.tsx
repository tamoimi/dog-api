import useSWR from "swr";
import { getCharacters } from "../api/harry-potter";
import Loading from "../loading";
import Image from "next/image";

const CharacterCard = () => {
  const { data, isLoading } = useSWR("api/characters", getCharacters, {
    refreshInterval: 86400000, // refresh once a day
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log("data", data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid md:grid-cols-2 sm:grid-cols-1">
            {data?.map((p: any) => (
              <div key={p.id} className="m-5">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{p.name}</h5>
                  <p className="text-gray-700 dark:text-gray-400">{p.house}</p>

                  <Image src={p.image} alt={p.image} width={200} height={200} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CharacterCard;
