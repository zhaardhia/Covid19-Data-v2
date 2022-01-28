
export const changeProperty = (array, property, newProperty) => {
  array.forEach(element => {
    element[newProperty] = element[property];
    delete element[property];
  });
  return array;
};
