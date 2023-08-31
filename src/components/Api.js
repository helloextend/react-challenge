const BASE_URL = 'https://dog.ceo/api';

export async function fetchImagesByBreed(breed) {
  const response = await fetch(`${BASE_URL}/breed/${breed}/images/random/10`);
  const data = await response.json();
  return data.message;
}