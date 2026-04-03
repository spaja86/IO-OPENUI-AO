export function formatTimestamp(date: Date): string {
  return date.toLocaleTimeString('sr-RS', { hour: '2-digit', minute: '2-digit' });
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}

export function getStatusColor(status: 'live' | 'active' | 'development'): string {
  switch (status) {
    case 'live':
      return '#10b981';
    case 'active':
      return '#00d4ff';
    case 'development':
      return '#f59e0b';
    default:
      return '#64748b';
  }
}

export function getStatusLabel(status: 'live' | 'active' | 'development'): string {
  switch (status) {
    case 'live':
      return '🟢 Live';
    case 'active':
      return '🔵 Aktivan';
    case 'development':
      return '🟡 U razvoju';
    default:
      return status;
  }
}
