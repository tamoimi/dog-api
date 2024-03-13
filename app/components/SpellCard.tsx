import { API_URL } from "../api/harry-potter";

async function getSpells() {
  const response = await fetch(`${API_URL}/spells`);
  const json = await response.json();
  return json;
}

export default async function SpellCard() {
  const spells = await getSpells();

  // spells 배열이 비어있지 않는 경우에 랜덤 인덱스 생성
  const randomSpellIndex =
    spells && spells.length > 0 ? Math.floor(Math.random() * spells.length) : null;

  const randomSpell = spells && randomSpellIndex !== null ? spells[randomSpellIndex] : null;

  return (
    <div className="w-full">
      <p className="text-xl font-semibold mb-2">Today&apos;s spell ✨</p>
      {randomSpell && (
        <div className="">
          <div className="flex items-start gap-2.5">
            <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {randomSpell.name} 🖋
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                {randomSpell.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
