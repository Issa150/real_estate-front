// src/features/ClientProfileFeatures/components/ClientInfoForm.tsx

import React, { useState, useEffect } from 'react';
import type { ClientDetailsType, FamilyStatusEnum } from '../ProfileClientTypes';

type ClientInfoFormProps = {
  client: ClientDetailsType;
  onSave: (data: Partial<ClientDetailsType>) => void;
  onCancel: () => void;
  isSaving: boolean;
};

/**
 * Form component for editing client-specific details.
 */
export default function ClientInfoForm({ client, onSave, onCancel, isSaving }: ClientInfoFormProps) {
//   const [isverfiledOwner, setIsVerifiedOwner] = useState(client.isverfiledOwner);
  const [familyStatus, setFamilyStatus] = useState<FamilyStatusEnum>(client.familyStatus);
  const [isHandicapped, setIsHandicapped] = useState(client.isHandicapped);
  const [personalIncome, setPersonalIncome] = useState(client.personalIncome);
  const [householdIncome, setHouseholdIncome] = useState(client.householdIncome);
//   const [isPriority, setIsPriority] = useState(client.isPriority);

  // Update form fields if the client prop changes
  useEffect(() => {
    // setIsVerifiedOwner(client.isverfiledOwner);
    setFamilyStatus(client.familyStatus);
    setIsHandicapped(client.isHandicapped);
    setPersonalIncome(client.personalIncome);
    setHouseholdIncome(client.householdIncome);
    // setIsPriority(client.isPriority);
  }, [client]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const myData = onSave({
    //   isverfiledOwner,
      familyStatus,
      isHandicapped,
      personalIncome,
      householdIncome,
    //   isPriority,
    });
    console.log("❤️",myData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control gap-4">
      {/* Verified Owner Checkbox */}
      {/* <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isverfiledOwner}
          onChange={(e) => setIsVerifiedOwner(e.target.checked)}
          id="isVerifiedOwner"
        />
        <label htmlFor="isVerifiedOwner" className="label cursor-pointer">
          <span className="label-text text-neutral-content">Verified Owner</span>
        </label>
      </div> */}

      {/* Family Status Select */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Family Status</span>
        </label>
        <select
          className="select select-bordered w-full select-primary"
          value={familyStatus}
          onChange={(e) => setFamilyStatus(e.target.value as FamilyStatusEnum)}
        >
          <option value="CELIBATAIRE">Célibataire</option>
          <option value="MARIE">Marié(e)</option>
          <option value="DIVORCE">Divorcé(e)</option>
          <option value="VEUF">Veuf(ve)</option>
          <option value="AUTRE">Autre</option>
        </select>
      </div>

      {/* Is Handicapped Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isHandicapped}
          onChange={(e) => setIsHandicapped(e.target.checked)}
          id="isHandicapped"
        />
        <label htmlFor="isHandicapped" className="label cursor-pointer">
          <span className="label-text text-neutral-content">Is Handicapped</span>
        </label>
      </div>

      {/* Personal Income Input */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Personal Income (€)</span>
        </label>
        <input
          type="number"
          placeholder="Personal Income"
          className="input input-bordered w-full input-primary"
          value={personalIncome}
          onChange={(e) => setPersonalIncome(Number(e.target.value))}
          min="0"
        />
      </div>

      {/* Household Income Input */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Household Income (€)</span>
        </label>
        <input
          type="number"
          placeholder="Household Income"
          className="input input-bordered w-full input-primary"
          value={householdIncome}
          onChange={(e) => setHouseholdIncome(Number(e.target.value))}
          min="0"
        />
      </div>

      {/* Priority Client Checkbox */}
      {/* <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          checked={isPriority}
          onChange={(e) => setIsPriority(e.target.checked)}
          id="isPriority"
        />
        <label htmlFor="isPriority" className="label cursor-pointer">
          <span className="label-text text-neutral-content">Priority Client</span>
        </label>
      </div> */}

      <div className="flex justify-end gap-2 mt-4">
        <button type="button" className="btn btn-ghost" onClick={onCancel} disabled={isSaving}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" disabled={isSaving}>
          {isSaving ? <span className="loading loading-spinner"></span> : "Save Changes"}
        </button>
      </div>
    </form>
  );
}