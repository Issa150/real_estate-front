import { useState } from "react";
import type { PropertyType } from "../types/PropertyTypes";

type PropertyFormProps = {
  initialData?: PropertyType;
  onSubmit: (data: PropertyType) => void;
  onCancel: () => void;
};
export default function PropertyForm({ initialData, onSubmit, onCancel }: PropertyFormProps) {
  const [formData, setFormData] = useState(initialData || { /* default empty values */ });
  return (
    <>
      
    </>
  );
}