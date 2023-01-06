type options = {
  /** determines the last digit of BI code. Must be in range of [a-z] */
  suffix?: string;
};

/**
 * generates a valid BI code
 * @param options generator customization options
 * @returns string BI code
 */
export default function generate(options?: options): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let suffix = characters.charAt(Math.floor(Math.random() * characters.length));

  if (options && options.suffix) {
    if (typeof options.suffix !== "string")
      throw new Error("[suffix_err]: suffix must be in range of [a-z][A-Z]");
    else suffix = options.suffix.toUpperCase();
  }

  for (let index = 0; index <= 11; index++) {
    let number = Math.floor(Math.random() * 9);
    result += number;
  }

  return result + suffix;
}
