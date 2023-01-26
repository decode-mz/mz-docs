/**
 * check if is valid NUIT number
 * @param code the NUIT code to check
 * @returns true if it is a valid BI code and false otherwise
 */
export default function isValid(code: number): boolean {
  if (String(code).length > 9) return false;

  if (!/^\d+$/.test(String(code))) return false;

  return true;
}
