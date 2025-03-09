function deepEqual(x, y) {
  if (x === null || y === null) {
    return x === y;
  }

  const typeofX = typeof x;
  const typeofY = typeof y;

  if (typeofX !== typeofY) {
    return false;
  }

  if (typeofX === 'number' || typeofX === 'string' || typeofX === 'undefined') {
    return x === y;
  }

  if (typeofX === 'object' && !Array.isArray(x)) {
    if (Array.isArray(y)) return false;

    if (Object.keys(x).length !== Object.keys(y).length) return false;

    for (const key in x) {
      if (!deepEqual(x[key], y[key])) return false;
    }

    return true;
  }

  if (typeofX === 'object' && Array.isArray(x)) {
    if (!Array.isArray(y)) return false;

    if (x.length !== y.length) return false;

    if (!x.length) return true;

    for (let index = 0; index < x.length; index++) {
      if (!deepEqual(x[index], y[index])) return false;
    }

    return true;
  }
}

console.log(deepEqual({ 2: 'test', 1: 'test' }, { 1: 'test', 2: 'test' }));
console.log(deepEqual({}, { 1: '!' }));
console.log(deepEqual([], [0]));
console.log(deepEqual([], []));
console.log(deepEqual([{ test: 'test' }, 0], [{ test: 'test' }, 0]));
