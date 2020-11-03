function timer(func, wait) {
  const num = setTimeout(() => {
    func();
    clearTimeout(num);
    timer(func, wait);
  }, wait);
}

export default timer;
