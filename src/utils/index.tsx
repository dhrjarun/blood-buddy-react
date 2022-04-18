export function variant<K = string, V = string>(...keys: K[]) {
  return function (key: K) {
    return function <VV = V>(...values: VV[]) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) return values[i];
      }
    };
  };
}
