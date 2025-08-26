// features/formsRegistry.ts

import DealsForm from "../forms/DealsForm";
import FlagsForm from "../forms/FlagsForm";
import PropertyForm from "../forms/PropertyForm";


export const formsRegistry: Record<string, React.ComponentType<{ mode: "create" | "edit"; id?: string }>> = {
  property: PropertyForm,
  deals: DealsForm,
  Flags: FlagsForm,
  // add more entities here...
};
