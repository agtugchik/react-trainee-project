export const filterQueryParams = (obj: { [key: string]: string }) => {
  const object = { ...obj };
  const filteredObject: { [key: string]: string } = {};
  for (const key in object) {
    if (object[key].length) filteredObject[key] = object[key];
  }
  if (Object.entries(filteredObject).length && !filteredObject.query) filteredObject.query = 'null';
  return filteredObject;
};
