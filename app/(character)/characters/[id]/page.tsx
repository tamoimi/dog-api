import DetailCard from "@/app/components/DetailCard";
import { Suspense } from "react";

export default async function CharacterDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <Suspense fallback={<>loading...</>}>
      <DetailCard id={id} />
    </Suspense>
  );
}
