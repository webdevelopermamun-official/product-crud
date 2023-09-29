/**
 * generateRandomID
 * @param {*} length 
 * @returns 
 */


export const generateRandomID = (length = 24) => {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let randomID = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      randomID += characters.charAt(randomIndex);
    }
  
    return randomID;
}

/**
 * generateProductSlug
 * @param {*} slugName 
 * @returns 
 */

export const generateSlug = (slugName) => {
    // Convert the product name to lowercase
    const lowercaseName = slugName.toLowerCase();
  
    // Remove special characters, spaces, and non-alphanumeric characters
    const slug = lowercaseName
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')      // Replace spaces with hyphens
      .replace(/--+/g, '-')      // Replace consecutive hyphens with a single hyphen;
  
    return slug;
  }
  