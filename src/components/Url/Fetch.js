export default async function questionFetch(url, setState) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.error(error.message);
  }
}
