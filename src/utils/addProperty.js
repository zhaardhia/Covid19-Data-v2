
export const addProperty = (array, property, newProperty) => {
  return array.map(item => {
    return {
        ...item,
        [newProperty]: item[property]
    }
  })  
};
