const isRTL = (text: string) => {
    // Unicode ranges for Hebrew, Arabic, and similar RTL languages
    const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  
    // Check if any character in the text matches the RTL character range
    return rtlChars.test(text);
  };
  
  const getDirection = (text: string) => {
    return isRTL(text) ? 'rtl' : 'ltr';
  };
  
  export default getDirection;