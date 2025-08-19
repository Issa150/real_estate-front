// features/profile/profileMenuItems.ts
export type MenuItem = { label: string; path: string; icon?: string };

const agentItems: MenuItem[] = [
  { label: 'Dashboard', path: '', icon: 'person' },
  { label: 'Property Requests', path: 'requests', icon: 'inbox' },
  { label: 'Flags', path: 'properties', icon: 'house' },
  { label: 'Deals & Transactions', path: 'deals', icon: 'cash-stack' },
  { label: 'My Clients', path: 'clients', icon: 'people' },
];

const managerOnlyItems: MenuItem[] = [
  { label: 'User Management', path: 'users', icon: 'person-gear' },
  { label: 'Analytics & Reports', path: 'analytics', icon: 'chart-bar' },
  { label: 'Global Listings', path: 'all-properties', icon: 'globe' },
];

const roleItems: Record<string, MenuItem[]> = {
  AGENT: agentItems,
  MANAGER: [...agentItems, ...managerOnlyItems],
};

export function getBackofficeMenu(role?: string): MenuItem[] {
  return roleItems[role ?? ''] ?? [];
}