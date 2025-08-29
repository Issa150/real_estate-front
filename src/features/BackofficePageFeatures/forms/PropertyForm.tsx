// PropertyForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import type { PropertyDTO, PropertyFormProps } from '../types/PropertyTypes';
import type { ListingTypeEnum } from '../../OfferSinglePageFeatures/OfferSingleType';
import { saveProperty, updateProperty } from '../api/BackofficePropertyAPi';
import { useNavigate } from 'react-router';

const PropertyForm: React.FC<PropertyFormProps> = ({ mode, id, initialData }) => {
  const navigate = useNavigate();
  // Define the mutation function with the correct type
  const mutation = useMutation<void, Error, PropertyDTO>({
    mutationFn: mode === "create" ? saveProperty : (data: PropertyDTO) => updateProperty(id!, data),
  });

  const formik = useFormik({
    initialValues: initialData || {
      // title: 'New Property 2',
      description: ' big house',
      price: 320000.25,
      // type: 'T2',
      rooms: 2,
      area: 34.78,
      isAvailable: true,
      listingType: "SALE" as ListingTypeEnum,
      city: 'Lille',
      department: 'Haut de france',
      address: 'PLace de la republic',
      ownerId: 5,
      agentId: 2,
      agencyId: 1,
    },
    onSubmit: (values) => {
      mutation.mutate(values);
      navigate('/backoffice/properties');
    },
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{mode === "create" ? "Create Property" : `Edit Property ${id}`}</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Property Title</label>
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div> */}

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>

        {/* <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Type</label>
          <select
            name="type"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.type}>

            <option value="T1">T1</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
            <option value="T4">T4</option>
            <option value="T5">T5</option>
            <option value="T6">T6</option>
          </select>
        </div> */}

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Rooms</label>
          <input
            type="number"
            name="rooms"
            placeholder="Rooms"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.rooms}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Area (sq ft)</label>
          <input
            type="number"
            name="area"
            placeholder="Area (sq ft)"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.area}
          />
        </div>

        {/* <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Status</label>
          <input
            type="text"
            name="status"
            placeholder="Status"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.isAvailable}
          />
        </div> */}

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Listing Type</label>
          {/* <input
            type="text"
            name="listingType"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.listingType}
          /> */}
          <select
            name="listingType"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.listingType}>
              
            <option value="RENT">Rent</option>
            <option value="SALE">Sell</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Department</label>
          <input
            type="text"
            name="department"
            placeholder="Department"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.department}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Owner ID</label>
          <input
            type="text"
            name="ownerId"
            placeholder="Owner ID"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.ownerId}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Agent ID</label>
          <input
            type="text"
            name="agentId"
            placeholder="Agent ID"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.agentId}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-left font-semibold">Agency ID</label>
          <input
            type="text"
            name="agencyId"
            placeholder="Agency ID"
            className="input input-bordered w-full"
            onChange={formik.handleChange}
            value={formik.values.agencyId}
          />
        </div>

        <button type="submit" className="btn bg-green-600 hover:bg-green-400 w-full">
          {mode === "create" ? "Create Property" : "Update Property"}
        </button>
        <button type='reset' onClick={()=> navigate('/backoffice/property')} className="btn btn-primary w-full">
          Cancel
        </button>
      </form>


      {mutation.isError && <div className="text-red-500 mt-2">Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div className="text-green-500 mt-2">Property saved successfully!</div>}
    </div>
  );
};

export default PropertyForm;
