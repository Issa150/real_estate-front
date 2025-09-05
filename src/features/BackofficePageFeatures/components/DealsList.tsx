// import { useParams } from "react-router";
import { useUserStore } from "../../../stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { getAllDealsForAnAgent } from "../api/BackofficeDealsApi";

export default function DealsList() {
  const userId = useUserStore((state) => state.id);
  // const { entity } = useParams<{ entity: string }>();
  // const capitalizedEntity = entity ? entity.charAt(0).toUpperCase() + entity.slice(1) : '';
  const queryKey = ["myDeals", userId];
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => getAllDealsForAnAgent(userId),
    enabled: !!userId,
  });



  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: any) => (
          { item }
          // <OfferCard key={item.id} item={item} /*userRole={userRole}*/ onOpenModal={handleOpenModal} />
        ))}
      </div>
    </>
  );
}