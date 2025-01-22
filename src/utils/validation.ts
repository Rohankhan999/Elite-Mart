export const validateInput = (value: string) => {
  const sanitized = value.replace(/[^a-zA-Z0-9]/g, '')
  return sanitized.slice(0, 50)
}
