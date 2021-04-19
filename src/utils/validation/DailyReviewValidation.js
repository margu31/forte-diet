export function checkByte(e) {
  const textVal = e.target.value;
  const textLen = textVal.length;

  let totalBytes = 0;
  for (let i = 0; i < textLen; i++) {
    const eachChar = textVal.charAt(i);
    const uniChar = escape(eachChar);
    if (uniChar.length > 4) {
      totalBytes += 2;
    } else {
      totalBytes += 1;
    }
  }

  return totalBytes;
}
