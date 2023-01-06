import isValid from "./is-valid";
type separator = "ws" | "." | "-";
type options = { separator?: separator };

/**
 * formats the BI code
 * @param id the BI code to be formatted
 * @param separator (optional) type of digit separator default "."
 * @returns formatted string BI code
 */
export default function format(id: string, options?: options): string {
  if (!isValid(id)) throw new Error("invalid id");

  let separator = options?.separator ?? ".";
  if (separator && separator === "ws") separator = " " as separator;

  const lastDigit = id.charAt(id.length - 1).toUpperCase();

  let result = id.substring(0, 4);
  result = `${result}${separator}${id.substring(4, 8)}`;
  result = `${result}${separator}${id.substring(8, 12)}`;
  result = `${result + lastDigit}`;

  return result;
}
