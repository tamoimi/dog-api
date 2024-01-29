import { getDetail } from "@/app/api/harry-potter";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailCard = () => {
  const router = useRouter();
  const { id } = router.query;
  //   const id = props.params.id;
  //   console.log("id", id);

  // swr --------------------------------------------------------------------------------------- swr
  const { data, error } = useSWR(id ? `/character/${id}` : null, getDetail);
  console.log("data", data);

  if (error) {
    console.error("Error fetching character details:", error);
    return <p>Error loading details</p>;
  }

  return (
    <>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          {/* Render other details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DetailCard;
