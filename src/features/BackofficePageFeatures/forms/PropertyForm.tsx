
// export default function PropertyForm({ initialData, onSubmit, onCancel }: PropertyFormProps) {
export default function PropertyForm({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  // const [formData, setFormData] = useState(initialData || { /* default empty values */ });
  return (
    <>
      <form>
      <h1>{mode === "create" ? "Create Property" : `Edit Property ${id}`}</h1>
      <input type="text" placeholder="Property Name" />
      <input type="text" placeholder="Location" />
      <button type="submit">Save</button>
    </form>
    </>
  );
}