export function formateDateString(date: string) {
  return Intl.DateTimeFormat('es-AR').format(new Date(date));
}
