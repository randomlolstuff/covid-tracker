export const debounce = (fn, t) => {
    let timer;
  
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
      } else {
        timer = setTimeout(() => fn(...args), t);
      }
    };
  };
  