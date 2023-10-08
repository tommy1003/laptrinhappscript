/**
 * You can copy the function and paste into your source code or making a library for ease of scalability
 * @param {string} str string to remove accents
 * @returns string after removing accents
 */
function removeAccents(str) {
    return String(str).normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }

/**
 * 
 * @param {string} str string to remove accents
 * @returns string after removing accents
 */
function removeAccentsAndSpace(str) {
    return removeAccents(str).replace(/\s/g, '').trim()
}