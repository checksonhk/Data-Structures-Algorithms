function flattenDictionary(dict) {
  // your code goes here
  const output = {};
  flatten(dict, null, output);
  return output;
}

function flatten(dict, current_key, output) {
  for (const key in dict) {
    // when obj
    const newKey = current_key ? (key != '' ? `${current_key}.${key}` : current_key) : key;
    if (typeof dict[key] === 'string') {
      output[newKey] = dict[key];
    } else {
      flatten(dict[key], newKey, output);
    }
  }
}
