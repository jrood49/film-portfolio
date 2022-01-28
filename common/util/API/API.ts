const url = process.env.STRAPI_URL;

export const fetchAPI = async <T> (apiUrl: string): Promise<T> => {
  const res = await fetch(`${url}/${apiUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  const json = await res.json();
  return json;
};

export default fetchAPI;
