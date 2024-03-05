import Image from "next/image";
import { API_URL } from "../api/harry-potter";

async function getCharacterDetail(id: string) {
  const response = await fetch(`${API_URL}/character/${id}`);
  const data = await response.json();
  // 데이터가 배열인 경우 첫 번째 요소 반환, 그렇지 않으면 데이터 그대로 반환
  return Array.isArray(data) ? data[0] : data;
}

export default async function DetailCard({ id }: { id: string }) {
  const character = await getCharacterDetail(id);
  console.log("character", character);
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              {/* Alternate Names: {character.alternate_names.join(", ")} */}
            </p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>House: {character.house}</p>
            <p>Date of Birth: {character.dateOfBirth}</p>
            <p>Wizard: {character.wizard ? "Yes" : "No"}</p>
            <p>Ancestry: {character.ancestry}</p>
            <p>Eye Colour: {character.eyeColour}</p>
            <p>Hair Colour: {character.hairColour}</p>
            <p>
              {/* Wand:{" "}
              {`${character.wand.wood} wood with a ${character.wand.core} core ${character.wand.length}"`} */}
            </p>
            <p>Patronus: {character.patronus}</p>
            <p>Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}</p>
            <p>Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}</p>
            <p>Actor: {character.actor}</p>
            <p>Alive: {character.alive ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
