export function isActive(pathname: string, redirectTo: string) {
  return pathname.slice(8) === redirectTo.slice(8);
}