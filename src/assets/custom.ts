export interface Searches {
  valid: Array<string>
  invalid: Array<string>
}

export const countOccurences = (array) => {
  const results = {};

  array = array.map(item => item.toLowerCase())

  for (let i = 0; i < array.length; i++) {
    if (results[array[i]]) {
      results[array[i]]++
    } else {
      results[array[i]] = 1
    }
  }

  return results
}


export const getRandomAmtFromArray = (num, array) => {
  const newArr = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * num);
    newArr.push(array.slice(randomIndex, randomIndex + 1))
  }
  return newArr;
}