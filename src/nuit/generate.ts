/**
 * generates a valid NUIT number
 * @returns NUIT number
 */
export default function generate(): number {
  let result = "";

  for (let index = 0; index <= 8; index++) {
    result += Math.floor(Math.random() * 9);
  }

  return parseInt(result);
}
