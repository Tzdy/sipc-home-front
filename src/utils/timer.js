function timer(func, wait) {
  const num = setTimeout(() => {
    try {
      func();
      clearTimeout(num);
      timer(func, wait);
    } catch {
      clearTimeout(num);
    }
  }, wait);
}

export default timer;
