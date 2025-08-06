// features/profile/components/ClientInfoDisplay.tsx

import type { ClientDetailsType } from "../ProfileClientTypes";

export default function ClientInfoDisplay({ client }: { client: ClientDetailsType }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h3 className="card-title text-lg">Personal Status</h3>
          <div className="divider m-0"></div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-base-content/60">Family Status</p>
              <p className="font-medium capitalize">
                {client.familyStatus?.toLowerCase().replace('_', ' ')}
              </p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Special Status</p>
              <div className="flex gap-2 flex-wrap">
                {client.isHandicapped && (
                  <span className="badge badge-primary">Handicapped</span>
                )}
                {client.isPriority && (
                  <span className="badge badge-secondary">Priority</span>
                )}
                {client.isVerifiedOwner && (
                  <span className="badge badge-accent">Verified Owner</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h3 className="card-title text-lg">Financial Information</h3>
          <div className="divider m-0"></div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-base-content/60">Personal Income</p>
              <p className="font-medium">
                {client.personalIncome?.toLocaleString()} MAD/year
              </p>
            </div>
            <div>
              <p className="text-sm text-base-content/60">Household Income</p>
              <p className="font-medium">
                {client.householdIncome?.toLocaleString()} MAD/year
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}