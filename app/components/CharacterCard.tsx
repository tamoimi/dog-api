import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../api/harry-potter_api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getCharacter() {
  const response = await fetch(`${API_URL}/characters`);
  const json = await response.json();
  return json;
}

export default async function CharacterCard() {
  const characters = await getCharacter();

  return (
    <>
      {/* =------------------------------------------------------- */}

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        {characters?.slice(0, 20).map((p: any) => (
          <Card className="" key={p.id}>
            <Link href={`/characters/${p.id}`}>
              <CardHeader>
                <CardTitle> {p.name}</CardTitle>
                <CardDescription>{p.house}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  className="rounded"
                  src={p.image}
                  alt={p.image}
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="100vw"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/characters/${p.id}`}>
                  <Button>Read more</Button>
                </Link>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
