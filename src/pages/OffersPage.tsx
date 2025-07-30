import { useState } from "react";
import { useFilteredOffers } from "../features/OffersPageFeatures/hooks/useFilteredOffers";
import OfferCard, { type UserRoleType } from "../components/blocks/OfferCard";

export default function OffersPage() {
  const {
    filtered,
    isLoading,
    listingType,
    rooms,
    minPrice,
    maxPrice,
    setListingType,
    setRooms,
    setMinPrice,
    setMaxPrice,
  } = useFilteredOffers();

  const [userRole, setUserRole] = useState<UserRoleType>("agent");

  // 👉 Pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 🔧 Change this value to increase/decrease items shown per page

  // 🧮 Calculate how many total pages based on filtered data
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // 🧱 Slice the filtered array to show only current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) return <div className="flex justify-center py-10"><span className="loading loading-spinner loading-lg"></span></div>;
  if (!filtered || filtered.length === 0) return <p className="text-center py-6 text-lg">No offers available.</p>;
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🏠 Available Properties</h2>
      {/* a button to toggle role for testing */}
      <div className="mt-8 text-center">
        <button
          className="btn btn-info btn-sm"
          onClick={() => setUserRole(userRole === "agent" ? "client" : "agent")}
        >
          Toggle Role (Current: {userRole.toUpperCase()})
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <select className="select select-bordered" value={listingType} onChange={(e) => setListingType(e.target.value as any)}>
          <option value="">All Listings</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>

        <select className="select select-bordered" value={rooms ?? ""} onChange={(e) => setRooms(Number(e.target.value) || null)}>
          <option value="">Any Rooms</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4">4+ Rooms</option>
        </select>

        <input
          type="number"
          className="input input-bordered"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />

        <input
          type="number"
          className="input input-bordered"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <button className="btn btn-outline btn-secondary" onClick={() => {
          setListingType("");
          setRooms(null);
          setMinPrice(0);
          setMaxPrice(1000000);
        }}>
          Clear Filters
        </button>
      </div>

      {/* Offer List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          // Render the OfferCard component for each item
          <OfferCard key={item.id} item={item} userRole={userRole} />
        ))}
      </div>


      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center">
        <div className="join">
          {/* First */}
          <button
            className={`join-item btn btn-outline ${currentPage === 1 ? "btn-disabled" : ""}`}
            onClick={() => setCurrentPage(1)}>
            « First
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;

            // Logic to hide and replace excess pages with "..."
            const isNearStart = currentPage <= 3;
            const isNearEnd = currentPage >= totalPages - 2;
            const isInMiddle = !isNearStart && !isNearEnd;

            const shouldShow =
              totalPages <= 5 ||
              pageNum === 1 ||
              pageNum === totalPages ||
              Math.abs(currentPage - pageNum) <= 1 ||
              (isNearStart && pageNum <= 3) ||
              (isNearEnd && pageNum >= totalPages - 2);

            if (!shouldShow) {
              // Only show one set of ellipses
              if (
                (pageNum === 2 && isNearEnd) ||
                (pageNum === totalPages - 1 && isNearStart) ||
                (isInMiddle && (pageNum === currentPage - 2 || pageNum === currentPage + 2))
              ) {
                return (
                  <button key={pageNum} className="join-item btn btn-disabled">
                    ...
                  </button>
                );
              }
              return null;
            }

            return (
              <button
                key={pageNum}
                className={`join-item btn ${currentPage === pageNum ? "btn-primary" : "btn-outline"
                  }`}
                onClick={() => setCurrentPage(pageNum)}>
                {pageNum}
              </button>
            );
          })}

          {/* Last */}
          <button
            className={`join-item btn btn-outline ${currentPage === totalPages ? "btn-disabled" : ""}`}
            onClick={() => setCurrentPage(totalPages)}>
            Last »
          </button>
        </div>
      </div>


      

    </div>
  );
}
