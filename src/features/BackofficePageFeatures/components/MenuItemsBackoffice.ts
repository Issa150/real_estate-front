// features/profile/profileMenuItems.ts
export type MenuItem = { label: string; path: string; entityName?: string; icon?: string };

const agentItems: MenuItem[] = [
  { label: 'Dashboard', path: '', icon: 'person' },
  { label: 'Property', path: 'property', entityName: 'properties', icon: 'inbox' },
  { label: 'Requests', path: 'requests', entityName: 'clients/reserving', icon: 'inbox' },
  // { label: 'Deals', path: 'deals', entityName: 'deals', icon: 'cash-stack' },
  { label: 'Flags', path: 'flags', entityName: 'flags', icon: 'house' },
];

const managerOnlyItems: MenuItem[] = [
  { label: 'User Management', path: 'users', entityName: 'users', icon: 'person-gear' },
  { label: 'Analytics & Reports', path: 'analytics', icon: 'chart-bar' }
];

export const entitiesFromMenu = [...agentItems, ...managerOnlyItems]

const roleItems: Record<string, MenuItem[]> = {
  AGENT: agentItems,
  MANAGER: [...agentItems, ...managerOnlyItems],
};

export function getBackofficeMenu(role?: string): MenuItem[] {
  return roleItems[role ?? ''] ?? [];
}

export function getBackofficeEntities(role?: string): string[] {
  const menu = getBackofficeMenu(role);
  return menu.filter(item => item.path !== '').map(item => item.path);
}