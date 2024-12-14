export function getGreeting(): string {
  const hours = new Date().getHours()
  
  if (hours < 12) return 'Good morning!'
  if (hours < 18) return 'Good afternoon!'
  return 'Good evening!'
}