import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllPropertiesForClient } from "../api/api";

export function useFilteredOffers() {
  const [listingType, setListingType] = useState<"buy" | "rent" | "">("");
  const [rooms, setRooms] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const { data, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllPropertiesForClient,
  });

  const normalizedListingType =
    listingType === "buy" ? "SALE" :
      listingType === "rent" ? "RENT" : "";

  const filtered = data?.filter((item) =>
    (normalizedListingType ? item.listingType === normalizedListingType : true) &&
    (rooms !== null ? item.rooms === rooms : true) &&
    item.price >= minPrice &&
    item.price <= maxPrice
  ) || [];

  return {
    filtered,
    listingType,
    rooms,
    minPrice,
    maxPrice,
    isLoading,
    setListingType,
    setRooms,
    setMinPrice,
    setMaxPrice,
  };
}
