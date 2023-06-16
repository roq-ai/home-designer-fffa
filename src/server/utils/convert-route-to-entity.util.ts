const mapping: Record<string, string> = {
  designs: 'design',
  images: 'image',
  organizations: 'organization',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
