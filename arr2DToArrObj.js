/**
 * @param {Array} arr2D the Array to convert
 * @returns the Array of Objects
 * You can copy the function and paste into your source code or making a library for ease of scalability
*/
function arr2DToArrObj(arr2D) {
    let [keys, ...values] = arr2D;
    return values.map(row => Object.fromEntries(row.map((v, i) => [keys[i].trim(), v])))
}