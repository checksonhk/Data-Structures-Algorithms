function flattenDictionary(dict) {
  // your code goes here
  const flattened = {};
  flatten(dict, null, output);
  return flattened;
}

function flatten(dict, currentKey, output) {
  for (const key in dict) {
    const newKey = currentKey ? (key != '' ? `${currentKey}.${key}` : currentKey) : key;
    if (typeof dict[key] === 'string') {
      output[newKey] = dict[key];
    } else {
      flatten(dict[key], newKey, output);
    }
  }
}
