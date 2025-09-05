// src/components/RequestsList.tsx
import { lazy, Suspense } from 'react';
import { useRequestManage } from '../hooks/requests/useRequestManage';
import { useFetchRequests } from '../hooks/requests/useFetchRequests';
const RequestsTable = lazy(() => import('./RequestsTable'));



export default function RequestsList() {
  const { data, isLoading, isError, error } = useFetchRequests();
  const { acceptRequest, rejectRequest } = useRequestManage();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error fetching requests:", error);
    return (
      <div>
        Error loading requests.
        <pre style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
          {error instanceof Error ? error.message : JSON.stringify(error)}
        </pre>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Requests</h2>
      <div className="p-4 rounded-2xl shadow-sm">
        <Suspense fallback={<div>Loading table...</div>}>
          {
            data && data.length > 0 && (
              <RequestsTable
                data={data}
                onAccept={acceptRequest}
                onReject={rejectRequest}
              />
            )
          }
        </Suspense>
      </div>
    </>
  );
}