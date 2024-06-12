const API_URL = 'https://dog.ceo/api';

export async function FetchData(breed) {
    const res = await fetch(`${API_URL}/breed/${breed}/images/random/10`)
    const data = await res.json()
    return data.message;
}