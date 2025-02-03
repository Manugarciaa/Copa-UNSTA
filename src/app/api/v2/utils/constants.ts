export const BASE_URL = 'https://sheetdb.io/api/v1/820dceho5zt7l'

export const getSheetURL = (sheet?: string) => {
  if (!sheet) return BASE_URL
  // SheetDB usa ?sheet= para filtrar por hoja
  return `${BASE_URL}?sheet=${sheet}`
}