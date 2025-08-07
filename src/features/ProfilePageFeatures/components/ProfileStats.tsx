// features/profile/components/ProfileStats.tsx
export function ProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="stat bg-base-200 rounded-lg p-4">
        <div className="stat-title">Properties</div>
        <div className="stat-value text-primary">12</div>
      </div>
      <div className="stat bg-base-200 rounded-lg p-4">
        <div className="stat-title">Active Deals</div>
        <div className="stat-value text-secondary">5</div>
      </div>
      <div className="stat bg-base-200 rounded-lg p-4">
        <div className="stat-title">Pending Requests</div>
        <div className="stat-value text-accent">3</div>
      </div>
      <div className="stat bg-base-200 rounded-lg p-4">
        <div className="stat-title">Client Rating</div>
        <div className="stat-value">4.8</div>
      </div>
    </div>
  );
}