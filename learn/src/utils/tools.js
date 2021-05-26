// 节流
// 原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
export const throttle = (func, wait) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
};

// 防抖
// 原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
export const debounce = (func, wait) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
};
