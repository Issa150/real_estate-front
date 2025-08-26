// features/profile/profileMenuItems.ts
export type MenuItem = { label: string; path: string; icon?: string };

const agentItems: MenuItem[] = [
  { label: 'Dashboard', path: '', icon: 'person' },
  { label: 'Property', path: 'property', icon: 'inbox' },
  { label: 'Deals', path: 'deals', icon: 'cash-stack' },
  { label: 'Flags', path: 'flags', icon: 'house' },
];

const managerOnlyItems: MenuItem[] = [
  { label: 'User Management', path: 'users', icon: 'person-gear' },
  { label: 'Analytics & Reports', path: 'analytics', icon: 'chart-bar' }
];

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