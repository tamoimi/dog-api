import DetailCard from "@/app/components/DetailCard";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";

export default async function CharacterDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <DetailCard id={id} />
    </Suspense>
  );
}
