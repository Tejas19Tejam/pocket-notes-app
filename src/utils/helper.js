export function getAbbreviation(name) {
  const array = name.split(' ');

  if (array.length >= 2) return (array[0][0] + array[1][0]).toUpperCase();
  return (array[0][0] + ' ').toUpperCase();
}
