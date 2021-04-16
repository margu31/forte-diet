export function checkByte(e) {
  const maxByte = 180;
  const textVal = e.target.value;
  const textLen = textVal.length;

  let totalBytes = 0;
  for (let i = 0; i < textLen; i++) {
    const eachChar = textVal.charAt(i);
    const uniChar = escape(eachChar); //유니코드 형식으로 변환
    if (uniChar.length > 4) {
      totalBytes += 2;
    } else {
      totalBytes += 1;
    }
  }
  if (totalBytes > maxByte) {
    e.preventDefault();
    return totalBytes;
  } else {
    return totalBytes;
  }
}
