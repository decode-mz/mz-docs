import { isValid as isValidBI, format, generate } from "./bi";
import { isValid as isValidNUIT } from "./nuit";

/**
 * All BI methods
 */
const bi = { isValid: isValidBI, format, generate };

/**
 * All NUIT methods
 */
const nuit = { isValid: isValidNUIT };

export { bi as bi };
