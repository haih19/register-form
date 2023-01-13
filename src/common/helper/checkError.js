export const checkValueObject = (obj) => {
   const result = Object.values(obj).every((value) => {
      return value === true;
   });

   return result;
};
