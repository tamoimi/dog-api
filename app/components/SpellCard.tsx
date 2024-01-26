import useSWR from "swr";
import { getCharacters, getSpells } from "../api/harry-potter";
import Loading from "../loading";
import Image from "next/image";

const SpellCard = () => {
  const { data, isLoading } = useSWR("api/spells", getSpells, {
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
          <div className="grid gap-6 w-full">
            <p className="text-xl font-semibold">Today&apos;s spells ✨</p>
            {data?.slice(0, 3).map((s: any) => (
              <>
                <div className="flex items-start gap-2.5 ">
                  <div className="flex flex-col w-full  leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {s.name} 🖋
                      </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      {s.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SpellCard;
