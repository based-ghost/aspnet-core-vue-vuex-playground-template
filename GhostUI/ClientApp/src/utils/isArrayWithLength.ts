const isArrayWithLength = (val: unknown): boolean => Array.isArray(val) && !!val.length;

export default isArrayWithLength;