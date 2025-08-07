// src/features/ClientProfileFeatures/components/UserInfoForm.tsx

import React, { useState, useEffect } from 'react';
import type { UserGeneralInfoType /*, UserProfileType*/ } from '../ProfileClientTypes';

type UserInfoFormProps = {
  user: UserGeneralInfoType;
  // onSave: (data: Partial<Omit<UserProfileType, 'client' | 'id' | 'createdAt'>>) => void;
  onSave: (data: Partial<Omit<UserGeneralInfoType, 'id'| 'profilePicture'>>) => void;
  onCancel: () => void;
  isSaving: boolean;
};

/**
 * Form component for editing user's general information.
 */
export default function GeneralInfoForm({ user, onSave, onCancel, isSaving }: UserInfoFormProps) {
  const [firstname, setFirstname] = useState(user.firstname || '');
  const [lastname, setLastname] = useState(user.lastname || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');

  // Update form fields if the user prop changes (e.g., after a successful save)
  useEffect(() => {
    setFirstname(user.firstname || '');
    setLastname(user.lastname || '');
    setEmail(user.email || '');
    setPhone(user.phone || '');
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ email, firstname, lastname,  phone });
  };

  return (
    <form onSubmit={handleSubmit} className="form-control gap-4">
      {/* First Name */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">First Name</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full input-primary"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full input-primary"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Email</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full input-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="label">
          <span className="label-text text-neutral-content">Phone</span>
        </label>
        <input
          type="tel" // 'tel' for better mobile keyboard experience
          placeholder="Phone Number"
          className="input input-bordered w-full input-primary"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

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