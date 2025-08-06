import type { ClientDetailsType } from "../ProfileClientTypes";


type ClientInfoDisplayProps = {
  client: ClientDetailsType;
};

/**
 * Component to display client-specific details.
 */
export default function ClientInfoDisplay({ client }: ClientInfoDisplayProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base-content">
      <p className="text-md mb-1">
        <strong className="text-accent">{client.isVerifiedOwner ? "Property Owner" : "Client"} ✅</strong>{' '}
        {/* <span className={`badge ${client.isverfiledOwner ? 'badge-success' : 'badge-error'} badge-outline ml-1`}>
          {client.isverfiledOwner ? 'Yes' : 'No'}
        </span> */}
      </p>
      <p className="text-md mb-1">
        <strong className="text-accent">Family Status:</strong> {client.familyStatus}
      </p>
      <p className="text-md mb-1">
        <strong className="text-accent">Handicapped:</strong>{' '}
        <span className={`badge ${client.isHandicapped ? 'badge-info' : 'badge-ghost'} badge-outline ml-1`}>
          {client.isHandicapped ? 'Yes' : 'No'}
        </span>
      </p>
      <p className="text-md mb-1">
        <strong className="text-accent">Personal Income:</strong> {client.personalIncome?.toLocaleString('fr-FR')} €
      </p>
      <p className="text-md mb-1">
        <strong className="text-accent">Household Income:</strong> {client.householdIncome?.toLocaleString('fr-FR')} €
      </p>
      <p className="text-md mb-1">
        <strong className="text-accent">Priority Client:</strong>{' '}
        <span className={`badge ${client.isPriority ? 'badge-warning' : 'badge-ghost'} badge-outline ml-1`}>
          {client.isPriority ? 'Yes' : 'No'}
        </span>
      </p>
    </div>
  );
}