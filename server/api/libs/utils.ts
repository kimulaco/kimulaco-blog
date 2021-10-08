export const getQueryOne = (queryValue: unknown): string => {
  if (!queryValue) {
    return ''
  }
  if (Array.isArray(queryValue)) {
    return String(queryValue[0])
  }
  return String(queryValue)
}
