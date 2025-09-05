// pages/EntityList.tsx
import { useParams, Link } from "react-router";
import React, { Suspense } from 'react';

// Use React.lazy() for dynamic imports
const componentMap = {
  property: React.lazy(() => import('../components/PropertyList')),
  requests: React.lazy(() => import('../components/RequestsList')),
  deals: React.lazy(() => import('../components/DealsList')),
  users: React.lazy(() => import('../components/UsersList')),
  flags: React.lazy(() => import('../components/FlagsList')),
};

export default function EntityItems() {
  const { entity } = useParams<{ entity: string }>();


  // type guard or direct check to ensure the entity is valid
  const ListComponent = entity ? componentMap[entity as keyof typeof componentMap] : null;
  const capitalizedEntity = entity ? entity.charAt(0).toUpperCase() + entity.slice(1) : '';

  if (!ListComponent) {
    return <div>List not found.</div>;
  }

  return (
    <div>
      <h1>{capitalizedEntity} List</h1>
      <Link to={`/backoffice/${entity}/new`} className="btn">+ New</Link>
      <div className="mt-4 space-y-2">
        {/* Use Suspense for lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <ListComponent />
        </Suspense>
      </div>
    </div>
  );
}