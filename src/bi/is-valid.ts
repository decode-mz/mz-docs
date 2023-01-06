/**
 * check if is valid BI number
 * @param id the BI number to check
 * @returns true if it is a valid BI number and false otherwise
 */

export default function isValid(id: string): boolean {
  if (typeof id !== "string") return false;
  if (id.length !== 13) return false;

  const lastDigit = id.charAt(id.length - 1).toLocaleLowerCase();
  if (!/[a-z]/.test(lastDigit)) return false;

  const numbers = id.substring(0, id.length - 1);
  if (!/^\d+$/.test(numbers)) return false;

  return true;
}
