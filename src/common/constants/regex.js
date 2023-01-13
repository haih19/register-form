export const REGEX_PASSWORD =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*?;:'".,])(?=.*[0-9]).{6,16}$/;

//(?=.*[a-z]): at least on lowerCase character
//A-Z: at least one Upper case character
//...: at least one special character
//...: at least one numer
//...: 8<= length <= 32
export const REGEX_USERNAME = /^[a-zA-Z0-9]{6,16}$/;
// at least 6 characters
// on letters and numbers

export const REGEX_EMAIL =
   // eslint-disable-next-line no-useless-escape
   /^^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
