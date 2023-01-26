import isValid from "./is-valid";
type separator = "ws" | "." | "-";
type options = { separator?: separator };

/**
 * formats the NUIT number
 * @param code the NUIT number to be formatted
 * @param separator (optional) type of digit separator default "."
 * @returns formatted string NUIT number
 */
export default function format(code: number, options?: options): string {
  if (!isValid(code)) throw new Error("invalid NUIT number");

  let result = "";
  const strCode = String(code);

  let separator = options?.separator ?? "ws";
  if (separator && separator === "ws") separator = " " as separator;

  result = strCode.substring(0, 3);
  result = `${result}${separator}${strCode.substring(3, 6)}`;
  result = `${result}${separator}${strCode.substring(6, 9)}`;

  return result;
}
