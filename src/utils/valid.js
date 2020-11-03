export function isValid(data, validConfig) {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of validConfig) {
    const {
      min, max, test, errMessage,
    } = item;
    if (typeof min === 'number') {
      if (data.length < min) {
        return {
          success: false,
          message: errMessage,
        };
      }
    }
    if (typeof max === 'number') {
      if (data.length > max) {
        return {
          success: false,
          message: errMessage,
        };
      }
    }
    if (test instanceof RegExp) {
      if (!test.test(data)) {
        return {
          success: false,
          message: errMessage,
        };
      }
    }
  }
  return {
    success: true,
  };
}

export function formValid(form, rules) {
  let result;
  const keyArr = Object.keys(rules);
  for (let i = 0; i < keyArr.length; i += 1) {
    const key = keyArr[i];
    result = rules[key](form[key]);
    if (!result.success) {
      return {
        name: key,
        ...result,
      };
    }
  }
  return result;
}
