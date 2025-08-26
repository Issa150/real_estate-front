// pages/EntityForm.tsx
import { useParams } from "react-router";
import { formsRegistry } from "../routes/FormsRegistry";

export default function EntityForm({ mode }: { mode: "create" | "edit" }) {
  const { entity, id } = useParams();

  if (!entity) return <p>No entity selected</p>;

  const FormComponent = formsRegistry[entity];

  if (!FormComponent) {
    return <p>No form registered for entity: {entity}</p>;
  }

  return <FormComponent mode={mode} id={id} />;
}
