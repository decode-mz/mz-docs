/**
 * check if is valid BI code
 * @param code the BI code to check
 * @returns true if it is a valid BI code and false otherwise
 */

export default function isValid(code: string): boolean {
  if (typeof code !== "string") return false;
  if (code.length !== 13) return false;

  const lastDigit = code.charAt(code.length - 1).toLocaleLowerCase();
  if (!/[a-z]/.test(lastDigit)) return false;

  const numbers = code.substring(0, code.length - 1);
  if (!/^\d+$/.test(numbers)) return false;

  return true;
}
