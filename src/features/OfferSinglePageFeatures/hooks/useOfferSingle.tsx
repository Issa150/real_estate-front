// features/OfferSingle/hooks/useSingleOffer.ts
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import type { PropertySingleType } from "../OfferSingleType";
import { getSingleOffer } from "../api/OfferSingleApi";

export function useOfferSingle() {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  return useQuery<PropertySingleType>({
    queryKey: ["singleOffer", numericId],
    queryFn: () => getSingleOffer(numericId),
    enabled: !!numericId,
  });
}
