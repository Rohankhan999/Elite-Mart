export async function fetchWithErrorHandling(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch data. Please try again later.');
  }
}
