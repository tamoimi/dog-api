import Image from "next/image";
import { API_URL } from "../api/harry-potter";
import NavBar from "./NavBar";

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
      <div className="p-5">
        <NavBar />
        <div className=" m-auto mt-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <Image
            className="rounded-t-lg"
            src={character.image}
            alt={character.name}
            width={300}
            height={500}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>
            <ul className=" bg-neutral-100 p-1 rounded-xl my-2">
              {character.alternate_names && character.alternate_names.length > 0 ? (
                character.alternate_names.map((name: string, index: number) => (
                  <li key={index}>-{name}</li>
                ))
              ) : (
                <li>No alternate names available</li>
              )}
            </ul>
            <div className="flex flex-col gap-1">
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>House: {character.house}</p>
              <p>Date of Birth: {character.dateOfBirth}</p>
              <p>Wizard: {character.wizard ? "Yes" : "No"}</p>
              <p>Ancestry: {character.ancestry}</p>
              <p>Eye Colour: {character.eyeColour}</p>
              <p>Hair Colour: {character.hairColour}</p>
              <p>Wand: {`${character.wand.wood} with a ${character.wand.core}`}</p>
              <p>Patronus: {character.patronus}</p>
              <p>Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}</p>
              <p>Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}</p>
              <p>Actor: {character.actor}</p>
              <p>Alive: {character.alive ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
