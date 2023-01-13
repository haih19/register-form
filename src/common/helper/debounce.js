export function debounce(cb, delay = 300) {
   let timeOut;
   return (...args) => {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
         cb(...args);
      }, delay);
   };
}
