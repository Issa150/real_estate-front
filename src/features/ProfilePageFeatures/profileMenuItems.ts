// features/profile/profileMenuItems.ts
export type MenuItem = { label: string; path: string; icon?: string };

const sharedItems: MenuItem[] = [
  { label: 'Personal Information', path: '', icon: 'person' },
  { label: 'Documents', path: 'documents', icon: 'folder2' },
  { label: 'Saved Properties', path: 'savedProperties', icon: 'shield-lock' },
  { label: 'Security Settings', path: 'security', icon: 'shield-lock' },
];

const roleItems: Record<string, MenuItem[]> = {
  CLIENT: [
    { label: 'Clinet information', path: 'client-info', icon: 'person-badge' },
    { label: 'Saved Properties', path: 'saved-properties', icon: 'bookmark' },
    { label: 'My Requests', path: 'my-requests', icon: 'calendar-check' },
  ],
  AGENT: [
    { label: 'Managed Properties', path: 'properties', icon: 'house' },
    { label: 'Property Requests', path: 'requests', icon: 'inbox' },
    { label: 'Deals & Transactions', path: 'deals', icon: 'cash-stack' },
    { label: 'Client Management', path: 'clients', icon: 'people' },
  ],
  OWNER: [
    { label: 'My Properties', path: 'my-properties', icon: 'houses' },
    { label: 'Rental History', path: 'rental-history', icon: 'journal' },
  ],
};

export function getProfileMenu(role?: string): MenuItem[] {
  return [...sharedItems, ...(roleItems[role ?? ''] ?? [])];
}